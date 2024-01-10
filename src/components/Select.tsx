import { createContext, useContext, useState } from "react";

const SelectContext = createContext(null)
const Select = ({children}) => {
        const [selectedOption , setSelectedOption] = useState('')
    return (
        <SelectContext.Provider value={{selectedOption , setSelectedOption}}>
             <select onChange={(e) => setSelectedOption(e.target.value)}>
            {children}
        </select>
        </SelectContext.Provider>
       
    );
};

const SelectOption = ({item , children}) => {
    const {selectedOption} = useContext(SelectContext)

 
    
    const isActive = selectedOption === item

    return <option className={`${isActive ? "bg-slate-500" : "bg-white"}`} value={item}>{children}</option>
}

Select.SelectOption = SelectOption

export default Select;