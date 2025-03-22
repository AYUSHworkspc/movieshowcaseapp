
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


const Sidenav = () => {



  return (
    <>
    <div className='w-[20%] h-full bg-blue-200 border-r-2 border-zinc-200 p-3 '>
        <h1>
        <i class="ri-tv-2-fill text-2xl "></i>
        <span className='text-2xl text-white '>MOVIE HOUSE</span>
        </h1>
        
        <nav className='flex flex-col text-zinc-400 text-xl  gap-4 '>
        <h1 className='text-white font-bold text-xl text-center my-5'>new feeds </h1>

        <Link to="/trending" className='hover:bg-[yellow] hover:text-white p-5 rounded-xl duration-300'> <i class="ri-fire-fill"></i> trending</Link>
        <Link to="/popular" className='hover:bg-[yellow] hover:text-white p-5 rounded-xl duration-300'><i class="ri-bard-fill"></i> popular</Link>
        <Link to="/movie" className='hover:bg-[yellow] hover:text-white p-5 rounded-xl duration-300'> <i class="ri-video-ai-fill"></i> movies</Link>
        <Link to="/tv" className='hover:bg-[yellow] hover:text-white p-5 rounded-xl duration-300'> <i class="ri-tv-2-fill"></i> shows</Link>
        <Link to="/person" className='hover:bg-[yellow] hover:text-white p-5 rounded-xl duration-300'> <i class="ri-team-fill"></i>  people</Link>
        
        </nav>

<hr />
<nav className='flex flex-col text-zinc-400 text-xl  gap-2 '>
        
<h1 className='text-center '>website info </h1>
        <Link to={"/contact"}  className='hover:bg-[yellow] hover:text-white p-5 rounded-xl duration-300'> <i class="ri-smartphone-fill"></i> contact </Link>
        <Link to={"/about"} className='hover:bg-[yellow] hover:text-white p-5 rounded-xl duration-300'> <i class="ri-community-fill"></i>about</Link>

        
        </nav>




    </div> 
    </>
  )
}

export default Sidenav