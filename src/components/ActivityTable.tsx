import ActivityRow from "./ActivityRow";
import Table from 'react-bootstrap/Table'
const ActivityTable = (props : any) => {
    const rows : any = [];
    const totals : any = [];
    const map = new Map(); 
    const mapAdd = (value : any) => {
        if (map.has(value.name)) {
            map.set(value.name, map.get(value.name) + value.time);
        }
        else if (!map.has(value.name)) {
            map.set(value.name, value.time);
        }
    }
    var index = 0; 
    props.data.forEach((activity : any) => {
        rows.push(<ActivityRow name={activity.name} time={activity.time} index={index} handleDelete={props.handleDelete} handleEdit={props.handleEdit}/>);
        mapAdd(activity);
        index = index+1; 
    });
    map.forEach((value : any, key : any) => {
        totals.push(
            <tr>
                <td>{key}</td>
                <td>{(value - value%60)/60} hours and {value%60} minutes</td>
            </tr>
        );
    })
    
    
    return (
        <Table> 
            <thead>         
                <tr> 
                    <th>Activity</th>
                    <th>Time</th>
                </tr>
            </thead> 
            <tbody>
                {rows}
            </tbody>
            <thead>         
                <tr> 
                    <th colSpan={2}>Totals</th>
                </tr>
            </thead> 
            <thead>         
                <tr> 
                    <th>Activity</th>
                    <th>Time</th>
                </tr>
            </thead> 
            <tbody>
                {totals}
            </tbody>
        </Table>
    );
}

export default ActivityTable;