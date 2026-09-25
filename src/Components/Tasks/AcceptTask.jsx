import React from 'react'

const AcceptTask = (props) => {
  return (
     <div
  className="
    shrink-0
    w-[85%]
    sm:w-[55%]
    md:w-[32%]
    lg:w-1/4
    shadow-2xl
    bg-[#029262]
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

    <span className="text-sm sm:text-base text-gray-200  whitespace-nowrap">
    {props.date}
    </span>
  </div>

  {/* Title */}
  <h2 className="text-xl sm:text-2xl font-bold mt-7 text-gray-200">
    {props.title}
  </h2>

  {/* Description */}
  <p className="text-sm sm:text-base mt-2 leading-snug text-white">
    {props.discription}
  </p>
  <div className="btns mt-3 flex gap-4">
    <button className='cursor-pointer active:scale-95 px-3 py-1 rounded bg-green-500 text-white'>Accept</button>
    <button className='cursor-pointer active:scale-95 px-3 py-1 rounded bg-red-500 text-white'>Failed</button>
  </div>

</div>
  )
}

export default AcceptTask