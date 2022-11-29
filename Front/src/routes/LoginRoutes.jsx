import React from 'react'

import {Routes, Route} from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'

const LoginRoutes = () => {
    return (
        <Routes>
            <Route index element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}

export default LoginRoutes