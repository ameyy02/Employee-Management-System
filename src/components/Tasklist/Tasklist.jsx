import Completed from './Completed'
import Failed from './failed'
import Newtask from './newtask'
import Pending from './Pending'

const Tasklist = ({ tasks,onStatusUpdate }) => {

    return (
        <div className='mt-7 flex flex-col gap-3'>

            <h1 className='text-2xl mb-1 font-semibold'>
                My Tasks
            </h1>

            {tasks.map((task) => {

                if (task.status === "completed") {
                    return (
                        <Completed
                            key={task.id}
                            data={task}
                        />
                    )
                }

                if (task.status === "new") {
                    return (
                        <Newtask
                            key={task.id}
                            data={task}
                            onStatusUpdate={onStatusUpdate}

                        />
                    )
                }

                if (task.status === "failed") {
                    return (
                        <Failed
                            key={task.id}
                            data={task}
                        />
                    )
                }

                if (task.status === "active") {
                    return (
                        <Pending
                            key={task.id}
                            data={task}
                            onStatusUpdate={onStatusUpdate}
                        />
                    )
                }

                return null
            })}

        </div>
    )
}

export default Tasklist