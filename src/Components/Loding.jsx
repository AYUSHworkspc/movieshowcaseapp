import React from 'react'
import loader from "/loader.gif"


const Loding = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-black ' >
      <img className='object-fit h-[60%]' src={loader} alt="" />
    </div>
  )
}

export default Loding