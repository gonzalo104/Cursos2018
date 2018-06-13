/*
 * @Author            : Gonzalo Zavala Mendoza
   @email             : gonzalozavalamendoza@gmail.com
 * @Date              : 2018-06-12 19: 35: 48
 * @Last Modified by  : Gonzalo Zavala Mendoza
 * @Last Modified time: 2018-06-12 20: 00: 40
 */

var socket = io();

var params = new URLSearchParams(window.location.search);
if (!params.has('nombre') || !params.has('sala')) {
    console.log("entro")
    window.location = 'index.html';
    throw new Error('El nombre y sala son necesario');
}
var usuario = {
    nombre: params.get('nombre'),
    sala  : params.get('sala')
}


socket.on('connect', function() {
    console.log('Conectado al servidor');
    socket.emit('entrarChat', usuario, function(resp){
        console.log('Usuarios conectados',resp)
    })
});

// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});


// Enviar información
/*socket.emit('crearMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});*/

// Escuchar información
socket.on('crearMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);

});

socket.on('listaPersonas', function(personas) {

    console.log(personas);

});


//
// ─── MENSAJES PRIVADOS ──────────────────────────────────────────────────────────
//

    
socket.on('mensajePrivado', function(mensaje){
    console.log('mensajePrivado: ', mensaje);
});
