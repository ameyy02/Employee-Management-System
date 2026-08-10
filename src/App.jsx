import React, { useContext, useEffect, useState } from 'react'
import Login from './components/auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/Localstorage'
import { Authcontext } from './context/Authprovider'
const App = () => {
  const [user, setuser] = useState(null)
  const [LoggedInUserData, setLoggedInUserData] = useState(null)
  const authdata=useContext(Authcontext)
  useEffect(() => {
  const LoggedInUser=localStorage.getItem('loggedinuser')
  if(LoggedInUser){
    const userData=JSON.parse(LoggedInUser)
    setuser(userData.role)
    setLoggedInUserData(userData.data)
  }
  }, [])
  
  const handleLogin=(email,password)=>{
  if(email=='admin@123' && password=='123'){
    setuser("admin")
    localStorage.setItem('loggedinuser',JSON.stringify({role:"admin"}))
  console.log("this is admin")
  }
  else if(authdata){
    const employee=authdata.employee.find((e)=>email==e.email && password==e.password)
if(employee){
setuser("employee")
localStorage.setItem('loggedinuser',JSON.stringify({role:"employee",data:employee}))
setLoggedInUserData(employee)
}
  console.log("this is user")
}
else{
 alert("Invalid credentials")
}
  }
  return (
    <>
    {!user?<Login handleLogin={handleLogin}/> :''}
    {user=="admin"?<AdminDashboard changeuser={setuser}/>:(user=="employee"?<EmployeeDashboard changeuser={setuser} data={LoggedInUserData}/>:null)}
    </>
  )
}

export default App