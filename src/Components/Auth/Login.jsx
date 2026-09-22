import React, { useState } from 'react'

const Login = () => {


  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const submithandle=(e)=>{
e.preventDefault();
console.log("form submited"+ email + password)
  }


  return (
    <div className="min-h-screen bg-[#e9e9e6] flex items-center justify-center">

      <div className="w-full max-w-md bg-[#f5f5f1] p-10 rounded-3xl">

        <h1 className="text-5xl font-semibold  tracking-tight mb-8">
          Login
        </h1>

        <div className="space-y-5">

          <form onSubmit={(e)=>{
            submithandle(e);
            
          }}>
            <div>
            <label className="block font-bold mb-2">
              Email
            </label>

            <input
              value={email}
               onChange={(e)=>{
               setemail(e.target.value)
               }}
              type="email"
              placeholder="Enter your email"
              className="w-full h-14 rounded-2xl bg-white px-5 outline-none"
            />
          </div>

          <div>
            <label className="block font-bold mb-2">
              Password
            </label>

            <input
            value={password}
               onChange={(e)=>{
               setpassword(e.target.value)
               }}
              type="password"
              placeholder="Enter your password"
              className="w-full h-14 rounded-2xl bg-white px-5 outline-none"
            />
          </div>

          <button type='submit' className="w-full h-14 active:scale-95 rounded-2xl bg-black text-white mt-6 font-bold">
            Login
          </button>
          </form>

        </div>

      </div>

    </div>
  );
};

export default Login;