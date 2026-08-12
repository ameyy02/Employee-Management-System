import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/Localstorage'

export const Authcontext = createContext()

const Authprovider = ({ children }) => {
    const [userdata, setuserdata] = useState(null)

    useEffect(() => {
        // Creates initial data only if localStorage is empty
        setLocalStorage()

        const { employee, admin } = getLocalStorage()

        setuserdata({
            employee,
            admin
        })
    }, [])

    // Update employee data everywhere
    const updateEmployeeData = (updatedEmployees) => {
        localStorage.setItem(
            'employee',
            JSON.stringify(updatedEmployees)
        )

        setuserdata((prev) => ({
            ...prev,
            employee: updatedEmployees
        }))
    }

    // Update a particular task
    const updateTask = (employeeId, taskIndex, updatedTask) => {

        if (!userdata) return

        const updatedEmployees = userdata.employee.map((employee) => {

            if (employee.id !== employeeId) {
                return employee
            }

            const updatedTasks = employee.tasks.map((task, index) => {
                if (index === taskIndex) {
                    return updatedTask
                }

                return task
            })

            // Recalculate task numbers
            const taskNumbers = {
                active: updatedTasks.filter(task => task.active).length,
                newTask: updatedTasks.filter(task => task.newTask).length,
                completed: updatedTasks.filter(task => task.completed).length,
                failed: updatedTasks.filter(task => task.failed).length
            }

            return {
                ...employee,
                tasks: updatedTasks,
                taskNumbers
            }
        })

        updateEmployeeData(updatedEmployees)
    }

    return (
        <Authcontext.Provider
            value={{
                ...userdata,
                updateEmployeeData,
                updateTask
            }}
        >
            {children}
        </Authcontext.Provider>
    )
}

export default Authprovider