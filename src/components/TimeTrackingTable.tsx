import ActivityTable from './ActivityTable'
import AddingBar from './AddingBar'
import React, { useState } from 'react'
import Day from '../api/day'

const TimeTrackingTable = (props : any) => {
  const activities = ['Classwork', 'Research', 'Exercise', 'Reading', 'Planning', 'Reflection', 'Learning', 'Meditate', 'Gratitude', 'Media', 'Social', 'Sleep'] // make this customizable/grab it from a server
  const totals : any = []
  for (const [key, value] of Object.entries(props.totals)) {
    if (value !== 0) {
      totals.push(
        { name: key, time: value }
      )
    }
  }
  console.log(totals)
  const [data, setData] = useState([{ name: 'Classwork', time: 0 }])
  const onAdd = (value : any) => {
    if (value.time !== 0) {
      setData([...data, { name: value.name, time: value.time }])
    }
  }
  const handleDelete = (value : any) => {
    console.log('Handling deletion at index ' + value.index)
    setData([...data.slice(0, value.index), ...data.slice(value.index + 1)])
  }
  const handleEdit = (value : any) => {
    console.log('Handling edit at index ' + value.index + ' new time: ' + value.time)
    if (value.time === 0) {
      handleDelete(value)
    } else if (value.time > 0) {
      setData([...data.slice(0, value.index), { name: data[value.index].name, time: value.time }, ...data.slice(value.index + 1)])
    }
  }
  const handleGet = async (value : any) => {
    let yourDate = new Date()
    const offset = yourDate.getTimezoneOffset()
    yourDate = new Date(yourDate.getTime() - (offset * 60 * 1000))
    console.log('handling get and getting data')
    const newTotals: ((prevState: { name: string; time: number }[]) => { name: string; time: number }[]) | { name: any; time: any }[] = []
    const today = new Day(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, yourDate.toISOString().split('T')[0])
    await props.get('/api', today).then((val: { [s: string]: unknown } | ArrayLike<unknown>) => Object.entries(val))
      .then((val: any) => {
        for (const [key, value] of val) {
          if (key !== 'activityDate' && value !== 0) {
            newTotals.push({ name: key, time: value })
          }
        }
      })
    setData(newTotals)
    props.callbackTotal()
  }
  return (
        <div>
            <ActivityTable data={data} columns={activities} handleDelete={handleDelete} handleEdit={handleEdit} totals={props.totals} update={props.update} get={handleGet}/>
            <AddingBar onAdd={onAdd} activities={activities}/>
        </div>
  )
}

export default TimeTrackingTable
