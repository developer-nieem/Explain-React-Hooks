
import { useContext, useState } from 'react'
import './App.css'
import SetStateExample from './pages/SetStateExample'
import UserForm from './pages/UserForm'
import UseReducerExample from './pages/useReducerExample'
import FormWithReducer from './pages/FormWithReducer'
import UseEffectExample from './pages/UseEffectExample'
import UseRefExample from './pages/UseRefExample'
import ThemeProvider from './Provider/ThemeProvider'
import Profile from './pages/Profile'
import HigherComponents from './components/HigherComponents'
import UserContainer from './components/UserContainer'
import SelectItem from './pages/modules3/SelectItem'

function App() {
  const [count , setCount] = useState(0)

  const BorderProfile = HigherComponents(Profile)


  
 
  return (
    <ThemeProvider>
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
     <hr />
     <UseRefExample></UseRefExample>
    <hr />
    <UserContainer></UserContainer>
     
     <hr />
     <SelectItem></SelectItem>
    </div>
    </ThemeProvider>
  )
}

export default App
