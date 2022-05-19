import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { useState } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import TooltipSlider, { handleRender } from './helpers/TooltipSlider';


const ActivityRow = (props : any) => {
    const activityName = props.name;
    const time = props.time; 
    const index = props.index; 

    const [timeInput, setTimeInput] = useState(time);
    const onSliderChange = (value : any) => {
        setTimeInput(value);
    }

    const handleChange = (event : any) => {
        if (event === "Edit") {
            props.handleEdit({index: index, time: timeInput});
            console.log("updated activity at index " + index + " with new time " + timeInput);
        }
        else if (event === "Delete") {
            props.handleDelete({index: index}); 
            console.log("deleted activity at index " + index);
        }
    }
    return(
        <tr>
            <td>{activityName}</td>
            <td>{(time - time%60)/60} hours and {time%60} minutes</td>
            <DropdownButton title={''} id="dropdown-basic-button" size="sm" onSelect = {handleChange}>
                <Dropdown.Item eventKey="Edit">
                    Edit
                    <Slider value = {timeInput} min={0} max={1440} step={5} onChange={onSliderChange} handleRender = {handleRender}/></Dropdown.Item>
                <Dropdown.Item eventKey="Delete">Delete</Dropdown.Item>
            </DropdownButton>{' '}
        </tr>
    );
}

export default ActivityRow; 