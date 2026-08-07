import React from 'react'
import Header from '../others/Header'
import Tasklistnum from '../others/Tasklistnum'
import Tasklist from '../Tasklist/Tasklist'

const EmployeeDashboard = () => {
  return (
    <div className='p-7'>
        <Header/>
        <Tasklistnum/>
        <Tasklist/>
    </div>
  )
}

export default EmployeeDashboard