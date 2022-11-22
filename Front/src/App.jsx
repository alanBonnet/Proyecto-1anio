import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import  {PublicRoutes}  from "./routes/PublicRoutes";
import LoginRoutes from "./routes/LoginRoutes";


export default function App() {
    const [user,setUser] = useState({
        isLogged:false
    })
    return (
        <AuthContext.Provider value={{
            user,
            setUser
        }}>
            <PublicRoutes>
                <LoginRoutes/>
            </PublicRoutes>
        </AuthContext.Provider>
    );
}
