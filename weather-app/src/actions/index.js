import transformForecast from './../services/transformForecast'
export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
const setCity = payload => ({type: 'SET_CITY', payload})

const setForcastData = payload => ({type:SET_FORECAST_DATA, payload})

const api_key = "a7d1c86d3802f3effadbe35c142cf3f4"
const url = "http://api.openweathermap.org/data/2.5/forecast"

export const setSelectedCity = payload => {

    return dispatch =>{
        const url_forcast = `${url}?q=${payload}&appid=${api_key}`

        //activar en el estado un indicador de busqueda de datos
        dispatch(setCity(payload))

        return fetch(url_forcast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data)
                const forecastData = transformForecast(weather_data)
                console.log(forecastData)
               //modificar el estado con  el resultado de la primise()
               dispatch(setForcastData({city:payload, forecastData}))
            }
        )
  
    };
};