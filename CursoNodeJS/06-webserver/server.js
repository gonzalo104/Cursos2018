const express = require('express')
const app = express()
const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');
 
app.get('/',  (req, res) => {
  //res.send('Hola Mundo');
    res.render('home.hbs',{
      nombre: "Gonzalo",
      anio: new Date().getFullYear()
    });

});
 
app.listen(3000, () => console.log("Escuchando peticiones en el puerto 3000")); 