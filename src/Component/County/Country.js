import React from 'react';
//single country show koranor jonne
import './Country.css'

const Country = (props) => {


    //distructuring
    const { name, area } = props.country

    return (

        <div className='country'>
            <h2>Country name : {name.common}</h2>
            <h4>area : {area}</h4>

        </div>
    );
};

export default Country;