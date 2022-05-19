import ActivityRow from "./ActivityRow";
import Table from 'react-bootstrap/Table'
const ActivityTable = (props : any) => {
    const rows : any = [];
    var index = 0; 
    props.data.forEach((activity : any) => {
        rows.push(<ActivityRow name={activity.name} time={activity.time} index={index} handleDelete={props.handleDelete}/>);
        index = index+1; 
    });
    
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
             
        </Table>
    );
}

export default ActivityTable;