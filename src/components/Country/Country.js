import React from 'react';
import './Country.css'

const Country = (props) => {
    const {flags, name, capital, area, population, region} = props.country;
    // console.log(props.country);
    return (
        <div className='country-info'>
            <img src={flags.svg} alt="" />
            <h4>Name: {name.common}</h4>
            <p>Capital: {capital}</p>
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <p><span>Region: {region}</span></p>
            {/* <img src={props.img} alt="" srcset="" />
            <h4>Name: {props.name}</h4>
            <p>Capital: {props.capital}</p>
            <p><small>Population: {props.population}</small></p> */}
            
        </div>

    );
};

export default Country;