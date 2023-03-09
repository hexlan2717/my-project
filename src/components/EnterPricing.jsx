import React from 'react'

function EnterPricing() {
  return (
    <div className="bg-white space-y-4 rounded-2xl mb-4 pb-4 text-center sm:text-start pt-6 p-4 ">
         
         <div className=''>
          <h1 className='text-2xl font-bold '>Enter Price</h1>
        </div>
         <form>
         <input className='w-full px-3 border-2 py-2 rounded-lg border-gray-300' placeholder='Enter Amount'>
         
         </input>
         </form>
         
        </div>
  )
}

export default EnterPricing