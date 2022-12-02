import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { PublicRoutes } from "./routes/PublicRoutes";
import LoginRoutes from "./routes/LoginRoutes";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import { diccionaryLog } from "./helpers/Auth.controller";
import DashboardRoutes from "./routes/DashboardRoutes";
export default function App() {
    const [user, setUser] = useState({
        isLogged: false
    })
    useEffect(()=>{
        diccionaryLog['autologin si existe token'](user,setUser);
    },[])
    return (
        <AuthContext.Provider value={{
            user,
            setUser
        }}>
            <Routes>
                <Route path="/*" element={
                    <PublicRoutes>
                        <LoginRoutes />
                    </PublicRoutes>
                } />
                <Route path="/dashboard/*" element={
                    <PrivateRoutes>
                        <DashboardRoutes />
                    </PrivateRoutes>

                } />
            </Routes>
        </AuthContext.Provider>
    );
}
