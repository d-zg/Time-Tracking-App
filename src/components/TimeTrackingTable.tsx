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
    const handleDelete = (value : any) => {
        console.log("Handling deletion at index " + value.index);
        setData([...data.slice(0, value.index), ...data.slice(value.index+1)]);
    }
    return(
        <div>
            <ActivityTable data={data} handleDelete={handleDelete}/>
            <AddingBar onAdd={onAdd}/>
        </div>
    ); 
}

export default TimeTrackingTable;