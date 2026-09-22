import React from 'react'

const TaskCounts = () => {
  return (
   <div className="mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 p-6">

  <div className="bg-yellow-300 rounded-2xl p-6 sm:p-6">
    <h2 className="text-4xl sm:text-4xl font-bold">5</h2>
    <p className="font-semibold mt-4 sm:mt-3 text-lg sm:text-2xl">
      New Task
    </p>
  </div>

  <div className="bg-blue-300 rounded-2xl p-6 sm:p-6">
    <h2 className="text-4xl sm:text-4xl font-bold">0</h2>
    <p className="font-semibold mt-4 sm:mt-3 text-lg sm:text-2xl">
      Accepted
    </p>
  </div>

  <div className="bg-green-300 rounded-2xl p-6 sm:p-6">
    <h2 className="text-4xl sm:text-4xl font-bold">0</h2>
    <p className="font-semibold mt-2 sm:mt-3 text-lg sm:text-2xl">
      Completed
    </p>
  </div>

  <div className="bg-red-300 rounded-2xl p-6 sm:p-6">
    <h2 className="text-4xl sm:text-4xl font-bold">2</h2>
    <p className="font-semibold mt-4 sm:mt-3 text-lg sm:text-2xl">
      Failed Task
    </p>
  </div>

</div>
  )
};

export default TaskCounts;