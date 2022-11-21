import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <main>
      <div className="wrapper">
        <div className="container col-xl-4 col-md-6 col-10 container_login">
          <div className="">
            <form className="p-5">
              <h1>Registro</h1>
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
              <button className="form_btn">Registrarme</button>
              <Link to="/">
                <button className="form_btn_2">Iniciar Sesion</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
