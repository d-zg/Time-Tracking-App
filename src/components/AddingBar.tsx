/* eslint-disable react/jsx-key */
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import Slider from 'rc-slider'
import React, { useState } from 'react'
import { handleRender } from './helpers/TooltipSlider'
import 'rc-slider/assets/index.css'

const AddingBar = (props : any) => {
  const [activityInput, setActivityInput] = useState("Add something you've done")
  const [timeInput, setTimeInput] = useState(0)
  const [valid, setValid] = useState(false)
  const onSliderChange = (value : any) => {
    setTimeInput(value)
  }

  const onMenuSelect = (value : any) => {
    setActivityInput(value)
    setValid(true)
  }
  const onClick = (value : any) => {
    value.preventDefault()
    props.onAdd({ name: activityInput, time: timeInput })
    setTimeInput(25)
  }

  return (
        <div className="flexbox-container">
            <DropdownButton title={activityInput} id="dropdown-basic-button" onSelect = {onMenuSelect}>
                {props.activities.map((value : any) => <Dropdown.Item eventKey={value}>{value}</Dropdown.Item>)}
            </DropdownButton>{' '}
            <Slider value = {timeInput} min={0} max={1440} step={5} onChange={onSliderChange} handleRender={handleRender}/>{' '}
            {/* <Button variant="primary" size="sm" onClick = {props.onAdd({name: activityInput, time: timeInput})}>
                Add {(timeInput - timeInput%60)/60} hours and {timeInput%60} minutes of {activityInput}
            </Button> */}
            {valid
              ? (<Button variant="primary" size="sm" onClick = {onClick}>
                Add {(timeInput - timeInput % 60) / 60} hours and {timeInput % 60} minutes of {activityInput}
            </Button>)
              : null}
        </div>
  )
}

export default AddingBar
