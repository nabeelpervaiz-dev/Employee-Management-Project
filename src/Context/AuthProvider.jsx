import React, { createContext } from 'react'
import { GetData } from '../utils/Localstorage'


// Step no.01 :Creating context
export const AuthContext=createContext()

   const data=GetData()

 const AuthProvider = ({children}) => {
    //Auth Creation

  
    
  return (
    <div>
  {/* 2 : providing  context data*/}
     <AuthContext.Provider value={data}> 
        {/* passing the App children so that i could be render bcz we have wrap the App inside
        AuthContext */}
        {children}
     </AuthContext.Provider>
     

     {/* and the context will be use anywhere we need data */}

    </div>
  )
}

export default AuthProvider