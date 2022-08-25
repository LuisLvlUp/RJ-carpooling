import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../Navbar/Navbar'
import { Login } from '../Login/Login'
import AppRunDeposit from '../componetDeposit/AppRunDeposit'

export const Main = () => {
    const [token, setToken] = useState();
    const [admin, setAdmin] = useState();

    useEffect(() => {
        setToken(JSON.parse(localStorage.getItem('token')));
        setAdmin(JSON.parse(localStorage.getItem('admin')));
    }, [])

    return (
        <>
            <div style={{ height: '100vh', background: '#00b2bb' }}>
                <Routes >
                    <Route path='/login&register' element={
                        !token ?
                            <Navbar token={token} setToken={setToken} admin={admin} setAdmin={setAdmin}>
                                <Login setToken={setToken} setAdmin={setAdmin} />
                            </Navbar>
                            :
                            <Navigate to="/solicitudesDeposito" />
                    } />
                    <Route path='/solicitudesDeposito' element={
                        token ?
                            <Navbar token={token} setToken={setToken} admin={admin} setAdmin={setAdmin}>
                                {/* Component Child */}
                                <AppRunDeposit />
                            </Navbar>
                            :
                            <Navigate to="/login&register" />
                    } />
                    <Route path='/solicitudesVerificacion' element={
                        token ?
                            <Navbar token={token} setToken={setToken} admin={admin} setAdmin={setAdmin}>
                                {/* Component Child */}
                            </Navbar>
                            :
                            <Navigate to="/login&register" />
                    } />
                    <Route path='*' element={
                        !token ?
                            <Navigate to='/login&register' />
                            :
                            <Navigate to="/solicitudesDeposito" />
                    } />
                </Routes>
            </div>
        </>
    )
}
