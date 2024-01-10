import  { useEffect, useState } from 'react';

const UseEffectExample = () => {

    const [timer, setTimer] = useState(0)

    useEffect(()=> {

        // console.log('render');
        
   const intervalId = setInterval(()=>{
            setTimer((prev) => prev + 1)
        }, 1000)

        return () =>{
            clearInterval(intervalId)
        }
    }, [])

    return (
        <div>
            {/* <h2>{timer}</h2> */}
        </div>
    );
};

export default UseEffectExample;