import React from 'react'

const newtask = ({data}) => {
  return (
    <div className='flex w-full text-gray-300 justify-between p-5 bg-[#111827] border border-[#1F2937] rounded-2xl shadow-xl shadow-black/20'>
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
        <button className="px-3 w-40 py-2 rounded-md text-sm font-medium
bg-green-500/10 text-green-400
border border-green-500/50
hover:bg-green-500/20
transition-all duration-200">Accept Task</button>
      </div>
  )
}

export default newtask