import React from "react";
import Dashboard from "./Dashboard";
import axios from 'axios'
export default function Home() {
  function Transformar (){
    axios.get('http://localhost:3000/subirArchivo').then(response=>{console.log(response.data.msg);})
  }
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
          <input type="file" id="inpFile" />
          <button type="button" id="btnUpload">
            Subir a Base de datos
          </button>
          <button id="descargar" onClick={()=>{Transformar()}}>Transformar</button>
          <br />
          <br />
          <div className="row">
            <textarea
              className="col-9 col-md-6"
              style={{height:"300px"}}
              id="resultText"
              placeholder="Your PDF text will appear here..."
            ></textarea>
          </div>
        </div>
      </main>
    </div>
  );
}