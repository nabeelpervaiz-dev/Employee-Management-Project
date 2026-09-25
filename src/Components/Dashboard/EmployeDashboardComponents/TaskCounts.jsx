import React from 'react'

const TaskCounts = (props) => {
  const taskcounts=props.data.taskCounts
  console.log(taskcounts)

  return (
   <div className="mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 p-6">

  <div className="bg-[#b5093a] rounded-2xl p-6 sm:p-6 text-white">
    <h2 className="text-4xl sm:text-4xl font-bold">{taskcounts.newTask}</h2>
    <p className="font-semibold mt-4 sm:mt-3 text-lg sm:text-2xl">
      New Task
    </p>
  </div>

  <div className="bg-[#077953] rounded-2xl p-6 sm:p-6 text-white">
    <h2 className="text-4xl sm:text-4xl font-bold">{taskcounts.active}</h2>
    <p className="font-semibold mt-4 sm:mt-3 text-lg sm:text-2xl">
      Accepted
    </p>
  </div>

  <div className=" bg-[#8d8315] rounded-2xl p-6 sm:p-6 text-white">
    <h2 className="text-4xl sm:text-4xl font-bold">{taskcounts.completed}</h2>
    <p className="font-semibold mt-2 sm:mt-3 text-lg sm:text-2xl">
      Completed
    </p>
  </div>

  <div className="bg-[#b03b7f] rounded-2xl p-6 sm:p-6 text-white">
    <h2 className="text-4xl sm:text-4xl font-bold">{taskcounts.failed}</h2>
    <p className="font-semibold mt-4 sm:mt-3 text-lg sm:text-2xl">
      Failed Task
    </p>
  </div>

</div>
  )
};

export default TaskCounts;