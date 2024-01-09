import  { useReducer } from 'react';


const initialState = {count : 0};

type TAction =  {
    type: string
}
const reducer = (currentState : typeof initialState , action : TAction  )  => {

    switch(action.type){
        case "increment" :
            return {count : currentState.count + 1};
        case "decrement" :
            return {count : currentState.count - 1};
        default:
            return currentState
    }

}


const UseReducerExample = () => {

  
    const [state , dispatch] = useReducer(reducer , initialState )

    return (
        <div className='space-x-8'>
         
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({type : "increment"})}>Increment</button>
            <button onClick={() => dispatch({type : "decrement"})}>decrement</button>
        </div>
    );
};

export default UseReducerExample;