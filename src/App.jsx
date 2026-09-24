import { useContext, useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { GetData, SetData } from './utils/Localstorage'
import AuthProvider, { AuthContext } from './Context/AuthProvider'

function App() {
///// 
  const [User, setUser] = useState(null)
///  3 - we are using useContext to use the data that is set as a value in context.provider
  
   const AuthData= useContext(AuthContext)
   const EmployeeData=AuthData.employee;
  const AdminData=AuthData.admin;
// destructuring {employee, admin}=useContext(AuthContext) but  know were not using
  

console.log(AdminData)
console.log(EmployeeData)

 


  const LoginHandle=(email, password)=>{
       if(AdminData.find((e)=>{
        return (email==e.email && password==e.password)
       })){
      setUser('Admin');
       }else if(EmployeeData && EmployeeData.find((e)=>{
       return ( e.email== email && e.password == password)
       })){
        setUser('Employee')
       }else{
        alert("Sorry You are not registerd !");
       }
  }

    
   


  return (
 
      <>
        {!User? <Login  LoginHandle={LoginHandle}  />:''} 
        {User=='Admin'?<AdminDashboard info={({User , setUser})} />:<EmployeeDashboard info={({User , setUser})}/>}
        
      </>
  )
}

export default App
