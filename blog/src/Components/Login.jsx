
import React, { useReducer, useState } from 'react'
import {FaXmark} from 'react-icons/fa6'


const Login = ({isOpen, onClose}) => {
  const [input, setInput] = useState({})
  const handleupdate=(e)=>{
    e.preventDefault()
   alert(`You are Login Successfully`)
   setInput("")
  }
  const handlechange =(e)=>{
    let name = e.target.name
    let value = e.target.value
    setInput((prev)=>{return {...prev, [name]:value}})
    
  }
  const openModal = () =>{
    setIsModal(true)
  }

  const closeModal = () => {
    setIsModal(false)
  }
  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? "" : "hidden"}`}>
      
      <div className='login-container'>
        <div className='bg-orange-300 text-center p-5 h-96 lg:w-[500px] rounded'>
        <div className='flex justify-end'>
            <button onClick={onClose}><FaXmark className='w-5 h-5'/></button>
          </div>
         <h2 className='text-xl font-semibold mt-6 mb-5 uppercase'>please Login  here!</h2>
         <form className='px-4'>
          <div className='mb-5'>
            <input type="email" name='email' id='email' placeholder='examble@gmail.com' className='w-full rounded-md border
            border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6a64f1] focus:shadow-md'onChange={handlechange}/>
          </div>
          <div className='mb-5'>
            <input type="password" name='password' id='password' placeholder='Password' className='w-full rounded-md border
            border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6a64f1] focus:shadow-md' onChange={handlechange}/>
          </div>
          <div>
            <button onClick={handleupdate} className='hover:shadow-md rounded-md bg-[#6a64f1] hover:bg-orange-600 py-3 px-8 text-base font-semibold text-white outline-none'>Login</button>
          </div>
         </form>
        
        </div>

      </div>
        Login
    </div>
  )
}

export default Login