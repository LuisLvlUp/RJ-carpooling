import React, { useContext } from 'react'
import { ThemeContext } from '../../Shared/theme';

export const Home = ({handleLogout}) => {

  const themeDark = useContext(ThemeContext);

  return (
    <div style={ themeDark && {color: themeDark}}>
        Home
        <h1>Bienvenido</h1>
        <button onClick={handleLogout}>Cerrar sesion</button>
    </div>
  )
}
