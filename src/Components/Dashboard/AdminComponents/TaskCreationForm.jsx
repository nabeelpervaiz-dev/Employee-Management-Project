import React from 'react'
import AlLCreatedTasks from './AlLCreatedTasks'

const TaskCreationForm = () => {

    
  return (
    <div className=' sm:h-132 pt-3 px-4 gap-4 flex flex-col sm:flex-row'>

            <form className="sm:w-3/6 w-full  max-w-6xl  bg-white rounded-2xl p-6 shadow-2xl">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* LEFT SIDE */}
        <div className="space-y-5">

          {/* Task Title */}
          <div>
            <label className="block font-semibold mb-2">
              Task Title
            </label>

            <input
              type="text"
              placeholder="Enter task title"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block font-semibold mb-2">
              Date
            </label>

            <input
              type="date"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black"
            />
          </div>

          {/* Assign To */}
          <div>
            <label className="block font-semibold mb-2">
              Assign To
            </label>

            <input
              type="text"
              placeholder="Employee name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-semibold mb-2">
              Category
            </label>

            <select className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black">
              <option value="">Select category</option>
              <option value="development">Development</option>
              <option value="design">Design</option>
              <option value="meeting">Meeting</option>
              <option value="other">Other</option>
            </select>
          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="flex flex-col">

          {/* Description */}
          <label className="block font-semibold mb-2">
            Description
          </label>

          <textarea
            rows="10"
            placeholder="Enter task description"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black resize-none flex-1"
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full mt-5 bg-red-600 active:scale-95 text-white rounded-xl py-3 font-bold hover:bg-red-500 cursor-pointer transition"
          >
            Create Task
          </button>

        </div>

      </div>

           </form>
            
            <AlLCreatedTasks/>
  
           </div>


  )
}

export default TaskCreationForm