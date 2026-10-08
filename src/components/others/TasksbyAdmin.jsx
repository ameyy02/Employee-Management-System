import { useEffect, useState } from 'react'
import {
    getAllTasks,
    deleteTask,
    updateTask
} from '../../utils/api'

export const TasksbyAdmin = ({ refreshTasks }) => {

    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(true)

    // Edit states
    const [editingTask, setEditingTask] = useState(null)
    const [editTitle, setEditTitle] = useState('')
    const [editDescription, setEditDescription] = useState('')
    const [editCategory, setEditCategory] = useState('')
    const [editDate, setEditDate] = useState('')

    // Fetch all tasks
    useEffect(() => {

        getAllTasks()
            .then((result) => {
                setTasks(result.tasks)
            })
            .catch((error) => {
                console.error("Failed to fetch tasks:", error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [refreshTasks])


    // Delete task
    const handleDelete = async (taskId) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this task?"
        )

        if (!confirmDelete) return

        try {

            await deleteTask(taskId)

            // Remove task immediately from UI
            setTasks(currentTasks =>
                currentTasks.filter(task => task.id !== taskId)
            )

        } catch (error) {

            console.error("Delete task error:", error)

            alert(error.message)
        }
    }


    // Open edit form
    const handleEdit = (task) => {

        setEditingTask(task)

        setEditTitle(task.title || '')
        setEditDescription(task.description || '')
        setEditCategory(task.category || '')

        // PostgreSQL date/timestamp handling
        setEditDate(
            task.task_date
                ? task.task_date.split('T')[0]
                : ''
        )
    }


    // Update task
    const handleUpdate = async () => {

        if (!editTitle || !editCategory || !editDate) {
            alert("Please fill all required fields")
            return
        }

        try {

            const taskData = {
                title: editTitle,
                description: editDescription,
                task_date: editDate,
                category: editCategory,
                employee_id: editingTask.employee_id
            }

            await updateTask(
                editingTask.id,
                taskData
            )

            // Update task immediately in UI
            setTasks(currentTasks =>
                currentTasks.map(task =>
                    task.id === editingTask.id
                        ? {
                            ...task,
                            title: editTitle,
                            description: editDescription,
                            task_date: editDate,
                            category: editCategory
                        }
                        : task
                )
            )

            // Close edit form
            setEditingTask(null)

            alert("Task updated successfully!")

        } catch (error) {

            console.error("Update task error:", error)

            alert(error.message)
        }
    }


    if (loading) {
        return (
            <div className="mt-7">
                <h1 className="text-xl">
                    Loading tasks...
                </h1>
            </div>
        )
    }


    return (
        <div className="mt-7">

            <h1 className="text-2xl font-semibold mb-5">
                Tasks
            </h1>


            {/* EDIT FORM */}

            {editingTask && (

                <div className="bg-[#111827] border border-[#1F2937] rounded-2xl p-5 mb-5 shadow-xl">

                    <h2 className="text-xl font-semibold mb-4">
                        Edit Task
                    </h2>


                    {/* Title */}

                    <div className="mb-4">

                        <label className="block mb-1">
                            Task Title
                        </label>

                        <input
                            value={editTitle}
                            onChange={(e) =>
                                setEditTitle(e.target.value)
                            }
                            type="text"
                            placeholder="Enter Task Title"
                            className="w-full border border-gray-500 rounded py-2 px-3 bg-[#111827]"
                        />

                    </div>


                    {/* Category */}

                    <div className="mb-4">

                        <label className="block mb-1">
                            Category
                        </label>

                        <input
                            value={editCategory}
                            onChange={(e) =>
                                setEditCategory(e.target.value)
                            }
                            type="text"
                            placeholder="Enter Category"
                            className="w-full border border-gray-500 rounded py-2 px-3 bg-[#111827]"
                        />

                    </div>


                    {/* Date */}

                    <div className="mb-4">

                        <label className="block mb-1">
                            Date
                        </label>

                        <input
                            value={editDate}
                            onChange={(e) =>
                                setEditDate(e.target.value)
                            }
                            type="date"
                            className="w-full border border-gray-500 rounded py-2 px-3 bg-[#111827]"
                        />

                    </div>


                    {/* Description */}

                    <div className="mb-4">

                        <label className="block mb-1">
                            Description
                        </label>

                        <textarea
                            value={editDescription}
                            onChange={(e) =>
                                setEditDescription(e.target.value)
                            }
                            placeholder="Enter Description"
                            className="w-full border border-gray-500 rounded py-2 px-3 bg-[#111827] h-28"
                        />

                    </div>


                    {/* Buttons */}

                    <div className="flex gap-3">

                        <button
                            onClick={handleUpdate}
                            className="bg-green-600 px-5 py-2 rounded-lg hover:bg-green-700 active:scale-95"
                        >
                            Save Changes
                        </button>

                        <button
                            onClick={() => setEditingTask(null)}
                            className="bg-gray-600 px-5 py-2 rounded-lg hover:bg-gray-700 active:scale-95"
                        >
                            Cancel
                        </button>

                    </div>

                </div>

            )}


            {/* TASK LIST */}

            <div className="flex flex-col gap-3">

                {tasks.length === 0 ? (

                    <div className="bg-[#111827] border border-[#1F2937] rounded-xl p-5">
                        <p className="text-gray-400">
                            No tasks found.
                        </p>
                    </div>

                ) : (

                    tasks.map((task) => (

                        <div
                            key={task.id}
                            className="bg-[#111827] border border-[#1F2937] rounded-xl p-5 shadow-lg"
                        >

                            <div className="flex justify-between items-start gap-5">

                                {/* TASK INFORMATION */}

                                <div className="flex-1">

                                    <h2 className="text-xl font-semibold">
                                        {task.title}
                                    </h2>


                                    <p className="text-gray-400 mt-1">
                                        {task.description}
                                    </p>


                                    <div className="flex flex-wrap gap-5 mt-4 text-sm">

                                        <p>
                                            <span className="text-gray-400">
                                                Assigned To:
                                            </span>{' '}
                                            {task.employee_name}
                                        </p>


                                        <p>
                                            <span className="text-gray-400">
                                                Category:
                                            </span>{' '}
                                            {task.category}
                                        </p>


                                        <p>
                                            <span className="text-gray-400">
                                                Date:
                                            </span>{' '}
                                            {task.task_date?.split('T')[0]}
                                        </p>


                                        <p>
                                            <span className="text-gray-400">
                                                Status:
                                            </span>{' '}

                                            <span className="capitalize">
                                                {task.status}
                                            </span>

                                        </p>

                                    </div>

                                </div>


                                {/* ACTION BUTTONS */}

                                <div className="flex gap-2">

                                    <button
                                        onClick={() =>
                                            handleEdit(task)
                                        }
                                        className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 active:scale-95"
                                    >
                                        Edit
                                    </button>


                                    <button
                                        onClick={() =>
                                            handleDelete(task.id)
                                        }
                                        className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 active:scale-95"
                                    >
                                        Delete
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))

                )}

            </div>

        </div>
    )
}