const express = require('express')
const app = express()
const path = require('path');
const vistaPrincipal = require('./app/view/vista.principal');
require('dotenv').config();
app.set('views', path.join(__dirname, 'views/'));

app.set('view engine','ejs');
app.set('views', __dirname + '/views');
// Inicializar el servidor
const iniciarServidor = async() =>{
    try{
        app.listen(process.env.PORT, () =>{
            console.log(`El servidor se ha iniciado correctamente en http://${process.env.HOST}:${process.env.PORT}`);
        });
    } catch(error) {
        console.log(`Error al iniciar el servidor: ${error}`);
    }
}

iniciarServidor();


// Inicializar las rutas del servidor
vistaPrincipal(app);