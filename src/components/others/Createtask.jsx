import { useState,useEffect } from 'react'
import { NotebookPen } from 'lucide-react'
import { createTask,getEmployees } from '../../utils/api'

const Createtask = ({onTaskCreated}) => {

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [assign, setAssign] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false)
    const [employees,setEmployees]=useState([])

    useEffect(() => {

    const loadEmployees = async () => {

        try {

            const result = await getEmployees()

            setEmployees(result.employees)

        } catch (error) {

            console.error("Failed to fetch employees:", error)

        }

    }

    loadEmployees()

}, [])
    const submitHandler = async (e) => {

        e.preventDefault()

        if (!title || !date || !assign || !category || !description) {
            alert("Please fill all fields")
            return
        }

        try {

            setLoading(true)

            const taskData = {
                title: title,
                description: description,
                task_date: date,
                category: category,
                employee_id: Number(assign)
            }

            await createTask(taskData)

onTaskCreated()


            alert("Task created successfully!")

            setTitle('')
            setDate('')
            setAssign('')
            setCategory('')
            setDescription('')

        } catch (error) {

            console.error("Create task error:", error)

            alert(error.message)

        } finally {

            setLoading(false)

        }
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
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                type="text"
                                placeholder="Enter Task Title"
                                className="w-full border border-gray-500 rounded py-1 px-3"
                            />

                        </div>


                        <div className="mt-4">

                            <h1>Date</h1>

                            <input
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                type="date"
                                className="w-full border border-gray-500 rounded py-1 px-3"
                            />

                        </div>


                        <div className="mt-4">

                            <h1>Assign To</h1>

                            <select
    value={assign}
    onChange={(e) => setAssign(e.target.value)}
    className="w-full border border-gray-500 rounded py-1 px-3 bg-[#111827]"
>
    <option value="">
        Select Employee
    </option>

    {employees.map((employee) => (
        <option
            key={employee.id}
            value={employee.id}
        >
            {employee.first_name}
        </option>
    ))}
</select>

                        </div>


                        <div className="mt-4">

                            <h1>Category</h1>

                            <input
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                type="text"
                                placeholder="Enter Category"
                                className="w-full border border-gray-500 rounded py-1 px-3"
                            />

                        </div>

                    </div>


                    <div className="w-1/2 mt-3">

                        <h1>Description</h1>

                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter Task Description...."
                            className="border h-3/4 w-full border-gray-500 rounded py-1 px-3"
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-green-600 w-full py-2 rounded active:scale-95 cursor-pointer disabled:opacity-50"
                        >
                            {loading ? "Creating..." : "Create Task"}
                        </button>

                    </div>

                </div>

            </form>

        </div>
    )
}

export default Createtask