import React, { useContext } from 'react'
import { Authcontext } from '../../context/Authprovider'

const Newtask = ({ data, employeeId, taskIndex }) => {

    const { updateTask } = useContext(Authcontext)

    function acceptTask() {

        const updatedTask = {
            ...data,
            active: true,
            newTask: false,
            completed: false,
            failed: false
        }

        updateTask(
            employeeId,
            taskIndex,
            updatedTask
        )
    }

    return (
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] items-center gap-6 w-full text-gray-300 p-5 bg-[#111827] border border-[#1F2937] rounded-2xl shadow-xl shadow-black/20">

            <div>
                <h1 className="text-lg text-white font-semibold">
                    {data.taskTitle}
                </h1>

                <h3 className="text-gray-400">
                    {data.taskDescription}
                </h3>
            </div>

            <div className="flex flex-col gap-1">
                <h1>Category</h1>

                <h3 className="w-fit bg-yellow-900/40 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
                    {data.category}
                </h3>
            </div>

            <div>
                <h1>Task Date</h1>
                <h3>{data.taskDate}</h3>
            </div>

            <button
                onClick={acceptTask}
                className="px-3 py-2 rounded-md text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/50 hover:bg-green-500/20 transition-all duration-200"
            >
                Accept Task
            </button>

        </div>
    )
}

export default Newtask