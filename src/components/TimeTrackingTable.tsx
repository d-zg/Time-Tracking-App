import ActivityTable from "./ActivityTable";
import AddingBar from "./AddingBar";
import {useState} from "react"



const TimeTrackingTable = () => {
    const [data, setData] = useState([{name: 'Unaccounted', time: 1440},]); 
    const onAdd = (value : any) => (event : any) => {
        event.preventDefault();
        if (value.time !== 0) {
            setData([...data, {name: value.name, time: value.time}]);
        }
    }
    const handleEdit = (value : any) => (event : any) => {
        event.preventDefault();
        if (value.time !== 0) {
            setData([...data, {name: value.name, time: value.time}]);
        }
    }
    return(
        <div>
            <ActivityTable data={data}/>
            <AddingBar onAdd={onAdd}/>
        </div>
    ); 
}

export default TimeTrackingTable;