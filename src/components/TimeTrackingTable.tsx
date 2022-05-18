import ActivityTable from "./ActivityTable";
import AddingBar from "./AddingBar";
import {useState} from "react"
const TimeTrackingTable = () => {
    const data = useState([]); 
    return(
        <div>
            <ActivityTable props={data}/>
            <AddingBar />
        </div>
    ); 
}

export default TimeTrackingTable;