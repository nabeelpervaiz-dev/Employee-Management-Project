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
  const [LoggedInUser, SetLoggedInUser] = useState(null)
///  3 - we are using useContext to use the data that is set as a value in context.provider

// useEffect(() => {
//   // basicall try to get the user from the local storage so that when the page is reload it automatically 
//   // set the user to Employee ot Admin base on role store in localStorage...
// const Logged_Status=JSON.parse(localStorage.getItem('LoggedInUser'))
// if(Logged_Status){
//   setUser(Logged_Status.role)
// }
// }, [])

   const AuthData = useContext(AuthContext)
   console.log(AuthData)
   const EmployeeData=AuthData.employee;
  const AdminData=AuthData.admin;
// destructuring {employee, admin}=useContext(AuthContext) but  know were not using
    

console.log(AdminData)
console.log(EmployeeData)




  const LoginHandle=(email, password)=>{

    if(AdminData.find((e)=>e.email==email && e.password==password)){

           const admin = AdminData.find((e)=>e.email==email && e.password== password)
           setUser('Admin')
           localStorage.setItem('LoggedInUser',JSON.stringify({role:'admin'}))
           SetLoggedInUser(admin);
      }
       else if(EmployeeData.find((e)=>e.email==email && e.password==password)){
        const employee=(EmployeeData.find((e)=>email==e.email && password==e.password))
        if(employee){
          setUser('employee')
           SetLoggedInUser(employee)
          localStorage.setItem("LoggedInUser", JSON.stringify({role:'employee'}))

        }
       
       }
       else
        {
        alert("Sorry You are not registerd !");
       }
  }

    
   


  return (
 
      <>
        {!User? <Login  LoginHandle={LoginHandle}  />:(User=='Admin'?<AdminDashboard info={({User , setUser})} data={LoggedInUser} />:<EmployeeDashboard info={({User , setUser})} data={LoggedInUser}/>)} 
        {}
        
      </>
  )
}

export default App
