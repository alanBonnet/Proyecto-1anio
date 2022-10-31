// importacion de librerías
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();


// conectar a la base de datos
const ConnectDB = require('./db/db');
ConnectDB()

// declaración de express
const app = express();
//config
const port = 3000;
// Middlewares
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

// Rutas


//Inicio del servidor
app.listen(port, () => {console.log("Iniciado en https://localhost:" + port)});

