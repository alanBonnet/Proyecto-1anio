// importacion de librerías
const express = require("express");
const fileUpload = require("express-fileupload");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const fs = require("fs");
const pdfParse = require("pdf-parse");

// conectar a la base de datos
const ConnectDB = require("./src/db/db");
ConnectDB();
const cv = require("./src/models/CV");


// declaración de express
const app = express();

//config
const port = 3000;

// Middlewares
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(fileUpload());

// Rutas
app.use(require("./src/routes/user.routes")); // Rutas de Usuario
app.use(require("./src/routes/auth.routes")); // Rutas de Authentication
// app.use(require("./src/routes/cv.routes")); // Rutas de CV

let Parser = require("text2json").Parser;
let rawdata = "./src/data/file_100.txt";

const convertJson = async () => {
  let parse = new Parser({ hasHeader: true });
  parse
    .text2json(rawdata)
    .on("error", (err) => {
      console.error(err);
    })
    .on("headers", (headers) => {
      console.log(headers);
    })
    .on("row", (row) => {
      console.log(row);
      fs.writeFile(
        "./src/JSON/archivo.json",
        JSON.stringify(row),
        "utf8",
        (err) => {
          if (err) throw err;
          console.log("The file has been saved!");
        }
      );
      return row;
    })
    .on("end", (e) => {
      console.log("Done");
    });
};
const leerArchivo = () => {
  const data = JSON.parse(
    fs.readFileSync("./src/JSON/archivo.json", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    })
  );
  return data;
};

const importData = async (data) => {
  try {
    await cv.create(data);
    console.log("data successfully imported");
  } catch (error) {
    console.log("error", error);
  }
};
//boton
const boton = async () => {
  try {
    convertJson();
    setTimeout(() => {
      leerArchivo();
    }, 1000);
    setTimeout(() => {
      importData(leerArchivo());
    }, 1500);
  } catch (e) {
    console.log(e);
  }
};

app.get("/subirArchivo", async (req, res) => {
  try {
    boton();
    return res.json({
      msg: "todo bien paxd",
    });
  } catch (error) {
    return res.json({
      msg: "todo mal pa :( pipipi",
    });
  }
});
app.post('/extract-text',async (req, res) => {
  try {
      if (!req.files && !req.files.pdfFile) {
          res.status(400);
          res.end();
      }

      pdfParse(req.files.pdfFile).then((result) => {
          res.json({text:result.text});
      });
  } catch (error) {
      res.json({msg:"hubo un error con el parsing ",error:error.message})
  }
})
//Inicio del servidor
app.listen(port, () => {
  console.log("Iniciado en https://localhost:" + port);
});
