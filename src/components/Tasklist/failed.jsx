import React from 'react'

const failed = () => {
  return (
    <div className='flex text-gray-300 gap-65  p-5 bg-[#111827] border border-[#1F2937] rounded-2xl shadow-xl shadow-black/20'>
        <div>
          <h1 className='text-lg text-white font-semibold'>Design Login Page UI</h1>
          <h3>Redesign the login page for better user experience</h3>
        </div>
        <div>
          <h1>Priority</h1>
          <h3 className='bg-yellow-900/40 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium'>Med</h3>
        </div>
        <div>
          <h1>Task Date</h1>
          <h3>May 26</h3>
        </div>
        <div>
          <h1>Status</h1>
          <h3 className='text-red-500'>Failed</h3>
        </div>
      </div>
  )
}

export default failed