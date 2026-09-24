import React from 'react'

const Nav = (props) => {
  console.log()
  return (
    <nav className="w-full px-8 py-2 flex items-center justify-between bg-[#f5f5f1]">
     <div>
        <h2 className='font-semibold text-2xl' >Hi,</h2>
        <h1 className='font-semibold text-3xl' >Nabeel</h1>
     </div>

      <button onClick={()=>{
       props.info.setUser(null)
      }} className="px-5 py-2 rounded-xl bg-black text-white font-semibold">
        Logout
      </button>
    </nav>
  );
};

export default Nav;