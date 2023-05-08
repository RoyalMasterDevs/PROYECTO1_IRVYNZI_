/*const express = require('express')

const app = express()

//ROUTINGS

app.get('/', function(req, res) {
    res.send('Hola Mundo en express')
});

const port = 3000;

app.listen(port, ()=> {
    console.log(`El servidor está funcionando en el puerto ${port}`)
});

*/


import express from 'express' //ECMAScript modules
import usuarioRoutes from './usuarioRoutes.js'

//Crea la app
const app = express()

//Routing
app.use('/', usuarioRoutes);

//Define un puerto y arranca el proyecto
const port = 3000;

app.listen(port, () => {
    console.log(`El Servidor esta funcionando en el puerto ${port}`)
});