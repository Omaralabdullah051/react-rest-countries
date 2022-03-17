import React from 'react';
import './Country.css'
const Country = (props) => {
    const { name, population, region, area, flags } = props.country
    return (
        <div className="country bg-success">
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <h3>Population: {population}</h3>
            <p>Area: {area}</p>
            <p><small>Region: {region}</small></p>
        </div>
    );
};

export default Country;