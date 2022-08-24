import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../Navbar/Navbar'
import { Login } from '../Login/Login'
import AppRunDeposit from '../AppRunDeposit';


export const Main = () => {
    const [token, setToken] = useState();
    const [admin, setAdmin] = useState();

    useEffect(() => {
        setToken(JSON.parse(localStorage.getItem('token')));
        setAdmin(JSON.parse(localStorage.getItem('admin')));
    }, [])

    return (
        <>
            <Navbar token={token} setToken={setToken} admin={admin} setAdmin={setAdmin} />
            <div style={{ height: '100vh', background: '#00b2bb' }}>
                <Routes >
                    <Route path='/login&register' element={
                        !token ?
                            <Login setToken={setToken} setAdmin={setAdmin} /> :
                            <Navigate to="/solicitudes" />
                    } />
                </Routes>
                <AppRunDeposit/>
            </div>
        </>
    )
}
