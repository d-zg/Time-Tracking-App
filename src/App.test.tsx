import React from 'react';
import App from './App';



const getData = async (url : any, data : any) => {
  const newData = await fetch(url, {
      method: 'GET',
      headers: {
          'content-type': 'application/json',
          'Accept': 'application/json' 
      },
      body: data
  })
  .then(res => res.json());
  console.log(newData); 
}

getData('/api', {date:'2022-05-24'});
