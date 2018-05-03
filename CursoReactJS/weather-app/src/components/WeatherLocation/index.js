import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import CircularProgress from 'material-ui/CircularProgress';
import PropTypes from 'prop-types'

/*const api_key = "a7d1c86d3802f3effadbe35c142cf3f4"
const url = "http://api.openweathermap.org/data/2.5/weather"
componentWillMount() {
	const api_weather = `${url}?q=${this.state.city}&appid=${api_key}`
	fetch(api_weather).then(data => { 
		return data.json()
	}).then(weather_data => {
		const data = transformWeather(weather_data)
		this.setState({data})
		//console.log(weather_data)
	});	
}*/

const WeatherLocation = ({onWeatherLocationClick,city, data}) => (			
			<div className="weatherLocationCount" onClick={onWeatherLocationClick}>
			<Location city={city} />
			{ data ? <WeatherData data={data}/> : 
			<CircularProgress size={60} thickness={7} />
			}
			</div>				
);

	WeatherLocation.propTypes = {
		city: PropTypes.string,
		onWeatherLocationClick: PropTypes.func,
		data: PropTypes.shape({
			temperature: PropTypes.number.isRequired,
			weatherState: PropTypes.string.isRequired,
			humidity: PropTypes.number.isRequired,
			wind: PropTypes.string.isRequired,
		}),
	}

export default WeatherLocation