import React from 'react'
import PropTypes from 'prop-types'
import WeatherLocation from './WeatherLocation'
import './styles.css'

const LocationList = ({cities, onSelectedLocation}) => {

		const hanIdeWeatherLocationClick = city => {
			console.log("hanIdeWeatherLocationClick")
			onSelectedLocation(city);
		}

		const stringToComponent = cities => (
			cities.map(city => (
				<WeatherLocation 
					key={city}
					city={city}   
					onWeatherLocationClick = {() => hanIdeWeatherLocationClick(city)} />))
		);

		return (
				<div className="LocationList">
					{stringToComponent(cities)}		
				</div>
				);
	};

LocationList.propTypes ={
	cities: PropTypes.array.isRequired,
	onSelectedLocation: PropTypes.func,
}

export default LocationList