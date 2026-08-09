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
  const handleLogin=(email,password)=>{
  if(email=='admin@123' && password=='123'){
    setuser("admin")
  console.log("this is admin")
  }
  else if(authdata){
    const employee=authdata.employee.find((e)=>email==e.email && password==e.password)
if(employee){
setuser("employee")
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
    {user=="admin"?<AdminDashboard/>:(user=="employee"?<EmployeeDashboard data={LoggedInUserData}/>:null)}
    </>
  )
}

export default App