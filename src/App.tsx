import React, { useState } from 'react'
import './App.css'
import TimeTrackingTable from './components/TimeTrackingTable'
import 'bootstrap/dist/css/bootstrap.min.css'
import Day from './api/day'
function App () {
  const current = new Date()
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`

  const today = new Day(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, current)
  const getData = async (url : any, data : any) => {
    console.log('sending request')
    console.log(data.date)
    console.log(JSON.stringify(data))
    const newData = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json(), res => console.log('request rejected')).then(data => data.result[0])// .then(data => Object.entries(data))
    console.log('Got times')
    console.log(Object.entries(newData))
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
  const [data, setData] = useState(['Not updated, grab totals from server', {}])
  //  const data : any = [];  fda
  console.log('loaded')
  console.log(data)
  return (
    <div className="App">
      <h1>{date}</h1>
      <TimeTrackingTable totals={data} update={updateData}/>
      <button onClick={() => (getData('/api', today).then(val => setData(val)))}>Get totals</button>
    </div>
  )
}

export default App
