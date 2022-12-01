import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles/dashboard.css";

import { diccionaryLog } from "../helpers/Auth.controller";
export default function Dashboard() {
  const { user, setUser } = useContext(AuthContext);
  return (
    <div className="g-sidenav-show  bg-gray-200">
      <aside
        className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark"
        id="sidenav-main"
      >
        <div className="sidenav-header">
          <i
            className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
            aria-hidden="true"
            id="iconSidenav"
          ></i>
          <a className="navbar-brand m-0" href="">
            <span className="ms-1 font-weight-bold text-white">
              CV Manager {user && user.username}
            </span>
          </a>
        </div>
        <hr className="horizontal light mt-0 mb-2" />
        <div
          className="collapse navbar-collapse  w-auto  max-height-vh-100"
          id="sidenav-collapse-main"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link text-white active bg-gradient-primary"
                href="./pages/dashboard.html"
              >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10"></i>
                </div>
                <span className="nav-link-text ms-1">Mesa de Trabajo</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="sidenav-footer position-absolute w-100 bottom-0 ">
          <div className="mx-3">
            <a
              className="btn bg-gradient-primary mt-4 w-100"
              href=""
              type="button"
              onClick={(e) => {
                diccionaryLog["cerrar sesion"](e, setUser);
              }}
            >
              Finalizar Sesion
            </a>
          </div>
        </div>
      </aside>
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
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
          <button id="descargar">Descargar TXT</button>
          <br />
          <br />
          <textarea
            style={{width: "300px", height: "150px"}}
            id="resultText"
            placeholder="Your PDF text will appear here..."
          ></textarea>
        </div>
      </main>
    </div>
  );
}
