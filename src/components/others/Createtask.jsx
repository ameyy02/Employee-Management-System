import React from 'react'
import {NotebookPen} from 'lucide-react'
const Createtask = () => {
  return (
   <div className='bg-[#111827] mt-5 h-1/2 w-full p-4 border border-[#1F2937] rounded-2xl shadow-xl shadow-black/20'>
        <form >
            <div className='flex gap-3 items-center'>
                <NotebookPen color="#b80505" />
                <h1 className='text-xl font-semibold'>Create New Task</h1>
            </div>
            <div className='flex w-full gap-10'>
               <div className='w-1/2'>
                <div className='mt-4'>
                    <h1>Task Title</h1>
                    <input type='text' placeholder='Enter Task Title' className='w-full border border-gray-500 rounded py-1 px-3'></input>
                </div>
                <div className='mt-4'>
                    <h1>Date</h1>
                    <input type='date' placeholder='dd' className='w-full border border-gray-500 rounded py-1 px-3'></input>
                </div>
                <div className='mt-4'>
                    <h1>Assign To</h1>
                    <input type='text' placeholder='Enter Employee Name' className='w-full border border-gray-500 rounded py-1 px-3'></input>
                </div>
                <div className='mt-4'>
                    <h1>Category</h1>
                    <input type='text' placeholder='Enter Category' className='w-full border border-gray-500 rounded py-1 px-3'></input>
                </div>
               </div>
               <div className='w-1/2 mt-3'>
                <h1>Description</h1>
                <textarea placeholder='Enter Task Description....' className='border h-3/4 w-full border-gray-500 rounded py-1 px-3'></textarea>
                <button className='bg-green-600 w-full py-2 rounded active:scale-95 cursor-pointer'>Create Task</button>
            </div>
            </div>
        </form>
        </div>
  )
}

export default Createtask