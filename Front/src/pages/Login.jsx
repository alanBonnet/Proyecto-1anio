import React, { useContext, useState, useEffect } from "react";
import { Link, useRoutes } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { diccionaryLog } from "../helpers/Auth.controller";
export default function login() {
    const { user, setUser } = useContext(AuthContext)
    const [error, setError] = useState()
    const handleSubmit = (e) => {
        e.preventDefault();
        diccionaryLog['iniciar sesion'](user, setUser, setError);
    }
    return (
        <main>
            <div className="wrapper">
                <div className="container col-xl-4 col-md-6 col-10 container_login">
                    <form className="p-5" onSubmit={handleSubmit}>
                        <h1>Inicio de Sesion</h1>
                        <div className="social-links">
                            <div>
                                <a className="fa fa-facebook" href="">
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
                        <label>Nombre de usuario</label>
                        <input type="text" onChange={(e) => { setUser({ ...user, username: e.target.value }) }} name="username" id="" />
                        <label>Contraseña</label>
                        <input type="password" onChange={(e) => { setUser({ ...user, password: e.target.value }) }} name="password" id="" />
                        {diccionaryLog['si existe Error'](error,"message")}
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
