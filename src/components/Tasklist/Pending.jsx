import React from 'react'

const Pending = () => {
  return (
     <div className='flex text-gray-300 gap-65  p-5 bg-[#111827] border border-[#1F2937] rounded-2xl shadow-xl shadow-black/20'>
        <div>
          <h1 className='text-lg text-white font-semibold'>Design Login Page UI</h1>
          <h3>Redesign the login page for better user experience</h3>
        </div>
        <div>
          <h1>Priority</h1>
          <h3 className='bg-green-900/40 text-green-400 px-3 py-1 rounded-full text-sm font-medium'>Low</h3>
        </div>
        <div>
          <h1>Task Date</h1>
          <h3>May 26</h3>
        </div>
        <div className='flex gap-2'>
            <button className="px-3 py-1 rounded-md text-sm font-medium
bg-green-500/10 text-green-400
border border-green-500/50
hover:bg-green-500/20
transition-all duration-200">Complete</button>
<button className="px-3 py-1 rounded-md text-sm font-medium
bg-red-500/10 text-red-400
border border-red-500/50
hover:bg-red-500/20
transition-all duration-200">Failed</button>
        </div>
        
      </div>
  )
}

export default Pending