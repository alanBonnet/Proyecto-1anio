import React from "react";
import { Link } from "react-router-dom";

export default function login() {
  return (
    <main>
      <div className="wrapper">
        <div className="container col-xl-4 col-md-6 col-10 container_login">
          <form className="p-5">
            <h1>Inicio de Sesion</h1>
            <div className="social-links">
              <div>
                <a className="fa fa-facebook" href="">
                  <i></i>
                </a>
              </div>
              <div>
                <a className="fa fa-twitter" href="">
                  <i></i>
                </a>
              </div>
              <div>
                <a className="fa fa-linkedin" href="">
                  <i></i>
                </a>
              </div>
            </div>
            <label>Correo Electronico</label>
            <input type="email" name="" id="" />
            <label>Contraseña</label>
            <input type="password" name="" id="" />
            <button className="form_btn">Iniciar Sesion</button>
            <Link to={"/Register"}>
              <button className="form_btn_2">Registrarme</button>
            </Link>
          </form>
        </div>
      </div>
    </main>
  );
}
