import React, { useEffect, useRef, useState } from "react";
import diccionarioCV from "../helpers/cv.controllers";
import Dashboard from "./Dashboard";
import axios from "axios";
import CheckBox from "../components/CheckBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCheck,
  faUserXmark,
  faUserMinus,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  //useREFS
  const changeFileUpload = useRef();
  const resultText = useRef();
  // useStates
  const [cont, setCont] = useState(0);
  const [linkSubida, setLinkSubida] = useState(null);
  const [textoPDF, setTextoPDF] = useState("");
  const [checkboxJavascript, setCheckboxJavascript] = useState(false);
  const [checkboxPython, setCheckboxPython] = useState(false);
  const [checkboxStSkills, setCheckboxStSkills] = useState(false);
  //functions

  async function onChangeFile() {
    if (changeFileUpload.current?.files[0]) {
      await diccionarioCV["convertir PDF a Texto"](
        changeFileUpload.current.files[0],
        setTextoPDF
      );
      diccionarioCV["guardar archivo"](
        changeFileUpload.current.files[0],
        cont,
        setCont,
        setLinkSubida
      );
    }
  }

  function Transformar() {
    axios.get("http://localhost:3000/subirArchivo").then((response) => {
      console.log(response.data.msg);
    });
  }
  const guardarArchivoDeTexto = (contenido, nombre) => {
    const a = React.createElement("a");
    const archivo = new Blob([contenido], { type: "" });
    const url = URL.createObjectURL(archivo);
  };
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
    // resultText.current.value = textoPDF;
    console.log(textoPDF);
  }, [textoPDF]);
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

          <button type="button" id="btnUpload" onClick={onChangeFile}>
            Subir a Base de datos
          </button>
          <button
            id="descargar"
            onClick={() => {
              Transformar();
            }}
          >
            Transformar
          </button>
          <br />
          <br />
          <div className="col-12 col-md-12">
            <h4>Que estas buscando en el CV?</h4>
            <div className="row">
              <div className="col-3">
                <p>Habilidades</p>
                <div className="form-check form-switch d-flex align-content-center">
                  <CheckBox
                    name="JavaScript"
                    checked={checkboxJavascript}
                    setChecked={setCheckboxJavascript}
                  />
                </div>
                <div className="form-check form-switch d-flex align-content-center">
                  <CheckBox
                    name="Python"
                    checked={checkboxPython}
                    setChecked={setCheckboxPython}
                  />
                </div>
                <div className="form-check form-switch d-flex align-content-center">
                  <CheckBox
                    name="Habilidades Blandas"
                    checked={checkboxStSkills}
                    setChecked={setCheckboxStSkills}
                  />
                </div>
              </div>
              <div className="col-3">
                <p>Experiencia</p>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  >
                    Default switch checkbox input
                  </label>
                </div>
              </div>
              <div className="col-3">
                {" "}
                <p>Educacion</p>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  >
                    Default switch checkbox input
                  </label>
                </div>
              </div>
              <div className="col-3">
                <p>Lenguajes</p>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  >
                    Default switch checkbox input
                  </label>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div class="col-4 container-01">
                <div class="neumorphic-card">
                  <div class="contentBox">
                    <div className="social-media-icon">
                      <FontAwesomeIcon icon={faUserCheck} />
                    </div>
                    <h3>100%</h3>
                    <p>
                      Sebastian Prieto tiene un excelente coincidencia con la
                      busqueda realizada
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-4 container-01">
                <div class="neumorphic-card">
                  <div class="contentBox">
                    <div className="social-media-icon">
                      <FontAwesomeIcon icon={faUserXmark} />
                    </div>
                    <h3>30%</h3>
                    <p>
                      Lautaro Durante tiene una coincidencia mala con la
                      busqueda realizada
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-4 container-01">
                <div class="neumorphic-card">
                  <div class="contentBox">
                    <div className="social-media-icon">
                      <FontAwesomeIcon icon={faUserMinus} />
                    </div>
                    <h3>Design</h3>
                    <p>
                      Alan Bonnet tiene una coincidencia regular con la busqueda
                      realizada
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
