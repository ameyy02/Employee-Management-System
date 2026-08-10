import React from 'react'
import Header from '../others/Header'
import Tasklistnum from '../others/Tasklistnum'
import Tasklist from '../Tasklist/Tasklist'

const EmployeeDashboard = (props) => {
  return (
    <div className='p-7'>
        <Header changeuser={props.changeuser} data={props.data}/>
        <Tasklistnum data={props.data}/>
        <Tasklist data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard