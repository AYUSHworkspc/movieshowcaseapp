import React from 'react'
import notfound from "/loding.gif"

function Notfound() {
   return (
      <div className='w-screen h-screen flex justify-center items-center bg-black ' >
        <img className='object-fit h-[60%]' src={notfound} alt="" />
      </div>
    )
}

export default Notfound