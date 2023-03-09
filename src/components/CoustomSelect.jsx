import React from 'react'
import Select from 'react-select'



const customStyles = {
    control: (base, state) => ({
      ...base,
      border: 'none', // here you can remove the border
      boxShadow: state.isFocused ? null : null,
      '&:hover': {
        border: 'none', // also remove border on hover
      },
    }),
  };


function CoustomSelect({ onChange, options, value, className , placeholder}) {
 
    
    const defaultValue = (options, value) => {
        return options ? options.find(option => option.value === value) : "";
    };

    return (
   <div className="appearance-none block w-full text-start pl-2 text-[10px] font-semibold text-gray-700  border-gray-300 border-2 rounded-lg  mb-3 leading-tight focus:outline-none focus:bg-white">
            <Select
                value={defaultValue(options, value)}
                onChange={value => {
                    onChange(value)
       
                }} options={options} 
                placeholder={placeholder}
                styles={customStyles}/>
        </div>

  )
}

export default CoustomSelect