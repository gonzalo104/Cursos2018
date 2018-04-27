import React from 'react';
import WeatherIcons from 'react-weathericons';
import {CLOUD, CLOUDY, SUN,RAIN,SNOW,WINDY} from './../../../constants/weathers';
import PropTypes from 'prop-types'; 
import './styles.css';



const stateToIconName = weatherState => {
	
	switch (weatherState) {
		case CLOUD:
			return "cloud";
		case CLOUDY:
			return "cloudy";
		case SUN:
			return "day-sunny";
		case RAIN:
			return "rain";
		case SNOW:
			return "snow";
		case WINDY:
			return "windy";
		default:
			return "day-sunny";
	}
	
};

const getWeatherIcon = weatherState =>{
	return (<WeatherIcons className='wicon' name={stateToIconName(weatherState)} size="4x" />)
};


const WeatherTemperature = ({temperature, weatherState}) => (
	<div className="weatherTemperatureCount">
	{getWeatherIcon(weatherState)}
	
	<span className="temperature">{`${temperature} `}</span>
	<span className="temperaturetype">Cº</span>
	</div>
	);

WeatherTemperature.propTypes = {
	temperature: PropTypes.number.isRequired,
	weatherState: PropTypes.string,
};




export default WeatherTemperature;