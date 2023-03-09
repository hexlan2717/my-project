import React from 'react'
import EditComponent from './EditComponent'

function Video({serial}) {
  return (
    <>
    <div className="h-24 w-32  rounded-xl mb-4 bg-gray-200 hover:bg-gray-400 sm:ml-10">
    <div className='absolute sm:none'>
    <span className='p-2 pl-3 pr-3 w-7 h-7 bg-[#4D5EDC] rounded-full text-white font-bold justify-center items-center'>{serial}</span>

    </div>
    </div>
    
  
    </>
 
  )
}

export default Video