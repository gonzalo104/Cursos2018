
const descripcion = {  
        demand: true,
        alias: 'd',
        desc: 'descripción dde la tarea por hacer'    
}

const completado = {    
        default: true,
        alias: 'c',
        desc: 'marca como completa o pendiente la tarea'
    
}

const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar','actualiza el estado completado de una tarea',{
       descripcion,
       completado
    })
    .command('borrar','borra una tare',{
        descripcion
    })
    .help()
    .argv;

    module.exports = {
        argv
    }