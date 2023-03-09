import React from 'react'
import AddVideos from './AddVideos'
import CourseDetails from './CourseDetails'
import EnterPricing from './EnterPricing'

function Body() {
  return (
    <div className="bg-slate-100 w-full p-3 pt-6">
    
     <CourseDetails />

     <AddVideos />

     <EnterPricing />


    </div>
  )
}

export default Body