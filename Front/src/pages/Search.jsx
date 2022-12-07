import React from "react";
import Dashboard from "./Dashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Group3CheckBoxes from "../components/CheckBox";
export default function Search() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  return (
    <div className="row">
      <div className="col-3">
        <Dashboard />
      </div>

      <main className=" col-9 main-content position-relative max-height-vh-100 h-100  border-radius-lg ">
        <div className="container-fluid py-4 border border-5 rounded mt-5 w-75">
          <div className="col-12 col-md-12">
            <h5>¿Qué buscas en la base de datos?</h5>
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
                  onClick={() => {
                    setIsSearching(true);
                    setIsLoading(true);
                    setTimeout(() => {
                      setIsLoading(false);
                    }, 2700);
                  }}
                >
                  Analizar
                </button>
              </div>
            </div>
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
                  <th scope="row">1</th>
                  <td>Alan Bonnet</td>
                  <td>100%</td>
                  <td>
                    <a
                      href="https://drive.google.com/file/d/1IclKcJ861J3s-iWrYn-BkOssVGxnGaHx/view?usp=sharing"
                      target="_blank"
                    >
                      Leer CV
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Lautaro Durante</td>
                  <td>100%</td>
                  <td>
                    <a
                      href="https://drive.google.com/file/d/130YhqNEv6PuO1kMHTXW-RTZy9fWJWn3I/view?usp=sharing"
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
                <tr>
                  <th scope="row">1</th>
                  <td>Sebastian Prieto</td>
                  <td>0%</td>
                  <td>
                    <a
                      href="https://drive.google.com/file/d/1Y3sswbHzGIneJehdCkRIKfZFqusgUvgq/view?usp=sharing"
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
