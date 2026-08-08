import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/Localstorage'
export const Authcontext=createContext()
const Authprovider = ({children}) => {
    const [userdata, setuserdata] = useState(null)
    useEffect(() => {
      const {employee,admin}=getLocalStorage()
    setuserdata({employee,admin})
    }, [])
    console.log(userdata)
  return (
    <div>
        <Authcontext.Provider value={userdata}>
            {children}
        </Authcontext.Provider>
    </div>
  )
}

export default Authprovider