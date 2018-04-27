import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import transformWeather from './../../services/transformWeather';
import CircularProgress from 'material-ui/CircularProgress';
import PropTypes from 'prop-types'

const api_key = "a7d1c86d3802f3effadbe35c142cf3f4"
const url = "http://api.openweathermap.org/data/2.5/weather"

class WeatherLocation extends Component {

		constructor({city}){
			super();
			this.state = {
				city,
				data: null

			};
			//console.log("constructor")
		}


		handleUpdateClick = () =>{
			const api_weather = `${url}?q=${this.state.city}&appid=${api_key}`
			fetch(api_weather).then(data => { 
				return data.json()
			}).then(weather_data => {
				const data = transformWeather(weather_data)
				this.setState({data})
				//console.log(weather_data)
			});
		}



		componentWillMount() {
			this.handleUpdateClick()	
		}

		/*componentDidMount() {
			console.log("componentDidMount")
		}


		componentWillUpdate() {
			console.log("componentWillUpdate")
		}

		componentDidUpdate() {
			console.log("componentDidUpdate")
			
		}*/



		render = () => {
			//console.log("render")
			const {onWeatherLocationClick} = this.props
			const {city, data} = this.state
			return(
			<div className="weatherLocationCount" onClick={onWeatherLocationClick}>
			<Location city={city} />
			{ data ? <WeatherData data={data}/> : 
			<CircularProgress size={60} thickness={7} />
			}
			</div>)
			
		};
	}

	WeatherLocation.propTypes = {
		city: PropTypes.string,
		onWeatherLocationClick: PropTypes.func,
	}

export default WeatherLocation