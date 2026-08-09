import React from 'react'

const Completed = () => {
  return (
    <div className='flex text-gray-300 gap-65  p-5 bg-[#111827] border border-[#1F2937] rounded-2xl shadow-xl shadow-black/20'>
        <div>
          <h1 className='text-lg text-white font-semibold'>Design Login Page UI</h1>
          <h3>Redesign the login page for better user experience</h3>
        </div>
        <div>
          <h1>Priority</h1>
          <h3 className='bg-red-900/40 text-red-400 px-3 py-1 rounded-full text-sm font-medium'>High</h3>
        </div>
        <div>
          <h1>Task Date</h1>
          <h3>May 26</h3>
        </div>
        <div>
          <h1>Status</h1>
          <h3 className='text-green-400'>Completed</h3>
        </div>
      </div>
  )
}

export default Completed