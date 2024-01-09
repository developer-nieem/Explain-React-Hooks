import React  from "react";

interface Ctype {
    count : number,
    setCount : React.Dispatch<React.SetStateAction<number>>
}

const SetStateExample = ({count , setCount} : Ctype) => {
   


    return (
        <div>
            <h1 className="text-2xl">{count}</h1>
            <button className="" onClick={()=> setCount((prev) => prev + 1)}>Increment</button>
            <button onClick={()=> setCount((prev) => prev - 1)} >Decrement</button>
            <button onClick={()=> setCount(0)}>Reset</button>
        </div>
    );
};

export default SetStateExample;