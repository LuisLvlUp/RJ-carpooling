import { createContext } from "react";

const darkTheme = '#040638';
const lightTheme = '#12D0FF';
export const initTheme = {
    dark: darkTheme,
    light: lightTheme,
    active: false
}


export const ThemeContext = createContext(initTheme); 