import React from 'react'
import { loader } from "../assets";

function Loader(props) {
  return (
    <div className='w-full flex justify-center items-center flex-col'>
      <img src={loader} alt="loading images" className='w-32 h-32 object-contain' />
      <h1 className='font-bold text-2xl text-white mt-2'>
        Something went wrong, Please try again
      </h1>
    </div>
  )
}

export default Loader