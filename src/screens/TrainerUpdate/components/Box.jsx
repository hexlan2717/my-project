import React from 'react'
import PropTypes from 'prop-types'

const Box = props => {
  return (
    <div className=''>
      <div className="w-[199px] rounded-lg p-2 text-center mb-2 h-20"  style={{backgroundColor: props.prop3}}>
    <h1 className="font-semiold text-lg pt-1 pb-1 text-white">{props.prop1}</h1>
    <p className="font-semibold text-white text-xs">{props.prop2}</p>
      
    </div>
    </div>
  
  )
}

Box.propTypes = {
    prop1: PropTypes.number,
    prop2: PropTypes.string.isRequired,
    prop3: PropTypes.string.isRequired
}

export default Box