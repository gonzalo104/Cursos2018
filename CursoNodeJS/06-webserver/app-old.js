const http = require('http');
http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'application/json'})
    //res.write('hola mundo!!');
    let salida = {
        nombre: "gonzalo",
        edad: 26,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    res.end();
})
.listen(8080);

console.log("escuchando el puerto 8080 ")