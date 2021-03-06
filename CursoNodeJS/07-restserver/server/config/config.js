//======================
//PUERTO
//===================
process.env.PORT = process.env.PORT || 3000;
//======================
//Entorno
//===================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
//======================
//VENCIMIENTO DEL TOKE
//===================60 * 60 * 24 * 30
process.env.CADUCIDAD_TOKEN = '48h';
//======================
//SEED de autenticacion
//===================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';
//======================
//Base de datos
//===================
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
}else{
    urlDB = 'mongodb://cafe-user:gonzalozame04@ds047478.mlab.com:47478/cafe';    
}

process.env.URLDB = urlDB;


//======================
//Google Client ID
//===================
process.env.CLIENT_ID = process.env.CLIENT_ID   || '663447293248-njfkruiv4nu1t95sttbc55t5q0pb4n3s.apps.googleusercontent.com';