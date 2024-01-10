import { useEffect, useState } from "react";

const useUserData = () => {

    const [loading , setLoading] = useState(false)
    const [error , setError] = useState(false)
    const [data , setData] = useState([])

 

const getData = async() => {

    try {
        setLoading(true)
        const res = await fetch('https://jsonplaceholder.typicode.com/users' );
        const data = await res.json();
        setLoading(false)
        setData(data)
        
    } catch (error) {
        setError(error)
    }
}

useEffect(()=>{
    getData()
    
}, [])


    return {data , loading , error}
};

export default useUserData;