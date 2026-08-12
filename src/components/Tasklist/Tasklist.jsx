import React from 'react'
import Completed from './Completed'
import Failed from './failed'
import Newtask from './newtask'
import Pending from './Pending'

const Tasklist = ({ data }) => {

    return (
        <div className="mt-7 flex flex-col gap-3">

            <h1 className="text-2xl mb-1 font-semibold">
                My Tasks
            </h1>

            {data.tasks.map((elem, idx) => {

                if (elem.completed) {
                    return (
                        <Completed
                            key={idx}
                            data={elem}
                            employeeId={data.id}
                            taskIndex={idx}
                        />
                    )
                }

                if (elem.newTask) {
                    return (
                        <Newtask
                            key={idx}
                            data={elem}
                            employeeId={data.id}
                            taskIndex={idx}
                        />
                    )
                }

                if (elem.failed) {
                    return (
                        <Failed
                            key={idx}
                            data={elem}
                        />
                    )
                }

                if (elem.active) {
                    return (
                        <Pending
                            key={idx}
                            data={elem}
                            employeeId={data.id}
                            taskIndex={idx}
                        />
                    )
                }

                return null
            })}

        </div>
    )
}

export default Tasklist