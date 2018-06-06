const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//express HBS emgine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

 
app.get('/',  (req, res) => {
  //res.send('Hola Mundo');
    res.render('home.hbs',{
      nombre: "gonzalo",    
    });

});

app.get('/about',  (req, res) => {  
    res.render('about.hbs');

});


 
app.listen(port, () => console.log(`Escuchando peticiones en el puerto ${port}`)); 