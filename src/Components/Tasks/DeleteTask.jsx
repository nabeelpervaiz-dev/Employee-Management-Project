import React from 'react'

const DeleteTask = (props) => {
  return (
     <div
  className="
    shrink-0
    w-[85%]
    sm:w-[55%]
    md:w-[32%]
    lg:w-1/4
    shadow-2xl
    bg-[#1aba5d]
    rounded-2xl
    p-5
    sm:p-6
  "
>
  {/* Priority + Date */}
  <div className="flex items-center justify-between gap-3">
    <span className="text-sm sm:text-base font-semibold text-white bg-red-500 py-1 px-2 rounded-md">
  {props.category}
    </span>

    <span className="text-sm sm:text-base text-gray-100 whitespace-nowrap">
    {props.date}
    </span>
  </div>

  {/* Title */}
  <h2 className="text-xl sm:text-2xl text-white font-bold mt-7">
    {props.title}
  </h2>

  {/* Description */}
  <p className="text-sm sm:text-base text-gray-100 mt-2 leading-snug">
    {props.discription}
  </p>
<div className="btns mt-3">
    <button className='cursor-pointer active:scale-95 px-3 py-1 rounded bg-[#f00f0b] text-white'>Deleted</button>
  </div>
</div>
  )
}

export default DeleteTask