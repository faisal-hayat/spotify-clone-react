import React from 'react'

function Error(props) {
  return (
    <div className='w-full flex justify-center items-center '>
     <h1 className='font-bold text-2xl text-white mt-2'>
        {props.title || "Failed to loadin songs..."}
      </h1>
    </div>
  )
}

export default Error