const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp =
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lng}&APPID=f87f93790627391a8b17727c413d9156`);
    return resp.data.main.temp;
};

module.exports = {
    getClima
}