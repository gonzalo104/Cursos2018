const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

const usuario = require('../models/usuario');
 
// default options
app.use(fileUpload());


app.put('/upload/:tipo/:id', function(req, res) {

    

    let tipo = req.params.tipo;
    let id = req.params.id;


    if (!req.files){
            return res.status(400).json({
                ok:false,
                err:{
                    message: 'No se ha seleccionado ningún archivo'
                }
            });
    }

    //VALIDAR TIPO
    let tiposValidos = ['productos','usuarios'];
    if (tiposValidos.indexOf(tipo) < 0) {
        return res.status(400).json({
            ok:false,
            err:{
                message: "las tipos permitidos son: " + tiposValidos.join(', '),                
            }
        })
    }

    let archivo = req.files.archivo;    
    let nombreCortado = archivo.name.split('.');
    let extension = nombreCortado[nombreCortado.length -1];
    //extensiones permitidas
    let extensionesValidas = ['png', 'jpg', 'gif', 'jpeg'];

    if (extensionesValidas.indexOf(extension) < 0) {
        return res.status(400).json({
            ok:false,
            err:{
                message: "las extrenciones permitidas son: " + extensionesValidas.join(', '),
                ext: extension
            }
        })
    }
    
    //cambiar nombre al archivo
    let nombreArchivo = `${id}-${new Date().getMilliseconds()}.${extension}`
    
    
    archivo.mv(`uploads/${tipo}/${nombreArchivo}`, (err) => {
        if (err)
          return res.status(500).json({
                ok:false,
                err
          });
     
            res.json({
                ok:true,
                message: 'Imagen subida correctamente'
            });
      });
   


});


module.exports = app;