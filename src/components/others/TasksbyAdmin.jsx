import React, { useContext } from 'react'
import { NotebookPen } from 'lucide-react'
import { Authcontext } from '../../context/Authprovider'

export const TasksbyAdmin = () => {
  const data = useContext(Authcontext)

  return (
    <div className="bg-[#111827] mt-5 w-full p-4 border border-[#1F2937] rounded-2xl shadow-xl shadow-black/20">

      <div className="flex gap-3 items-center">
        <NotebookPen color="#b80505" />
        <h1 className="text-xl font-semibold">
          Task List
        </h1>
      </div>

      <div className="mt-4">
        <table className="w-full">

          <thead className="text-left text-base border-b border-[#252C36] text-gray-500 font-semibold">
            <tr>
              <th>Task Title</th>
              <th>Assigned To</th>
              <th>New Task</th>
              <th>Active Task</th>
              <th>Completed</th>
              <th>Failed</th>
            </tr>
          </thead>

          <tbody className="text-sm text-gray-300">

            {data.employee.map((e, idx) => {

              return (
                <tr key={idx}>

                  <td className="py-2">
                    <div className="flex items-center gap-2">

                      <span className="w-2 h-2 rounded-full bg-red-500"></span>

                      <span>
                        {e.tasks[0]?.taskTitle}
                      </span>

                    </div>
                  </td>

                  <td className="py-2">
                    {e.firstName}
                  </td>

                  {/* NEW TASK */}
                  <td className="py-2">
                    <span className="inline-block px-2 py-1 rounded-md text-xs font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                      {e.taskNumbers.newTask}
                    </span>
                  </td>

                  {/* ACTIVE */}
                  <td className="py-2">
                    <span className="inline-block px-2 py-1 rounded-md text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {e.taskNumbers.active}
                    </span>
                  </td>

                  {/* COMPLETED */}
                  <td className="py-2">
                    <span className="inline-block px-2 py-1 rounded-md text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                      {e.taskNumbers.completed}
                    </span>
                  </td>

                  {/* FAILED */}
                  <td className="py-2">
                    <span className="inline-block px-2 py-1 rounded-md text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
                      {e.taskNumbers.failed}
                    </span>
                  </td>

                </tr>
              )
            })}

          </tbody>

        </table>
      </div>

    </div>
  )
}