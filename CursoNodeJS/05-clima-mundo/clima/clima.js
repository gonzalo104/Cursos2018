 const axios = require('axios');


 const getClima = async(lat,lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=a7d1c86d3802f3effadbe35c142cf3f4`)
        return resp.data.main.temp;
 }

 module.exports = {
    getClima
 }