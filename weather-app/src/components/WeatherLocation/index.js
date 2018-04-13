import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import transformWeather from './../../services/transformWeather';

const api_key = "a7d1c86d3802f3effadbe35c142cf3f4"
//const city = "san luis potosi,mx"
const url = "http://api.openweathermap.org/data/2.5/weather"

class WeatherLocation extends Component {

		constructor({city}){
			super();
			this.state = {
				city,
				data: null

			};
			console.log(city)
			console.log("constructor")
		}


		handleUpdateClick = () =>{
			const api_weather = `${url}?q=${this.state.city}&appid=${api_key}`
			console.log(api_weather)
			fetch(api_weather).then(data => { 
				return data.json()
			}).then(weather_data => {
				const data = transformWeather(weather_data)
				this.setState({data})
				console.log(weather_data)
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
			console.log("render")
			const {city, data} = this.state
			return(
			<div className="weatherLocationCount">
			<Location city={city} />
			{ data ? <WeatherData data={data}/> : "CArgando..."}
			</div>)
			
		};
	}

export default WeatherLocation;