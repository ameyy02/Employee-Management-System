import React from 'react'
import Header from '../others/Header'
import Headeradmin from '../others/Headeradmin'
import {NotebookPen} from 'lucide-react'
import Createtask from '../others/Createtask'
import { TasksbyAdmin } from '../others/TasksbyAdmin'
const AdminDashboard = ({changeuser}) => {
  return (
    <div className='p-7 '>
        <Headeradmin changeuser={changeuser}/>
        <Createtask/>
        <TasksbyAdmin/>
    </div>
  )
}

export default AdminDashboard