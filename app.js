const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


// const info = lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);


// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log)


const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(argv.direccion);

        const temp = await clima.getClima(coords['lat'], coords['lng'])
            //salida

        if (typeof temp !== undefined) {
            return `El clima de ${direccion} es de ${temp}`;
        } else {
            return `No se pudo determina el clima de ${direccion}`;
        }
    } catch (e) {
        return `No se pudo determina el clima de ${direccion}`;
    }


}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);