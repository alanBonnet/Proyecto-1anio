// importacion de librerías
const express = require('express');
const fileUpload = require("express-fileupload");
const pdfParse = require("pdf-parse");
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const fs = require("fs");
const Parser = require("text2json").Parser;


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
app.use(fileUpload());


// Rutas
app.use(require('./routes/user.routes')) // Rutas de Usuario
app.use(require('./routes/auth.routes')) // Rutas de Authentication
// app.use(require('./routes/cv.routes')) //Rutas de CV

app.post("/extract-text", (req, res) => {
    if (!req.files && !req.files.pdfFile) {
        return res.status(400).json({
            message:"Falta el archivo"
        });
    }

    pdfParse(req.files.pdfFile).then((result) => {
        return res.json({text:result.text});
    });
});

//Inicio del servidor
app.listen(port, () => {
    console.log("Iniciado en https://localhost:" + port)
});