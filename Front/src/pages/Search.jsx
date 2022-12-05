import React from "react";
import Dashboard from "./Dashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export default function Search() {
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
          <input type="checkbox" id="check" />
          <div className="box">
            <input type="text" placeholder="Search Here..." />
            <label htmlFor="check">
              <FontAwesomeIcon icon={faSearch} />
            </label>
          </div>
        </div>
      </main>
    </div>
  );
}
