import ActivityRow from './ActivityRow'
import Table from 'react-bootstrap/Table'
import { Container } from 'react-bootstrap'
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
const ActivityTable = (props : any) => {
  const rows : any = []
  const totals : any = []
  console.log('inactivitytable')
  console.log(Object.entries(props.totals))
  //   const totals : any = []
  // const map = new Map(props.totals);
  // const mapAdd = (value : any) => {
  //     if (map.has(value.name)) {
  //         map.set(value.name, map.get(value.name) + value.time);
  //     }
  //     else if (!map.has(value.name)) {
  //         map.set(value.name, value.time);
  //     }
  // }
  let index = 0
  props.data.forEach((activity : any) => {
    rows.push(<ActivityRow name={activity.name} time={activity.time} index={index} handleDelete={props.handleDelete} handleEdit={props.handleEdit}/>)
    // mapAdd(activity);
    index = index + 1
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

  // useEffect

  return (
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
            <thead>
                <tr>
                    <th colSpan={2}>Totals</th>
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
        </Container>
  )
}

export default ActivityTable
