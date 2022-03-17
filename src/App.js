import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Counties from './components/Counties/Counties';

function App() {
  return (
    <div className="App">
      <Counties></Counties>
    </div>
  );
}


/* 
<LoadCounties></LoadCounties>
function LoadCounties(){
  const [counties, setCounties]= useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then (res=>res.json())
    .then (data => setCounties(data))
  },[]);
  return (
    <div>
      <h1>Visiting Every Counties...</h1>
      <h3>Available Counties: {counties.length}</h3>
      {
        counties.map(country=> <Country name={country.name.common} population={country.population} img={country.flags.svg}></Country>)
      }
    </div>
  )
}

function Country(props){
  return (
    <div>
      <img src={props.img} alt="" className='img-size'/>
      <h3>Name: <span>{props.name}</span></h3>
      <p>Population: {props.population}</p>

    </div>
  )
} */

export default App;
