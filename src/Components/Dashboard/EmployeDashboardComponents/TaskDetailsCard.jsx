import React from 'react'
import TaskCard from './TaskCard'

const TaskDetailsCard = () => {
  return (
    <div id='TaskCard_Container' className='w-full px-7 sm:pb-14 pb-14 pt-6 sm:pt-4  h-90 sm:h-80 flex flex-nowrap gap-3 overflow-x-auto'>
        <TaskCard/>
        
    </div>
  )
}

export default TaskDetailsCard
