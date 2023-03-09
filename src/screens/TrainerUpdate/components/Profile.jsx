import React from 'react'
import PropTypes from 'prop-types'
// sm: grid place-items-center m-3
function Profile(props) {
  return (
    <div className="flex justify-center items-center sm:justify-start ">
    <div className='pt-4  sm:pt-8 pl-12 sm:flex '>
   <img className=' w-24 h-24 ml-8 border-black  rounded-full sm:ml-0 w-20 h-20' src={props.prop1} />
   <div className='text-center pr-8  sm:pl-4 pt-[5px] sm:text-start sm:pr-0'>
   <h1 className="text-xl font-bold">{props.prop2}</h1>
   <p className='text-xs text-slate-400 font-semibold'>{props.prop3}</p>
   <p className='text-xs text-slate-400 font-semibold pt-2'>{props.prop4}</p>

   </div>
   </div>
    </div>
 
  )
}

Profile.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.string.isRequired,
  prop3: PropTypes.string.isRequired,
  prop4: PropTypes.number

}

export default Profile
