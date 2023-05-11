import React from 'react';
import './Country.css'
const Country = (props) => {
    // console.log(props.country.area)

    //Destructuring method

    const {population,region,area,name,flags}=props.country;
    // console.log(props.country)
    return (
        <div className='country'>

            <h1>Country Name:{name.common}</h1>
            <img src={flags.png} alt=""/>
            <p>Population:{population}</p>
            <p><small>Region:{region}</small></p>
            <p><small>Area:{area}</small></p>

             {/* normal method */}
            {/* <h1>Country Name:{props.country.name.common}</h1>
            <p>Population:{props.country.population}</p>
            <p><small>Region:{props.country.region}</small></p>
            <p><small>Area:{props.country.area}</small></p> */}

        </div>
    );
};

export default Country;