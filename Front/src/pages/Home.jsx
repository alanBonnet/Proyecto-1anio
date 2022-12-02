import React from "react";

export default function Home() {
  return (
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
          style={{ width: "300px", height: "150px" }}
          id="resultText"
          placeholder="Your PDF text will appear here..."
        ></textarea>
      </div>
    </main>
  );
}