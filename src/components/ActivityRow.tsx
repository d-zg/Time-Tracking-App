const ActivityRow = (props : any) => {
    const activityName = props.name;
    const time = props.time;  
    return(
        <tr>
            <td>{activityName}</td>
            <td>{(time - time%60)/60} hours and {time%60} minutes</td>
        </tr>
    );
}

export default ActivityRow; 