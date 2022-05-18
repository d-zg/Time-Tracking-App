const ActivityRow = (activityName : any, time : any) => {
    return(
        <tr>
            <td>{activityName}</td>
            <td>{time}</td>
        </tr>
    );
}

export default ActivityRow; 