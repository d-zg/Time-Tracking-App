import ActivityRow from './ActivityRow'
import Table from 'react-bootstrap/Table'
import { Container } from 'react-bootstrap'
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
// import useCollapse from 'react-collapsed'
import Day from '../api/day'
import Collapsible from 'react-collapsible'
const ActivityTable = (props : any) => { // TODO: rewrite and refactor this entire thing it's pretty gross
  const rows : any = []
  const totals : any = []
  console.log('inactivitytable')
  console.log(Object.entries(props.totals))
  const newTotals : any = []
  const map = new Map([
    ['Classwork', 0],
    ['Research', 0],
    ['Exercise', 0],
    ['Reading', 0],
    ['Planning', 0],
    ['Reflection', 0],
    ['Learning', 0],
    ['Meditation', 0],
    ['Gratitude', 0],
    ['Media', 0],
    ['Social', 0],
    ['Sleep', 0]
  ])
  const mapAdd = (value : any) => {
    if (map.has(value.name)) {
      map.set(value.name, map.get(value.name) + value.time)
    } else if (!map.has(value.name)) {
      map.set(value.name, value.time)
    }
  }
  let index = 0
  props.data.forEach((activity : any) => {
    rows.push(<ActivityRow name={activity.name} time={activity.time} index={index} handleDelete={props.handleDelete} handleEdit={props.handleEdit}/>)
    mapAdd(activity)
    index = index + 1
  })
  map.forEach((value : any, key : any) => {
    newTotals.push(
        <tr>
            <td>{key}</td>
            <td>{(value - value % 60) / 60} hours and {value % 60} minutes</td>
        </tr>
    )
  })
  for (const [key, value] of Object.entries(props.totals)) {
    totals.push(
            <tr>
                <td>{key}</td>
                {(typeof value === 'number') ? (<td> {(value - value % 60) / 60} hours and {value % 60} minutes</td>) : null}
            </tr>
    )
  }
  totals.pop()

  const handleUpdate = (value : any) => {
    value.preventDefault()
    props.update('/task/update', new Day(map.get('Classwork'), map.get('Research'), map.get('Exercise'), map.get('Reading'), map.get('Planning'), map.get('Reflection'),
      map.get('Learning'), map.get('Meditation'), map.get('Gratitude'), map.get('Media'), map.get('Social'), map.get('Sleep'), new Date()))
  }

  // useEffect

  return (
      <div>
        <Container>
        <Table>
            <thead>
                <tr>
                    <th>Activity</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </Table>
        <Collapsible trigger="Click to collapse Totals" open={true}>
        <Table>
            <thead>
                <tr>
                    <th colSpan={2}>New Totals</th>
                </tr>
            </thead>
            <thead>
                <tr>
                    <th>Activity</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                {newTotals}
            </tbody>
            <thead>
                <tr>
                    <th colSpan={2}>Server Totals</th>
                </tr>
            </thead>
            <thead>
                <tr>
                    <th>Activity</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                {totals}
            </tbody>
        </Table>
        <button onClick={handleUpdate}>Push totals to server</button>
        </Collapsible>
        </Container>
    </div>
  )
}

export default ActivityTable
