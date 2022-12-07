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
import Group3CheckBoxes from "../components/CheckBox";

export default function Home() {
    //useREFS
    const changeFileUpload = useRef();
    const resultText = useRef();
    // useStates
    const [cont, setCont] = useState(0);
    const [linkSubida, setLinkSubida] = useState(null);
    const [textoPDF, setTextoPDF] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isSearching, setIsSearching] = useState(false);
    const [isLoading2, setIsLoading2] = useState(true);
    const [isSearching2, setIsSearching2] = useState(false);
    const [isLoading3, setIsLoading3] = useState(true);
    const [isSearching3, setIsSearching3] = useState(false);
    //functions

    async function onChangeFile() {
        if (changeFileUpload.current?.files[0]) {
            const result = await diccionarioCV["convertir PDF a Texto"](
                changeFileUpload.current.files[0],
                setTextoPDF
            );
            diccionarioCV["guardar archivo"](
                changeFileUpload.current.files[0],
                cont,
                setCont,
                setLinkSubida
            );
            if (result) {
                return true;
            }
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
                    <h4>1 - Carga de CV</h4>
                    <input type="file" id="fileUpload" multiple="multiple" ref={changeFileUpload} />

                    <button
                        type="button"
                        id="btnUpload"
                        onClick={() => {
                            if (changeFileUpload.current?.files[0]) {
                                // se lanza si hay un pdf en files
                                setIsSearching(false);
                                setIsSearching3(false);
                                setIsSearching2(true);
                                setIsLoading2(true);
                                setTimeout(() => {
                                    setIsLoading2(false);
                                    setTimeout(async () => {
                                        await onChangeFile();
                                        setIsSearching2(false);
                                    }, 2100);
                                }, 2700);
                            } else {
                                // en caso de no cargar un pdf
                                setIsSearching(false);
                                setIsSearching2(false);
                                setIsSearching3(true);
                                setIsLoading3(true);
                                setTimeout(() => {
                                    setIsLoading3(false);
                                    setTimeout(() => {
                                        setIsSearching3(false);
                                    }, 2100);
                                }, 2700);
                            }
                        }}
                    >
                        Subir a Base de datos
                    </button>
                    <br />
                            {!isSearching3 ? (
                                ""
                            ) : isLoading3 ? (
                                <div className="d-flex justify-content-center mt-5">
                                    <div className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            ) : (
                                <div
                                    className="alert alert-danger text-center text-white fs-5 mt-5"
                                    role="alert"
                                >
                                    Ingrese un CV con formato PDF
                                </div>
                            )}
                            {!isSearching2 ? (
                                ""
                            ) : isLoading2 ? (
                                <div className="d-flex justify-content-center mt-5">
                                    <div className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            ) : (
                                <div
                                    className="alert alert-success text-center text-dark fs-5 mt-5"
                                    role="alert"
                                >
                                    Subido correctamente a la base de datos
                                </div>
                            )}
                    <br />
                    <div className="col-12 col-md-12">
                        <h4>2 - Filtrado</h4>
                        <h5>Que estas buscando en el CV?</h5>
                        <div className="row">
                            <div className="col-3">
                                <p>Habilidades</p>
                                <Group3CheckBoxes
                                    name1="Javascript"
                                    id1={1}
                                    id2={2}
                                    id3={3}
                                    name2="Python"
                                    name3="Habilidades blandas"
                                />
                            </div>
                            <div className="col-3">
                                <p>Experiencia</p>
                                <Group3CheckBoxes
                                    name1="Si"
                                    id1={4}
                                    id2={5}
                                    id3={6}
                                    name2="No"
                                />
                            </div>
                            <div className="col-3">
                                {" "}
                                <p>Educacion</p>
                                <Group3CheckBoxes
                                    name1="Secundario"
                                    id1={7}
                                    id2={8}
                                    id3={9}
                                    name2="Terciario/Universidad"
                                    name3="Cursos"
                                />
                            </div>
                            <div className="col-3">
                                <p>Lenguajes</p>
                                <Group3CheckBoxes
                                    name1="Inglés"
                                    id1={1}
                                    id2={2}
                                    id3={3}
                                    name2="Chino Mandarín"
                                    name3="Alemán"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-">
                                <button
                                    id="descargar"
                                    onClick={async () => {
                                        setIsSearching(true);
                                        setIsSearching2(false);
                                        setIsSearching3(false);
                                        setIsLoading(true);

                                        setTimeout(() => {
                                            setIsLoading(false);
                                            Transformar();
                                        }, 3000);
                                    }}
                                >
                                    Analizar
                                </button>
                            </div>
                        </div>

                        {!isSearching ? (
                            ""
                        ) : isLoading ? (
                            <div className="d-flex justify-content-center mt-5">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        ) : (
                            <div className="row mt-5">
                                <h4>Coincidendias: </h4>

                                <div className="col-12  col-lg-4 container-01">
                                    <div className="neumorphic-card">
                                        <div className="contentBox">
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
                                <div class="col-12  col-lg-4 container-01">
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
                                <div class="col-12 col-lg-4 container-01">
                                    <div class="neumorphic-card">
                                        <div class="contentBox">
                                            <div className="social-media-icon">
                                                <FontAwesomeIcon icon={faUserMinus} />
                                            </div>
                                            <h3>50%</h3>
                                            <p>
                                                Alan Bonnet tiene una coincidencia regular con la
                                                busqueda realizada
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
