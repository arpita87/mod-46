import React from 'react';
//single country show koranor jonne
import './Country.css'

const Country = (props) => {
    //console.log(props.country)

    //distructuring
    const { name, area, flags } = props.country

    return (

        <div className='country'>
            <h2>Country name : {name.common}</h2>
            {/* <img src= {flags.png} alt=" " /> */}
            <h4>area : {area}</h4>

        </div>
    );
};

export default Country;