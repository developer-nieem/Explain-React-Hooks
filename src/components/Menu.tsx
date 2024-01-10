import { ReactNode, createContext, useContext } from "react";

export type TMenuContext = {
    theme: string
}
const MenuContext = createContext <TMenuContext | null> (null)

type TMenuProps = {
    children : ReactNode
}
export const Menu = ({children} : TMenuProps) => {
    return (
        <MenuContext.Provider value={{theme : "dark"}}>
            {children}
        </MenuContext.Provider >
    );
};

export const MenuList = () => {
    const theme = useContext(MenuContext) as TMenuContext
   
    
    return <div>{theme.theme}</div>
}