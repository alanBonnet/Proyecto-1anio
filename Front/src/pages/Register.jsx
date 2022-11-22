import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { diccionaryLog } from "../helpers/Auth.controller";

export default function Register() {
  const {user, setUser} = useContext(AuthContext)
  const [error, setError] = useState()
  const handleSubmit = (e) =>{
    e.preventDefault();
    diccionaryLog['registrarse'](user,setUser,setError);
  }

  return (
    <main>
      <div className="wrapper">
        <div className="container col-xl-4 col-md-6 col-10 container_login">
          <div className="">
            <form className="p-5" onSubmit={handleSubmit}>
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
              <label htmlFor="username" >Nombre de Usuario</label>
              <input type="text" onChange={(e)=>{setUser({...user,username:e.target.value})}} name="username" id="" />
              {error && <div className="row">{error?.map((errors, index) => {if(errors.param == "username"){return <p className="alert alert-danger my-1 mx-1 text-center p-1 col" key={errors.value+index}>{`${errors.msg}`}</p>}})}</div>}{/* TODO:a limpiar mas adelante */}
              <label htmlFor="email" >Correo Electronico</label>
              <input type="email" onChange={(e)=>{setUser({...user,email:e.target.value})}} name="email" id="" />
              {error && <div className="row">{error?.map((errors, index) => {if(errors.param == "email"){return <p className="alert alert-danger my-1 mx-1 text-center p-1 col" key={errors.value+index}>{`${errors.msg}`}</p>}})}</div>}{/* TODO:a limpiar mas adelante */}
              <label htmlFor="password" >Contraseña</label>
              <input type="password" onChange={(e)=>{setUser({...user,password:e.target.value})}} name="password" id="" />
              {error && <div className="row">{error?.map((errors, index) => {if(errors.param == "password"){return <p className="alert alert-danger my-1 mx-1 text-center p-1 col" key={errors.value+index}>{`${errors.msg}`}</p>}})}</div>}{/* TODO:a limpiar mas adelante */}
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
