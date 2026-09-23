import React from 'react'

const CreatedTaskCard = () => {
  return (
    <div>
        <div className="w-full bg-[#fcb38a] rounded-2xl px-4 py-2 shadow-2xl">

      {/* Top */}
      <div className="flex items-center justify-between">
        <span className="bg-red-500 text-white px-3 py-1 rounded-lg font-semibold">
          High
        </span>

        <span className="text-gray-500">
          23 Sep 2026
        </span>
      </div>

      {/* Task */}
      <h2 className="text-2xl font-bold mt-3">
        Complete React Project
      </h2>

      <p className="text-gray-600 mt-1 max-w-3xl">
        Build the task management interface using React and Tailwind CSS
        and make it fully responsive.
      </p>

      {/* Bottom */}
      <div className="flex items-center justify-between mt-3 pt-2 border-t border-black/10">
        <span className="font-semibold">
          Assigned to: Nabeel
        </span>

        <span className="bg-black text-white px-4 py-2 rounded-lg text-sm">
          Development
        </span>
      </div>

    </div>
    </div>
  )
}

export default CreatedTaskCard