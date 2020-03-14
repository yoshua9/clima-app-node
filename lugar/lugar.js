const axios = require('axios');


const getLugarLatLng = async(dir) => {


    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { "x-rapidapi-key": "13b1372d1emsh1f02ab4dec109e5p1b9d4ajsn9f41361ab227" }
    });

    const resp = await instance.get();

    if (resp.data.Results[0].length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}