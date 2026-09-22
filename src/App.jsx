import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      {/* <Login/> */}
      <EmployeeDashboard/>
      </>
  )
}

export default App
