
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').option({
    direccion:{
        alias: 'd',
        desc: 'direccion de la ciudad y obtener el clima',
        demand: true
    }
}).argv;


let getInfo = async (direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temperatura = await clima.getClima(coors.lag, coors.lng);
        return `el clima en ${coors.direccion} es de ${temperatura}`;
        
    } catch (e) {
        return `no se pudo determinar el clima en ${direccion}`
    }


  
}


getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e=>console.log(e));


/*lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        console.log(resp);
    }).catch(e=> console.log(e));

    clima.getClima(9.9280694, -84.0907246)
        .then(temp => console.log(temp))
        .catch(e => console.log(e))*/