import React, { useState } from 'react'
import Contactimg from '../assets/contact.jpg'

const Contact = () => {
  const [input, setInput] =useState({})

 const handleClick=(e)=>{
   e.preventDefault()
   alert("Submitted form successfully!")
  }

   const handleChange=(e)=>{
    let name = e.target.name
    let value = e.target.value
    setInput((prev)=>{
      return{...prev, [name]:value}
    })
  }
  return (
    <div className=''>
       <div className='py-40 bg-black text-white text-center px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5 font-primary'>Contact Page</h2>
        <p>For inquiries, feedback, or support, please fill out the form below and we'll get back to you as soon as possible.</p>
       </div>
       <div className='md:flex'>
       <div className='w-1/2 bg-orange-300 md:flex justify-center'>
      
      <div className='flex-col md:flex my-5 w-[450px] bg-white'> 
    <div className='p-5 pl-10 '>
     <h1 className='text-black text-2xl'>Let's Get in to touch</h1>
     </div>
     <div className='px-10'><input className='md:w-[300px] h-[40px] border-2 border-black ' type="required" name='name' placeholder='Name' onChange={handleChange} required/></div> 
    <div className='p-10'>
    <input className='md:w-[300px] h-[40px] border-2 border-black' type="email" name='email' placeholder='Email' onChange={handleChange}/>
    </div> 
    <div className='p-10'>
     <textarea className='md:w-[300px] h-[200px] border-2 border-black' name="message" id="" cols="30" rows="10" placeholder='Message...' onChange={handleChange}></textarea>
    </div>
    <div className='py-2 mb-4 md:flex justify-center pl-24'>
     <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleClick}><a href=""></a>Submit</button>
     </div>
    </div>
      </div>
      <div className='md:w-1/2 h-full'>
      <div className='md:w-full flex justify-center' >
      <img className='md:h-[700px] md:w-[700px]' src={Contactimg} alt="" />
      </div>
     </div>
       </div>
       
    </div>
  )
}

export default Contact