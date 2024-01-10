import { useContext, useEffect, useRef } from "react";
import Form from "../components/Form";
import { ThemeContext } from "../Provider/ThemeProvider";
import { Menu, MenuList } from "../components/Menu";

const UseRefExample = () => {

    const {dark , setDark} = useContext(ThemeContext);
    const myRef =  useRef<HTMLInputElement | null>(null)
    
   useEffect(()=> {
    myRef?.current?.focus()

   }, [])


   
    
    return (
        <div className={`${ dark ? "bg-black" : "bg-white"}`}>
            <Form ref={myRef} className="border border-red-500"></Form>

            <button onClick={() => setDark(!dark)}>Toggle</button>

            <Menu>
                <MenuList></MenuList>
            </Menu>
        </div>
    );
};

export default UseRefExample;
