import { updateTaskStatus } from '../../utils/api'

const Pending = ({ data, onStatusUpdate }) => {

    const handleStatusUpdate = async (status) => {

        try {

            await updateTaskStatus(data.id, status)

            onStatusUpdate(data.id, status)

        } catch (error) {

            console.error("Failed to update task:", error)

            alert(error.message)

        }
    }

    return (
        <div className='flex text-gray-300 justify-between p-5 bg-[#111827] border border-[#1F2937] rounded-2xl shadow-xl shadow-black/20'>

            <div className='w-1/3'>

                <h1 className='text-lg text-white font-semibold'>
                    {data.title}
                </h1>

                <h3>
                    {data.description}
                </h3>

            </div>


            <div className='flex-col gap-1 flex w-30'>

                <h1>Category</h1>

                <h3 className='bg-yellow-900/40 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium'>
                    {data.category}
                </h3>

            </div>


            <div className='w-30'>

                <h1>Task Date</h1>

                <h3>
{data.task_date?.split('T')[0]}                </h3>

            </div>


            <div className='flex gap-2 w-40'>

                <button
                    onClick={() => handleStatusUpdate("completed")}
                    className="px-3 py-1 rounded-md text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/50 hover:bg-green-500/20 transition-all duration-200"
                >
                    Complete
                </button>

                <button
                    onClick={() => handleStatusUpdate("failed")}
                    className="px-3 py-1 rounded-md text-sm font-medium bg-red-500/10 text-red-400 border border-red-500/50 hover:bg-red-500/20 transition-all duration-200"
                >
                    Failed
                </button>

            </div>

        </div>
    )
}

export default Pending