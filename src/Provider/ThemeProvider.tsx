import {  Dispatch, ReactNode, createContext, useState } from "react";

type TContext = {
    dark: boolean,
    setDark :Dispatch<React.SetStateAction<boolean>>
}

export const ThemeContext = createContext<TContext | undefined >(undefined)

type TThemeProviderProps = {
    children:ReactNode
}

const ThemeProvider = ({children} : TThemeProviderProps) => {

    const [dark , setDark] = useState(false)
const values = {
    dark,
    setDark
}

    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;