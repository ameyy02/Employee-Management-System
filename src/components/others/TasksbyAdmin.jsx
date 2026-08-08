import React from 'react'
import {NotebookPen} from 'lucide-react'
export const TasksbyAdmin = () => {
  return (
    <div className='bg-[#111827] mt-5 h-55 overflow-auto w-full p-4 border border-[#1F2937] rounded-2xl shadow-xl shadow-black/20'>
            <div className='flex gap-3 items-center'>
                    <NotebookPen color="#b80505" />
                    <h1 className='text-xl font-semibold'>Task List</h1>
                </div>
                <div className='mt-4'>
                  <table className='w-full'>
      <thead className="text-left text-base text-gray-500 font-semibold pb-3">
        <tr>
          <th>Task Title</th>
          <th>Assigned To</th>
          <th>Category</th>
          <th>Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
    
      <tbody className="py-4 text-sm text-gray-300 border-t border-[#252C36]">
        <tr>
          <td className='py-2'>
            <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-red-500"></span>
        <span>Make a UI design</span>
            </div>
          </td>
          <td className='py-2'>John Doe</td>
          <td className='py-2'>
            <span className="inline-block px-2 py-1 rounded-md text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
            Design
            </span>
          </td>
          <td className='py-2'>25/05/2025</td>
          <td className='py-2'>
            <span className="px-2 py-1 rounded-md text-xs font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
              Medium
            </span>
          </td>
          <td className='py-2'>...</td>
        </tr>
        <tr>
          <td className='py-2'>
            <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-red-500"></span>
        <span>Make a UI design</span>
            </div>
          </td>
          <td className='py-2'>John Doe</td>
          <td className='py-2'>
            <span className="inline-block px-2 py-1 rounded-md text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
            Design
            </span>
          </td>
          <td className='py-2'>25/05/2025</td>
          <td className='py-2'>
            <span className="px-2 py-1 rounded-md text-xs font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
              Medium
            </span>
          </td>
          <td className='py-2'>...</td>
        </tr>
        <tr>
          <td className='py-2'>
            <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-red-500"></span>
        <span>Make a UI design</span>
            </div>
          </td>
          <td className='py-2'>John Doe</td>
          <td className='py-2'>
            <span className="inline-block px-2 py-1 rounded-md text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
            Design
            </span>
          </td>
          <td className='py-2'>25/05/2025</td>
          <td className='py-2'>
            <span className="px-2 py-1 rounded-md text-xs font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
              Medium
            </span>
          </td>
          <td className='py-2'>...</td>
        </tr>
        <tr>
          <td className='py-2'>
            <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-red-500"></span>
        <span>Make a UI design</span>
            </div>
          </td>
          <td className='py-2'>John Doe</td>
          <td className='py-2'>
            <span className="inline-block px-2 py-1 rounded-md text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
            Design
            </span>
          </td>
          <td className='py-2'>25/05/2025</td>
          <td className='py-2'>
            <span className="px-2 py-1 rounded-md text-xs font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
              Medium
            </span>
          </td>
          <td className='py-2'>...</td>
        </tr>
        
      </tbody>
                  </table>
                </div>
            </div>
  )
}
