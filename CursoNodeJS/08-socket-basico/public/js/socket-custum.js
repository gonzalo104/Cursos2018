var socket = io();

//escuchas
socket.on('connect', function() {
    console.log('conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('perdimos conexion con el servidor');
});

// enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Gonzalo',
    mensaje: 'Hola Muendo'
}, function(resp) {
    console.log('respuesta server: ', resp)
});

//escruchar informacion

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});