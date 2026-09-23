import React from 'react'
import CreatedTaskCard from './CreatedTaskCard'

const AlLCreatedTasks = () => {
  return (
    <div className='  sm:w-3/6  w-full  flex flex-col gap-3 px-2  sm:py-1 py-4 overflow-y-scroll '
    >
        <CreatedTaskCard/>
         <CreatedTaskCard/>
          <CreatedTaskCard/>
           <CreatedTaskCard/>
            <CreatedTaskCard/>
    </div>
  )
}

export default AlLCreatedTasks