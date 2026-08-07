import React from 'react'

const Tasklist = () => {
  return (
    <div className='mt-7 flex flex-col gap-3'>
      <h1 className='text-2xl mb-1 font-semibold'>Today's Tasks</h1>
      <div className='flex text-gray-300 justify-between  p-5 bg-[#111827] border border-[#1F2937] rounded-2xl shadow-xl shadow-black/20'>
        <div>
          <h1 className='text-lg text-white font-semibold'>Design Login Page UI</h1>
          <h3>Redesign the login page for better user experience</h3>
        </div>
        <div>
          <h1>Priority</h1>
          <h3 className='bg-red-900/40 text-red-400 px-3 py-1 rounded-full text-sm font-medium'>High</h3>
        </div>
        <div>
          <h1>Due</h1>
          <h3>May 26</h3>
        </div>
        <div>
          <h1>Status</h1>
          <h3>In Progress</h3>
        </div>
      </div>
      <div className='flex text-gray-300 justify-between  p-5 bg-[#111827] border border-[#1F2937] rounded-2xl shadow-xl shadow-black/20'>
        <div>
          <h1 className='text-lg text-white font-semibold'>Design Login Page UI</h1>
          <h3>Redesign the login page for better user experience</h3>
        </div>
        <div>
          <h1>Priority</h1>
          <h3 className='bg-yellow-900/40 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium'>Med</h3>
        </div>
        <div>
          <h1>Due</h1>
          <h3>May 26</h3>
        </div>
        <div>
          <h1>Status</h1>
          <h3>In Progress</h3>
        </div>
      </div>
      <div className='flex text-gray-300 justify-between  p-5 bg-[#111827] border border-[#1F2937] rounded-2xl shadow-xl shadow-black/20'>
        <div>
          <h1 className='text-lg text-white font-semibold'>Design Login Page UI</h1>
          <h3>Redesign the login page for better user experience</h3>
        </div>
        <div>
          <h1>Priority</h1>
          <h3 className='bg-green-900/40 text-green-400 px-3 py-1 rounded-full text-sm font-medium'>Low</h3>
        </div>
        <div>
          <h1>Due</h1>
          <h3>May 26</h3>
        </div>
        <div>
          <h1>Status</h1>
          <h3>In Progress</h3>
        </div>
      </div>
      
    </div>
  )
}

export default Tasklist