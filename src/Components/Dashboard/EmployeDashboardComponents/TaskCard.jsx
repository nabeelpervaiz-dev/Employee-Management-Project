import React from 'react'

const TaskCard = () => {
  return (
   <div
  className="
    shrink-0
    w-[85%]
    sm:w-[55%]
    md:w-[32%]
    lg:w-1/4
    shadow-2xl
    bg-[#caf1e2]
    rounded-2xl
    p-5
    sm:p-6
  "
>
  {/* Priority + Date */}
  <div className="flex items-center justify-between gap-3">
    <span className="text-sm sm:text-base font-semibold bg-red-500 py-1 px-2 rounded-md">
      High
    </span>

    <span className="text-sm sm:text-base text-gray-500 whitespace-nowrap">
      23 Sep 2026
    </span>
  </div>

  {/* Title */}
  <h2 className="text-xl sm:text-2xl font-bold mt-7">
    Complete React Project
  </h2>

  {/* Description */}
  <p className="text-sm sm:text-base text-gray-500 mt-2 leading-snug">
    Build the task management interface using React and
    Tailwind CSS and make it fully responsive.
  </p>

</div>
  );
};

export default TaskCard