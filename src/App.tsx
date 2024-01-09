
import { useState } from 'react'
import './App.css'
import SetStateExample from './pages/SetStateExample'
import UserForm from './pages/UserForm'
import UseReducerExample from './pages/useReducerExample'
import FormWithReducer from './pages/FormWithReducer'
import UseEffectExample from './pages/UseEffectExample'

function App() {
  const [count , setCount] = useState(0)

  return (
    <div className='space-y-5'>
     <SetStateExample count={count} setCount={setCount}></SetStateExample>
     <hr />
     <UserForm></UserForm>
     <hr />
     <UseReducerExample></UseReducerExample>
     <hr />
     <FormWithReducer></FormWithReducer>
     <hr />
     <UseEffectExample></UseEffectExample>
    </div>
  )
}

export default App
