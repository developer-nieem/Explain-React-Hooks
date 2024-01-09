import React, { useReducer } from 'react';

interface IAction {
    type: string,
    payload : string
}


const FormWithReducer = () => {

    const initialState = {name : '' , email : ''};

    const reducer = (currentState : typeof initialState , action: IAction) =>{

        switch(action.type){
            case "addName" :
                return ({...currentState , name:action.payload});
            case "addEmail" :
                return ({...currentState , email:action.payload});
            default :
                return currentState
        }

    }

    const [sate, dispatch] = useReducer(reducer, initialState)

    const handleSubmit = (e : React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(sate);
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={(e)=> dispatch({type : "addName" , payload:e.target.value })} type="text" name='name' className="border border-1" />
                <input onChange={(e)=> dispatch({type : "addEmail" , payload:e.target.value })}  type="email" name='email' className="border border-1" />
                <button className="bg-slate-500">Submit</button>
            </form>
        </div>
    );
};

export default FormWithReducer;