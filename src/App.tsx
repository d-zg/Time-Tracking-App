import React, { useState } from 'react'
import './App.css'
import TimeTrackingTable from './components/TimeTrackingTable'
import 'bootstrap/dist/css/bootstrap.min.css'
import Day from './api/day'
function App () {
  let yourDate = new Date()
  const date = `${yourDate.getDate()}/${yourDate.getMonth() + 1}/${yourDate.getFullYear()}`
  const offset = yourDate.getTimezoneOffset()
  yourDate = new Date(yourDate.getTime() - (offset * 60 * 1000))
  const today = new Day(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, yourDate.toISOString().split('T')[0])
  const getData = async (url : any, data : any) => {
    console.log('sending request')
    const newData = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json(), res => console.log('request rejected')).then(data => data.result[0])// .then(data => Object.entries(data))
    console.log('Got times')
    // setData(Object.entries(newData))
    return newData
  }
  const updateData = async (url : any, data : any) => {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }
  const getTotals = () => {
    getData('/api', today).then(val => setData(val))
  }
  const [data, setData] = useState(['Not updated, grab totals from server', {}])
  //  const data : any = [];  fda
  return (
    <div className="App">
      <h1>{date}</h1>
      <TimeTrackingTable totals={data} update={updateData} get={getData} callbackTotal={getTotals}/>
    </div>
  )
}

export default App
