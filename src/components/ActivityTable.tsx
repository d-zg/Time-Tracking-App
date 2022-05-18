import ActivityRow from "./ActivityRow";
import Table from 'react-bootstrap/Table'
const ActivityTable = (props : any) => {
    const rows : any = [];
    // props.activity.forEach((activity : any) => {
    //     rows.push(<ActivityRow activityName={activity.activityName} time={activity.time}/>);
    // });

    return (
        <Table> 
            <thead>         
            <tr> 
                <th>Activity</th>
                <th>Time</th>
            </tr>
            </thead> 
            <tbody>{rows}</tbody>
             
        </Table>
    );
}

export default ActivityTable;