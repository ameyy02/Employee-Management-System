import  { useState } from 'react'
import Login from './components/auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'

const App = () => {

    const [user, setuser] = useState(() => {
        const loggedInUser = localStorage.getItem('loggedinuser')

        if (loggedInUser) {
            const userData = JSON.parse(loggedInUser)
            return userData.role
        }

        return null
    })

    const [loggedInUserData, setLoggedInUserData] = useState(() => {
        const loggedInUser = localStorage.getItem('loggedinuser')

        if (loggedInUser) {
            return JSON.parse(loggedInUser)
        }

        return null
    })


    const handleLogin = async (email, password) => {

        try {

            const response = await fetch(
                "http://localhost:5000/api/auth/login",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        email,
                        password
                    })
                }
            )

            const data = await response.json()

            if (!response.ok) {
                alert(data.message)
                return
            }

            // Store JWT
            localStorage.setItem(
                "token",
                data.token
            )

            // Store logged-in user
            localStorage.setItem(
                "loggedinuser",
                JSON.stringify(data.user)
            )

            // Set role
            setuser(data.user.role)

            // Store user data
            setLoggedInUserData(data.user)

        } catch (error) {

            console.error("Login error:", error)

            alert("Unable to connect to server")
        }
    }


    if (!user) {
        return <Login handleLogin={handleLogin} />
    }


    return (
        <>
            {user === 'admin' && (
                <AdminDashboard
                    changeuser={setuser}
                />
            )}

            {user === 'employee' && loggedInUserData && (
                <EmployeeDashboard
                    changeuser={setuser}
                    data={loggedInUserData}
                />
            )}
        </>
    )
}

export default App