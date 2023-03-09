import React from 'react'
import EditRegister from './EditRegister';
import Video from './Video';
import { MdDelete , MdModeEdit } from 'react-icons/md'

function AddVideos() {
  const timesToRender = new Array(4).fill(null);

  return (
    <div className="bg-white rounded-2xl mb-4 mt-8 text-center sm:text-left">
    <div className="p-6 sm:pl-8 flex flex-col sm:flex-row sm:space-x-10 items-center sm:items-start">
      <div className="mb-4 sm:mb-0 sm:w-1/2">
        <h1 className="font-bold text-black text-2xl pb-5">Course Details</h1>
        <div className="h-48 w-56 sm:max-w-screen-lg rounded-2xl bg-gray-200 flex justify-center items-center sm:w-48">
          <button>
          </button>
        </div>

        
      </div>


     <div className='w-full'>
     <EditRegister />

     </div>
       
    
    </div>
    {/* <div className="flex-col pb-10 space-y-3 -mt-10 ml-16 sm:flex sm:flex-row sm:flex-wrap sm:space-x-3 sm:justify-start sm:ml-0 sm:mt-0 sm:pb-0">
  {timesToRender.map((_, index) => (
    <div key={index} className="flex-shrink-0 sm:flex-shrink">
      <Video serial={index + 1}/>
    </div>
  ))}
</div> */}


<div className="pb-10 space-y-3 -mt-10 ml-16 sm:flex-no sm:space-x-3 sm:justify-start sm:ml-0 sm:mt-0 sm:pb-0">

<div className="grid-container  sm:hidden">
  <div className="">
  {timesToRender.map((_, index) => (
    <div key={index} className="relative flex">
      <Video serial={index + 1} />
       <div className=' ml-4 mt-6 space-x-3'>
         <button className='bg-gray-300 pl-3 rounded-full w-10 h-10'>
          <MdDelete />
         </button>
         <button className='bg-gray-300 pl-3 rounded-full w-10 h-10'>
          <MdModeEdit />
         </button>

       </div>
    </div>
  ))}
  </div>

</div>






  {/* Video row for web devices */}
  <div className="hidden  sm:flex flex-row items-center justify-start -space-x-3 pb-6">
    

    {timesToRender.map((_, index) => (
      <div>
              <Video key={index} serial={index + 1} />
              
              <div className=' ml-14 -mt-1 space-x-5'>
         <button className='bg-gray-300 pl-3 rounded-full w-10 h-10'>
          <MdDelete />
         </button>
         <button className='bg-gray-300 pl-3 rounded-full w-10 h-10'>
          <MdModeEdit />
         </button>

       </div>


      </div>
      
    ))}
    
    
  </div>

</div>

    
   
  </div>
  )
}

export default AddVideos