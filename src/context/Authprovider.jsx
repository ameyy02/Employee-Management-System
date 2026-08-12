import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/Localstorage'

export const Authcontext = createContext()

const Authprovider = ({ children }) => {

    const [userdata, setuserdata] = useState(null)

    useEffect(() => {

        console.log("Authprovider running")

        // Create initial localStorage data
        setLocalStorage()

        // Get data from localStorage
        const { employee, admin } = getLocalStorage()

        console.log("Employee data:", employee)
        console.log("Admin data:", admin)

        setuserdata({
            employee,
            admin
        })

    }, [])

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