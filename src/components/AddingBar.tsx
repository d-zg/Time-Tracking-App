import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import Slider from 'rc-slider'
import Range from 'rc-slider'
import 'rc-slider/assets/index.css'

const AddingBar = () => {
    return(
        <div className="flexbox-container">
            <DropdownButton title="Add something you've done" id="dropdown-basic-button">
                <Dropdown.Item eventKey="1">Activity1</Dropdown.Item>
                <Dropdown.Item eventKey="2">Activity2</Dropdown.Item>
            </DropdownButton>{' '}
            <Slider min={0} max={24} step={.1}/> 
            <Button variant="primary" size="sm">
                Add
            </Button>
        </div>
    );
}

export default AddingBar; 