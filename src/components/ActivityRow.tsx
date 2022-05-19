import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

const ActivityRow = (props : any) => {
    const activityName = props.name;
    const time = props.time; 
    const index = props.index; 
    const handleChange = (event : any) => {
        if (event === "Edit") {
            //stuff
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
                <Dropdown.Item eventKey="Edit">Edit</Dropdown.Item>
                <Dropdown.Item eventKey="Delete">Delete</Dropdown.Item>
            </DropdownButton>{' '}
        </tr>
    );
}

export default ActivityRow; 