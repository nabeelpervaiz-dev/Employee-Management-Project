import React from 'react'

const CompleteTask = (props) => {
  return (
     <div
  className="
    shrink-0
    w-[85%]
    sm:w-[55%]
    md:w-[32%]
    lg:w-1/4
    shadow-2xl
    bg-[#b5a91e]
    rounded-2xl
    p-5
    sm:p-6
  "
>
  {/* Priority + Date */}
  <div className="flex items-center justify-between gap-3">
    <span className="text-sm sm:text-base font-semibold bg-red-500  text-white py-1 px-2 rounded-md">
      {props.category}
    </span>

    <span className="text-sm sm:text-base text-gray-100 whitespace-nowrap">
    {props.date}
    </span>
  </div>

  {/* Title */}
  <h2 className="text-xl sm:text-2xl font-bold mt-7 text-white">
    {props.title}
  </h2>

  {/* Description */}
  <p className="text-sm sm:text-base text-gray-100 mt-2 leading-snug">
    {props.discription}
  </p>
<div className="btns mt-3">
    <button className='cursor-pointer active:scale-95 px-3 py-1 rounded bg-[#a75009] text-white'>Completed</button>
  </div>
</div>
  )
}

export default CompleteTask