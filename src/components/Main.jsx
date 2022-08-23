import React from 'react'
import { Navigate, Route, Routes, } from 'react-router-dom';
import { Navigation } from "./Navigation/Navigation";
import {Home} from "./Navigation/Home/Home";

const Main = ({handleLogout}) => {
  return (
    <>
      {/*<h1>Bienvenido</h1>
      <button onClick={handleLogout}>Cerrar sesion</button>*/}
      <Routes>
        <Route path="home" element={
          <Navigation>
            <Home handleLogout={handleLogout}/>
          </Navigation>
        }>
        </Route>

        <Route path="about" element={
          <Navigation>
            {/*<AboutUs />*/}
          </Navigation>}
        />
        <Route path="todos" element={
          <Navigation>
            {/*<Todos />*/}
          </Navigation>}
        />
        <Route path="carrito" element={
          <Navigation>
            {/*<Carrito />*/}
          </Navigation>}
        />
        <Route path="404" element={
          <Navigation>
            {/*<NotFound />*/}
          </Navigation>}
        />
        <Route
          path="*"
          element={<Navigate to="/404" replace />}
        />
      </Routes>


    </>
  )
}

export default Main
