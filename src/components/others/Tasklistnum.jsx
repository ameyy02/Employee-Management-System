import {
    ClipboardClock,
    CircleCheck,
    NotebookPen,
    CircleX
} from 'lucide-react'

const Tasklistnum = ({ tasks }) => {

    const activeTasks = tasks.filter(
        task => task.status === "active"
    ).length

    const completedTasks = tasks.filter(
        task => task.status === "completed"
    ).length

    const newTasks = tasks.filter(
        task => task.status === "new"
    ).length

    const failedTasks = tasks.filter(
        task => task.status === "failed"
    ).length

    return (
        <div className='mt-7 flex gap-7 w-full'>

            <div className='bg-[#111827] h-70 w-full p-7 border border-[#1F2937] rounded-2xl shadow-xl shadow-black/20'>

                <ClipboardClock
                    size={60}
                    className="p-3 rounded-xl bg-indigo-500/40 text-indigo-200"
                />

                <h1 className='mt-7 text-gray-400 font-semibold text-2xl'>
                    Pending Tasks
                </h1>

                <h1 className='text-6xl mt-5 font-semibold'>
                    {activeTasks}
                </h1>

            </div>


            <div className='bg-[#111827] h-70 w-full p-7 border border-[#1F2937] rounded-2xl shadow-xl shadow-black/20'>

                <CircleCheck
                    size={60}
                    className="p-3 rounded-xl bg-green-500/10 text-green-400"
                />

                <h1 className='mt-7 text-gray-400 font-semibold text-2xl'>
                    Completed Tasks
                </h1>

                <h1 className='text-6xl mt-5 font-semibold'>
                    {completedTasks}
                </h1>

            </div>


            <div className='bg-[#111827] h-70 w-full p-7 border border-[#1F2937] rounded-2xl shadow-xl shadow-black/20'>

                <NotebookPen
                    size={60}
                    className="p-3 rounded-xl bg-blue-500/10 text-blue-400"
                />

                <h1 className='mt-7 text-gray-400 font-semibold text-2xl'>
                    New Tasks
                </h1>

                <h1 className='text-6xl mt-5 font-semibold'>
                    {newTasks}
                </h1>

            </div>


            <div className='bg-[#111827] h-70 w-full p-7 border border-[#1F2937] rounded-2xl shadow-xl shadow-black/20'>

                <CircleX
                    size={60}
                    className="p-3 rounded-xl bg-red-500/10 text-red-400"
                />

                <h1 className='mt-7 text-gray-400 font-semibold text-2xl'>
                    Failed Tasks
                </h1>

                <h1 className='text-6xl mt-5 font-semibold'>
                    {failedTasks}
                </h1>

            </div>

        </div>
    )
}

export default Tasklistnum