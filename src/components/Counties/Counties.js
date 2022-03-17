import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Counties.css';

const Counties = () => {
    const [counties, setCounties]= useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=> setCounties(data))
    },[]);
    return (
        <div className='container-main'>
            <h2>Wellcome To Visited Counties: {counties.length}</h2>
            <div className='container-country'>
                {
                  counties.map(country=> <Country 
                    key={country.name.common}
                    country={country} 
                    ></Country>)
                 }
            </div>
          
            {/* <Country name={country.name.common} img={country.flags.svg} capital={country.capital} population={country.population}></Country> */}
          
        </div>
    );
};

export default Counties;