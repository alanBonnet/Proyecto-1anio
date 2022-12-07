import React from "react";
import Dashboard from "./Dashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function Search() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  return (
    <div className="row">
      <div className="col-3">
        <Dashboard />
      </div>

      <main className=" col-9 main-content position-relative max-height-vh-100 h-100  border-radius-lg ">
        <div className="container-fluid py-4 border border-5 rounded mt-5 rounded-pill w-75">
          <input type="checkbox" className="d-none" id="check" hidden />
          <div className="box position-relative mt-5">
            <input type="text" placeholder="Buscar CVs ..." />
            <label
              htmlFor="check"
              onClick={() => {
                setIsSearching(true);
                setIsLoading(true);
                setTimeout(() => {
                  setIsLoading(false);
                }, 2700);
              }}
            >
              <FontAwesomeIcon icon={faSearch} />
            </label>
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
          <div className="container-fluid py-4 w-75">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Puntaje</th>
                  <th scope="col">CV</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Antonio Salazar</td>
                  <td>100%</td>
                  <td>
                    <a
                      href="https://drive.google.com/file/d/1twxpvWUTAm_uEUb1GgLEfq_CSROqryG_/view?usp=sharing"
                      target="_blank"
                    >
                      Leer CV
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Catalina Estevez</td>
                  <td>40%</td>
                  <td>
                    <a
                      href="https://drive.google.com/file/d/1qZLDV8UidkW9UvGSkGB3kqYFGHRIg09a/view?usp=sharing"
                      target="_blank"
                    >
                      Leer CV
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Maria Julia Estevez Lopez</td>
                  <td>10%</td>
                  <td>
                    <a
                      href="https://drive.google.com/file/d/1c17JK9hzsgWqT3zB9bbJ5y1GAVCTp0VX/view?usp=sharing"
                      target="_blank"
                    >
                      Leer CV
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
