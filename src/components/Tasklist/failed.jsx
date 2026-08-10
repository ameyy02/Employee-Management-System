import React from 'react'

const failed = ({data}) => {
  return (
    <div className='flex text-gray-300 justify-between  p-5 bg-[#111827] border border-[#1F2937] rounded-2xl shadow-xl shadow-black/20'>
        <div className='w-1/3'>
          <h1 className='text-lg text-white font-semibold'>{data.taskTitle}</h1>
          <h3>{data.taskDescription}</h3>
        </div>
        <div className='flex-col gap-1 flex w-30'>
          <h1>Category</h1>
          <h3 className='bg-yellow-900/40 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium'>{data.category}</h3>
        </div>
        <div className='w-30'>
          <h1>Task Date</h1>
          <h3>{data.taskDate}</h3>
        </div>
        <div className='w-40'>
          <h1>Status</h1>
          <h3 className='text-red-500'>Failed</h3>
        </div>
      </div>
  )
}

export default failed