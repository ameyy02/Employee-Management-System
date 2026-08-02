import React, { useState } from 'react'
import {Lock,Mail,LockKeyhole} from 'lucide-react'
const Login = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
function submithandler(e){
  e.preventDefault()
  console.log("form submitted")
  console.log("the email of user is: ",email)
  console.log("password: ",password)
  setemail("")
  setpassword("")
}
  return (
    <div className='flex items-center justify-center h-screen w-full'>
      <div className=' border-2 border-gray-800 w-100 h-120 shadow-[0_0_60px_rgba(79,70,229,0.12)] bg-[#0F172A] rounded-xl p-10 flex flex-col gap-4'>
          <div className='mx-auto'>
            <Lock size={48} className='text-violet-500 drop-shadow-[0_0_10px_rgba(124,58,237,0.8)]'/>
          </div>
          <div className='mx-auto'>
            <h1 className='text-3xl font-semibold mb-3'>Welcome Back!👋</h1>
            <h2 className='text-gray-300'>Sign in to access your workspace</h2>
          </div>
          <form onSubmit={(e)=>{
            submithandler(e)
          }}>
            <div className='text-gray-400 flex flex-col gap-10'>
              <div className='relative'>
              <h2 className='mb-3'>Email Address</h2>
              <Mail size={20} className='absolute left-2 top-12'/>
            <input value={email} type='email' placeholder="Enter your mail" className='px-10 w-full py-2 rounded-lg outline outline-gray-500'
            onChange={(e)=>{
              setemail(e.target.value)
            }}></input>
            <h2 className='mt-5 mb-3'>Password</h2>
            <LockKeyhole size={20} className='absolute left-2 top-36' />
            <input value={password} type='password' placeholder="Enter your Password" className='px-10 w-full py-2 rounded-lg outline outline-gray-500'
            onChange={(e)=>{
              setpassword(e.target.value)
            }}></input>
            </div>
            <div>
            <button className='w-full shadow-[0_5px_20px_rgba(79,70,229,0.45)] bg-linear-to-r from-violet-600 via-indigo-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white py-2 rounded-lg'>Sign In</button>
            </div>
            </div>
          </form>
      </div>
    </div>
  )
}

export default Login