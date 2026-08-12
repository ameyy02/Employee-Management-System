import React, { useContext, useState } from 'react'
import { NotebookPen } from 'lucide-react'
import { Authcontext } from '../../context/Authprovider'

const Createtask = () => {

    const { employee, updateEmployeeData } = useContext(Authcontext)

    const [Title, setTitle] = useState('')
    const [Date, setDate] = useState('')
    const [assign, setassign] = useState('')
    const [category, setcategory] = useState('')
    const [desription, setdesription] = useState('')

    function submitHandler(e) {
        e.preventDefault()

        if (
            !Title ||
            !Date ||
            !assign ||
            !category ||
            !desription
        ) {
            alert('Please fill all fields')
            return
        }

        // Find employee
        const employeeExists = employee.some(
            (elem) =>
                elem.firstName.toLowerCase() ===
                assign.trim().toLowerCase()
        )

        if (!employeeExists) {
            alert('Employee not found')
            return
        }

        // Create task
        const newTask = {
            taskTitle: Title,
            taskDate: Date,
            taskDescription: desription,
            category: category,

            active: false,
            newTask: true,
            completed: false,
            failed: false
        }

        // Create updated employee array
        const updatedEmployees = employee.map((elem) => {

            if (
                elem.firstName.toLowerCase() ===
                assign.trim().toLowerCase()
            ) {

                return {
                    ...elem,

                    tasks: [
                        ...elem.tasks,
                        newTask
                    ],

                    taskNumbers: {
                        ...elem.taskNumbers,
                        newTask: elem.taskNumbers.newTask + 1
                    }
                }
            }

            return elem
        })

        // Update Context + localStorage
        updateEmployeeData(updatedEmployees)

        // Clear form
        setTitle('')
        setDate('')
        setassign('')
        setcategory('')
        setdesription('')

        alert('Task created successfully!')
    }

    return (
        <div className="bg-[#111827] mt-5 h-1/2 w-full p-4 border border-[#1F2937] rounded-2xl shadow-xl shadow-black/20">

            <form onSubmit={submitHandler}>

                <div className="flex gap-3 items-center">
                    <NotebookPen color="#b80505" />

                    <h1 className="text-xl font-semibold">
                        Create New Task
                    </h1>
                </div>

                <div className="flex w-full gap-10">

                    <div className="w-1/2">

                        <div className="mt-4">
                            <h1>Task Title</h1>

                            <input
                                value={Title}
                                onChange={(e) => setTitle(e.target.value)}
                                type="text"
                                placeholder="Enter Task Title"
                                className="w-full border border-gray-500 rounded py-1 px-3"
                            />
                        </div>

                        <div className="mt-4">
                            <h1>Date</h1>

                            <input
                                value={Date}
                                onChange={(e) => setDate(e.target.value)}
                                type="date"
                                className="w-full border border-gray-500 rounded py-1 px-3"
                            />
                        </div>

                        <div className="mt-4">
                            <h1>Assign To</h1>

                            <input
                                value={assign}
                                onChange={(e) => setassign(e.target.value)}
                                type="text"
                                placeholder="Enter Employee Name"
                                className="w-full border border-gray-500 rounded py-1 px-3"
                            />
                        </div>

                        <div className="mt-4">
                            <h1>Category</h1>

                            <input
                                value={category}
                                onChange={(e) => setcategory(e.target.value)}
                                type="text"
                                placeholder="Enter Category"
                                className="w-full border border-gray-500 rounded py-1 px-3"
                            />
                        </div>

                    </div>

                    <div className="w-1/2 mt-3">

                        <h1>Description</h1>

                        <textarea
                            value={desription}
                            onChange={(e) => setdesription(e.target.value)}
                            placeholder="Enter Task Description...."
                            className="border h-3/4 w-full border-gray-500 rounded py-1 px-3"
                        />

                        <button
                            type="submit"
                            className="bg-green-600 w-full py-2 rounded active:scale-95 cursor-pointer"
                        >
                            Create Task
                        </button>

                    </div>

                </div>

            </form>

        </div>
    )
}

export default Createtask