import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './styles.css'
import ForecastItem from './ForecastItem'
import transformForecast from './../services/transformForecast'
/*const days = ["Lunes","Martes","Miercoles", "Jueves", "Viernes"]
const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal',

}*/
const api_key = "a7d1c86d3802f3effadbe35c142cf3f4"
const url = "http://api.openweathermap.org/data/2.5/forecast"

 class ForecastExtended extends Component{

    constructor(){
        super()
        this.state = {forecastData: null}
    }

    componentDidMount(){
        //fetch or axios
       this.updateCity(this.props.city)

    }


    componentWillReceiveProps(nextProps){
        if(nextProps !== this.props.city){
            this.setState({forecastData: null})
            this.updateCity(nextProps.city)
        }
    }

    updateCity = city =>{
        const url_forcast = `${url}?q=${this.props.city}&appid=${api_key}`
        fetch(url_forcast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data)
                const forecastData = transformForecast(weather_data)
                console.log(forecastData)
                this.setState({forecastData})
            }
        )
    }

    renderForecastItemDays(forecastData){
        return forecastData.map(forcast => (
             <ForecastItem 
                key={`${forcast.weekDay}${forcast.hour}`}
                weekDay={forcast.weekDay} 
                hour={forcast.hour} 
                data={forcast.data}>
            </ForecastItem>))
    }

    renderProgress = () =>{
        return <h3>Cargando Pronóstico extendido ..</h3> 
    }

     render(){
         const {city} = this.props
         const {forecastData} = this.state
         return (
             <div>
                <h2 className="forecast-title">Pronóstico Extendido {city}</h2>                
               { forecastData ?
                     this.renderForecastItemDays(forecastData) :
                     this.renderProgress()
                }
            </div>
         )  
     }
 }

ForecastExtended.propTypes ={
    city: PropTypes.string.isRequerid,
}


 export default ForecastExtended