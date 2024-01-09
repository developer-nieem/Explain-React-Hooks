import React, { useState } from "react";


const UserForm = () => {

    const [user, setUser] = useState({name: "" , email:""})

    const handleFrom = (e : React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(user);
        
    }

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = e.target.name;
        const value =  e.target.value
        setUser({ ...user , [fieldName] : value})
        console.log(user);
        
    }


    return (
        <div className='mt-7'>
            <form onSubmit={handleFrom}>
                <input onChange={handleChange}  className="border border-1" type="text"  name="name"/>
                <input onChange={handleChange}  className="border border-1" type="email" name="email" id="" />
                <button  className="bg-slate-500">Submit</button>
            </form>
        </div>
    );
};

export default UserForm;