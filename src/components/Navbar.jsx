import React from 'react'
import {BsArrowLeftCircle} from "react-icons/bs"
import { FiSearch } from "react-icons/fi"
import { AiOutlineWallet } from "react-icons/ai"
import {RiUser6Line} from "react-icons/ri"
import Badge from 'react-badges'

import vector from  '../assets/Vector.svg'
function Navbar() {
  return (
    <nav className="bg-black ">
    <div className=" max-w-full px-2 sm:px-6 lg:px-12">
      <div className="relative flex h-16 items-center justify-between">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          


        {/* Logo   */}
          <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
    
            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
    
            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

       {/* Logo end  */}
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
            <img className="block h-8 w-auto lg:hidden" src={vector} alt="cloudlyz" />
            <img className="hidden h-8 w-auto lg:block" src={vector} alt="" />
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-2">
              <a href="#" className="bg-gray-900 text-white px-3 py-2  text-sm font-medium" aria-current="page">
               <BsArrowLeftCircle size={24}/>
              </a>
  
              <a href="#" className="text-gray-600 font-bold  hover:text-white px-3 py-2 rounded-md text-sm ">Home</a>
  
              <a href="#" className="text-white  hover:text-white px-3 py-2 rounded-md text-sm font-bold">Upload Course</a>
  
              <a href="#" className="text-gray-600  hover:text-white px-3 py-2 rounded-md text-sm font-bold">Go Live</a>
            </div>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
         
        <div className="relative ml-3 ">
            <div>
              <button type="button" className="hover:via-violet-500  flex items-center justify-center rounded-full bg-[#4D5EDC] h-[34px] w-[108px] text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <span className="sr-only">Open user menu</span>
                <h1 className="text-white font-bold ">Publish</h1>   
              </button>
            </div>
  
            
          </div>
         
         
         
         <div className='hidden sm:ml-6 sm:block'>
         <div className="flex space-x-3">

           <button type="button" className="rounded-full bg-gray-800 p-1  text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">

            <span className="sr-only">Search</span>
             <FiSearch size={26} className="p-1" />
          </button>

          <button type="button" className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span class="flex-reverse">
 
  <span className=" animate-ping absolute top-[17px] rounded-full h-3 w-3 bg-red-500"></span>
  <span className=" absolute rounded-full h-2 w-2 bg-red-600"></span>
</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
          </button>

          <button type="button" className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="sr-only">wallet</span>
            <AiOutlineWallet size={26} className="p-1" />
          </button>

          <button type="button" className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="sr-only">User</span>
            <RiUser6Line size={26} className="p-1" />
          </button>  
          
          </div>
        </div>
          
  
      
        </div>
      </div>
    </div>
  
 
    <div className="sm:hidden" id="mobile-menu">
      <div className="space-y-1 px-2 pt-2 pb-3">
        <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Back</a>
  
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
  
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Upload Course</a>
  
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Go Live</a>
      </div>
    </div>
  </nav>
  )
}

export default Navbar