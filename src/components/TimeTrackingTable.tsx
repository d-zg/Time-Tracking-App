import ActivityTable from "./ActivityTable";
import AddingBar from "./AddingBar";
import {useState} from "react"



const TimeTrackingTable = () => {
    const data = useState([{activityName: 'Unaccounted', time: 1440}]); 
    return(
        <div>
            <ActivityTable props={data}/>
            <AddingBar />
        </div>
    ); 
}

export default TimeTrackingTable;