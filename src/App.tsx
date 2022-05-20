import React from 'react';
import './App.css'
import TimeTrackingTable from "./components/TimeTrackingTable"
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const getData = async (url : any) => {
      const newData = await fetch(url, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then(res => res.json());
      console.log(newData); 
  }

  getData('/api'); 
  return (
    <div className="App">
      <h1>{date}</h1>
      <TimeTrackingTable />
    </div>
  );
}

export default App;
