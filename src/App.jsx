import React, { useContext, useState } from 'react'
import Login from './components/auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { Authcontext } from './context/Authprovider'

const App = () => {

    const authdata = useContext(Authcontext)

    const [user, setuser] = useState(() => {
        const loggedInUser = localStorage.getItem('loggedinuser')

        if (loggedInUser) {
            const userData = JSON.parse(loggedInUser)
            return userData.role
        }

        return null
    })

    const [loggedInEmail, setLoggedInEmail] = useState(() => {
        const loggedInUser = localStorage.getItem('loggedinuser')

        if (loggedInUser) {
            const userData = JSON.parse(loggedInUser)
            return userData.email
        }

        return null
    })

    const handleLogin = (email, password) => {

        if (!authdata) return

        // Check admin
        const admin = authdata.admin.find(
            (admin) =>
                admin.email === email &&
                admin.password === password
        )

        if (admin) {

            setuser('admin')
            setLoggedInEmail(null)

            localStorage.setItem(
                'loggedinuser',
                JSON.stringify({
                    role: 'admin'
                })
            )

            return
        }

        // Check employee
        const employee = authdata.employee.find(
            (employee) =>
                employee.email === email &&
                employee.password === password
        )

        if (employee) {

            setuser('employee')
            setLoggedInEmail(employee.email)

            localStorage.setItem(
                'loggedinuser',
                JSON.stringify({
                    role: 'employee',
                    email: employee.email
                })
            )

            return
        }

        alert('Invalid credentials')
    }

    // Get the LATEST employee from AuthContext
    const loggedInEmployee = authdata?.employee?.find(
        (employee) => employee.email === loggedInEmail
    )

    if (!authdata) {
        return null
    }

    return (
        <>
            {!user && (
                <Login handleLogin={handleLogin} />
            )}

            {user === 'admin' && (
                <AdminDashboard changeuser={setuser} />
            )}

            {user === 'employee' && loggedInEmployee && (
                <EmployeeDashboard
                    changeuser={setuser}
                    data={loggedInEmployee}
                />
            )}
        </>
    )
}

export default App