import React from "react";
import Dashboard from "./Dashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function Search() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
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
            <label htmlFor="check" onClick={() => {
              setIsSearching(true)
              setIsLoading(true)
              setTimeout(() => {
                setIsLoading(false)
              }, 2700)
            }}>
              <FontAwesomeIcon icon={faSearch} />

            </label>
          </div>
        </div>
        {!isSearching ? "" : isLoading ? <div className="d-flex justify-content-center mt-5">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div> : <div className="container-fluid py-4 w-75">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Puntaje</th>
                <th scope="col">Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Pablito Rodrigez</td>
                <td>100%</td>
                <td><a href="https://drive.google.com/file/d/1GFEP7L7jeieWaiqjp8QG9WBxXHEKMdTn/view?usp=sharing">link</a></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
                        }
      </main>
    </div>
  );
}
