import React, { useState } from 'react'
import {NavLink } from 'react-router-dom'
import {FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaBars, FaXmark} from 'react-icons/fa6';
import Login from './Login';

const Navbar = () => {
 const [toggle, setToggle] = useState(false)
 const[isModal, setIsModal]= useState(false)

 const toggleMenu = () => {
  setToggle(!toggle);
 }

    const navItems=[
    {path:'/', link:'Home'},
    {path:'/blogs', link:'Blogs'},
    {path:'/about', link:'About'},  
    {path:'/services', link:'Services'},
    {path:'/contact', link:'Contact'},
]

  const openModal = () =>{
    setIsModal(true)
  }

  const closeModal = () => {
    setIsModal(false)
  }
  return (
    <header className='bg-black text-white fixed top-0 right-0 left-0'>
        <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center '>
            <a href="/" className='text-xl font-bold text-white'>Blog<span className='text-orange-400'>psh</span></a>
        <ul className='md:flex gap-10 text-lg  hidden'>   
        {
        navItems.map(({path, link})=><li className='text-white ' key={path}><NavLink className={({ isActive, isPending }) =>
          isPending ? "pending"
        : isActive ? "active" 
        : ""
        } to={path} >
        {link}</NavLink></li>)}
        </ul>
        <div className='text-white lg:flex gap-2  items-center hidden'>
            <a className='hover:text-orange-400' href="/"><FaFacebook/></a>
            <a className='hover:text-orange-400' href="/"><FaInstagram/></a>
            <a className='hover:text-orange-400' href="/"><FaTwitter/></a>
            <a className='hover:text-orange-400' href="/"><FaYoutube/></a>
            <button onClick={openModal} className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500'>Log in</button>
        </div>
        <div>

          <Login isOpen={isModal} onClose={closeModal}/>


          <button onClick={toggleMenu} className='cursor-pointer md:hidden'>
            {
            toggle ? <FaXmark className='w-5 h-5'/> : <FaBars className='w-5 h-5'/>
            }
            </button>
        </div>
        </nav>

        {/* Moblie view */}

        <div>
        <ul className={`md:hidden gap-10 text-lg block space-y-4 px-4 py-6 mt-14 bg-white text-black ${toggle ? "fixed top-0 left-0 w-full transition-all ease-out duration-150 " : "hidden"}`}>   
        {
        navItems.map(({path, link})=><li  key={path}><NavLink onClick={toggleMenu} to={path}>{link}</NavLink></li>)}
        </ul>
        </div>
    </header>
  )
}

export default Navbar