import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import Slider from 'rc-slider'
import { useState } from 'react'
import Range from 'rc-slider'
import 'rc-slider/assets/index.css'

const AddingBar = (props : any) => {
    const [activityInput, setActivityInput] = useState();
    const [timeInput, setTimeInput] = useState(0);

    const onSliderChange = (value : any) => {
        setTimeInput(value);
    }

    const onMenuSelect = (value : any) => {
        setActivityInput(value);
    }

    return(
        <div className="flexbox-container">
            <DropdownButton title="Add something you've done" id="dropdown-basic-button" onSelect = {onMenuSelect}>
                <Dropdown.Item eventKey="Sleep">Sleep</Dropdown.Item>
                <Dropdown.Item eventKey="Social">Social</Dropdown.Item>
            </DropdownButton>{' '}
            <Slider value = {timeInput} min={0} max={1440} step={5} onChange={onSliderChange}/>{' '} 
            <Button variant="primary" size="sm">
                Add {(timeInput - timeInput%60)/60} hours and {timeInput%60} minutes of {activityInput}
            </Button>
        </div>
    );
}

export default AddingBar; 