// import React from 'react';

// const Countries = () => {
//     return (
//         <div>
//             <h2>visit country with extension pack</h2>

//         </div>
//     );
// };

// export default Countries;



//--------------Shob data load korbe ....kintu show onn jaigai korbe---------//


import React, { useEffect, useState } from 'react';
import Country from '../County/Country';
import './Countries.css'

//1st kaj
const Countries = () => {
    const [countries, setCountries] = useState([])
    //2nd kaj
    useEffect(() => {
        fetch('https://restcountries.com/v3/all')
            .then(res => res.json())
            //3rd kaj
            .then(data => setCountries(data))
    }, [])


    return (
        <div >
            <h2>visit country with........ rest countries </h2>
            {/* {//4th kaj
                countries.map(country => console.log(country))
            } */}
            <div className="all-countries">
                {
                    countries.map(country => <Country
                        country={country}
                        //unique key
                        key={country.cca3}
                    //  name={country.name.common}
                    // area={country.area}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;