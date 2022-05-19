import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

const ActivityRow = (props : any) => {
    const activityName = props.name;
    const time = props.time; 
    
    return(
        <tr>
            <td>{activityName}</td>
            <td>{(time - time%60)/60} hours and {time%60} minutes</td>
            <DropdownButton title={''} id="dropdown-basic-button" size="sm">
                <Dropdown.Item eventKey="Edit">Edit</Dropdown.Item>
                <Dropdown.Item eventKey="Delete">Delete</Dropdown.Item>
            </DropdownButton>{' '}
        </tr>
    );
}

export default ActivityRow; 