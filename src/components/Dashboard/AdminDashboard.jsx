import { useState } from 'react'
import Headeradmin from '../others/Headeradmin'
import Createtask from '../others/Createtask'
import { TasksbyAdmin } from '../others/TasksbyAdmin'

const AdminDashboard = ({changeuser}) => {

    const [refreshTasks, setRefreshTasks] = useState(0)

    const handleTaskCreated = () => {
        setRefreshTasks(prev => prev + 1)
    }

    return (
        <div className='p-7'>

            <Headeradmin changeuser={changeuser}/>

            <Createtask onTaskCreated={handleTaskCreated}/>

            <TasksbyAdmin refreshTasks={refreshTasks}/>

        </div>
    )
}

export default AdminDashboard