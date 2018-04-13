import React from 'react'
import PropTypes from 'prop-types'
import WeatherLocation from './WeatherLocation'


const stringToComponent = cities => (

        cities.map(city => (<WeatherLocation key={city} city={city} /> ))
        

	);

const LocationList = ({cities}) => (

	<div>
		{stringToComponent(cities)}		
	</div>


	);


LocationList.propTypes ={
	cities: PropTypes.array.isRequired
}



export default LocationList