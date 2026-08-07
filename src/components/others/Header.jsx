import React from 'react'

const Header = () => {
  return (
    <div className='flex  items-end justify-between'>
        <div>
        <h1 className='text-2xl font-semibold'>Hello, Amey!👋</h1>
        <h2 className='text-gray-200'>Here's what happening with your work today.</h2>
        </div>
        <button className='bg-red-600 px-4 py-1 rounded-lg'>Logout</button>
    </div>
  )
}

export default Header