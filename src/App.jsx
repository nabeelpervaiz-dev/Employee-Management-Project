import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { GetData, SetData } from './utils/Localstorage'

function App() {

  const [User, setUser] = useState(null)

  const LoginHandle=(email, password)=>{
       if(email=='admin@me.com' && password=='123'){
        setUser('Admin');
       }else if(email == 'employee@me.com' && password=='123'){
        setUser('Employee')
       }else{
        alert("Sorry You are not registerd !");
       }
  }


  return (
 
      <>
        {!User? <Login  LoginHandle={LoginHandle}  />:''} 
        {User=='Admin'?<AdminDashboard/>:<EmployeeDashboard/>}
        

      </>
  )
}

export default App
