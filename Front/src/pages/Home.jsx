import React, { useEffect, useRef, useState } from "react";
import diccionarioCV from "../helpers/cv.controllers";
import Dashboard from "./Dashboard";
import axios from 'axios'
export default function Home() {
  //useREFS
  const changeFileUpload = useRef()
  const resultText = useRef()
  // useStates
  const [cont, setCont] = useState(0)
  const [linkSubida, setLinkSubida] = useState(null)
  const [textoPDF, setTextoPDF] = useState("")
  //functions

  async function onChangeFile() {
    if (changeFileUpload.current?.files[0]) {
      await diccionarioCV['convertir PDF a Texto'](changeFileUpload.current.files[0], setTextoPDF)
      diccionarioCV['guardar archivo'](changeFileUpload.current.files[0], cont, setCont, setLinkSubida)
    }
  }

  function Transformar() {
    axios.get('http://localhost:3000/subirArchivo').then(response => { console.log(response.data.msg); })
  }
  const guardarArchivoDeTexto = (contenido, nombre)=>{
    const a = React.createElement('a')
    const archivo = new Blob([contenido], {type: ''});
    const url = URL.createObjectURL(archivo);
    
  }
  /* 
    const guardarArchivoDeTexto = (contenido, nombre) => {
        const a = document.createElement("a");
        const archivo = new Blob([contenido], { type: '' });
        const url = URL.createObjectURL(archivo);
        a.href = url;
        a.download = nombre;
        a.click();
        URL.revokeObjectURL(url);
    }
    const $botonDescargar = document.querySelector("#descargar");
    $botonDescargar.onclick = () => {
        guardarArchivoDeTexto(pruebaJSON, "html.json");

    }
  */

  //useEffect
  useEffect(() => {
    resultText.current.value = textoPDF
  }, [textoPDF])
  return (
    <div className="row">
      <div className="col-3">
        <Dashboard />
      </div>

      <main className=" col-9 main-content position-relative max-height-vh-100 h-100  border-radius-lg ">
        <nav
          className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
          id="navbarBlur"
          navbar-scroll="true"
        ></nav>
        <div className="container-fluid py-4">
          <input type="file" id="fileUpload" ref={changeFileUpload} />

          <button type="button" id="btnUpload" onClick={onChangeFile} >
            Subir a Base de datos
          </button>
          <button id="descargar" onClick={() => { Transformar() }}>Transformar</button>
          <br />
          <br />
          <div className="row">
            <textarea
              className="col-9 col-md-6"
              style={{ height: "300px" }}
              id="resultText"
              ref={resultText}
              placeholder="Your PDF text will appear here..."
            ></textarea>
          </div>
        </div>
      </main>
    </div>
  );
}