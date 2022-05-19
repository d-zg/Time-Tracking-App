import ActivityTable from "./ActivityTable";
import AddingBar from "./AddingBar";
import {useState} from "react"



const TimeTrackingTable = () => {
    const activities = ['Classwork', 'Research', 'Exercise', 'Reading', 'Planning/Reflection', 'Learning', 'Meditate', 'Gratitude', 'Media', 'Social', 'Sleep']; // make this customizable/grab it from a server
    const [data, setData] = useState([{name: 'Unaccounted', time: 1440},]); 
    // const [map, setMap] = useState(new Map()); 
    // const mapAdd = (value : any) => {
    //     if (map.has(value.name)) {
    //         setMap((prev) => new Map(prev).set(value.name, prev.get(value.name) + value.time));
    //     }
    //     else if (!map.has(value.name)) {
    //         setMap(prev => new Map(prev).set(value.name, value.time));
    //     }
    // }
    const onAdd = (value : any) => {
        if (value.time !== 0) {
            setData([...data, {name: value.name, time: value.time}]);
            // mapAdd(value);
        }
    }
    const handleDelete = (value : any) => {
        console.log("Handling deletion at index " + value.index);
        // const subtracted = data[value.index].time * -1;
        // mapAdd({name: data[value.index].name, time: subtracted}); 
        setData([...data.slice(0, value.index), ...data.slice(value.index+1)]);
    }
    const handleEdit = (value : any) => {
        console.log("Handling edit at index " + value.index + " new time: " + value.time);
        // const difference = value.time - data[value.index].time;
        // mapAdd({name: data[value.index].name, time: difference});
        setData([...data.slice(0, value.index), {name: data[value.index].name, time: value.time}, ...data.slice(value.index+1)]);
    }
    return(
        <div>
            <ActivityTable data={data} handleDelete={handleDelete} handleEdit={handleEdit}/>
            <AddingBar onAdd={onAdd} activities={activities}/>
        </div>
    ); 
}

export default TimeTrackingTable;