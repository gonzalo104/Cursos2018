import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'
import ForecastItem from './ForecastItem'


const renderForecastItemDays = (forecastData) =>{
    return forecastData.map(forcast => (
         <ForecastItem 
            key={`${forcast.weekDay}${forcast.hour}`}
            weekDay={forcast.weekDay} 
            hour={forcast.hour} 
            data={forcast.data}>
        </ForecastItem>))
}

const renderProgress = () => {
    return <h3>Cargando Pronóstico extendido ..</h3> 
}

 const ForecastExtended = ({city, forecastData}) => (
      
             <div>
                <h2 className="forecast-title">Pronóstico Extendido {city}</h2>                
               { forecastData ?
                     renderForecastItemDays(forecastData) :
                     renderProgress()
                }
            </div>
          
     
    );

ForecastExtended.propTypes ={
    city: PropTypes.string.isRequerid,
    forecastData: PropTypes.array.isRequired,
}


 export default ForecastExtended