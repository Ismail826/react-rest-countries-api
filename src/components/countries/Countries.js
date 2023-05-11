import React, { useEffect, useState } from 'react';
import './Countries.css'
import Country from '../country/Country';
const Countries = () => {
    const [countries,setCountries]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data));
    },[])
    return (
        <div >
            <h1>Hello from Countries Api:{countries.length}</h1>
            <div className='countries-container'>
           {/*  {
                countries.map(country=>console.log(country))
            } */}

            {
                //single vabe data pata te hy ei vabe

                /* name={country.name.common} population={country.population} area={country.area}
                region={country.region} */


                countries.map(country => <Country  /*pass multiple value  */  country={country} key={country.cca3}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;