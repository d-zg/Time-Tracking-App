import ActivityTable from "./ActivityTable";
import AddingBar from "./AddingBar";
import {useState} from "react"
import { read, writeFileXLSX } from "xlsx"


const TimeTrackingTable = (props : any) => {
    const activities = ['Classwork', 'Research', 'Exercise', 'Reading', 'Planning', 'Reflection', 'Learning', 'Meditate', 'Gratitude', 'Media', 'Social', 'Sleep']; // make this customizable/grab it from a server
    const [data, setData] = useState([{name: 'Unaccounted', time: 1440},]); //TODO: put these data structures in a database server
    const onAdd = (value : any) => {
        if (value.time !== 0) {
            setData([...data, {name: value.name, time: value.time}]);
        }
    }
    const handleDelete = (value : any) => {
        console.log("Handling deletion at index " + value.index);
        setData([...data.slice(0, value.index), ...data.slice(value.index+1)]);
    }
    const handleEdit = (value : any) => {
        console.log("Handling edit at index " + value.index + " new time: " + value.time);
        if (value.time === 0) {
            handleDelete(value);
        } else if (value.time > 0 ) {
            setData([...data.slice(0, value.index), {name: data[value.index].name, time: value.time}, ...data.slice(value.index+1)]);
        }
    }
    return(
        <div>
            <ActivityTable data={data} handleDelete={handleDelete} handleEdit={handleEdit}/>
            <AddingBar onAdd={onAdd} activities={activities}/>
        </div>
    ); 
}

export default TimeTrackingTable;