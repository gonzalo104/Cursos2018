export const SET_CITY = 'SET_CITY';
export const setCity = payload => ({type: 'SET_CITY', payload})

const api_key = "a7d1c86d3802f3effadbe35c142cf3f4"
const url = "http://api.openweathermap.org/data/2.5/forecast"

export const fetchForecast = payload => {

    return dispatch =>{
        const url_forcast = `${url}?q=${this.props.city}&appid=${api_key}`

        //activar en el estado un indicador de busqueda de datos

        fetch(url_forcast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data)
                const forecastData = transformForecast(weather_data)
                console.log(forecastData)
               //modificar el estado con  el resultado de la primise()
            }
        )
        return;
    };
};