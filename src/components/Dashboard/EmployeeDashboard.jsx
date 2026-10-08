import { useEffect, useState } from 'react'
import Header from '../others/Header'
import Tasklistnum from '../others/Tasklistnum'
import Tasklist from '../Tasklist/Tasklist'
import { getMyTasks } from '../../utils/api'

const EmployeeDashboard = ({ changeuser, data }) => {

    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {

        const loadTasks = async () => {

            try {

                const result = await getMyTasks()

                setTasks(result.tasks)
                setError("")

            } catch (error) {

                console.error("Failed to fetch tasks:", error)

                setError(error.message)

            } finally {

                setLoading(false)

            }
        }

        loadTasks()

    }, [])


    // This updates the task inside React state
    const handleTaskStatusUpdate = (taskId, newStatus) => {

        setTasks((currentTasks) => {

            return currentTasks.map((task) => {

                if (task.id === taskId) {

                    return {
                        ...task,
                        status: newStatus
                    }

                }

                return task
            })

        })

    }


    if (loading) {
        return (
            <div className="p-7">
                <h1>Loading tasks...</h1>
            </div>
        )
    }


    if (error) {
        return (
            <div className="p-7">
                <h1 className="text-red-400">
                    {error}
                </h1>
            </div>
        )
    }


    return (
        <div className="p-7">

            <Header
                changeuser={changeuser}
                data={data}
            />

            <Tasklistnum
                tasks={tasks}
            />

            <Tasklist
                tasks={tasks}
                onStatusUpdate={handleTaskStatusUpdate}
            />

        </div>
    )
}

export default EmployeeDashboard