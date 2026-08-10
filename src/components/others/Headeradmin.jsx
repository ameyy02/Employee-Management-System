import React from 'react'

const Headeradmin = () => {
  function logOut() {
    localStorage.setItem('loggedinuser','')
    window.location.reload()
  }
  return (
    <div className='flex  items-end justify-between'>
        <div>
        <h1 className='text-2xl font-semibold'>Hello, Amey!👋</h1>
        <h2 className='text-gray-200'>Here's what happening with your Dashboard today.</h2>
        </div>
        <button onClick={logOut} className='bg-red-600 px-4 py-1 rounded-lg active:scale-95 cursor-pointer'>Logout</button>
    </div>
  )
}

export default Headeradmin