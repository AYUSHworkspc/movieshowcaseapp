import React from 'react'
import { Link } from 'react-router-dom'

function Header({data}) {
console.log(data)

  return (
    <div style={{
        background:`linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.5),rgba(0,0,0,.6)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,

        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundPosition:"object-fit-cover"

    }} 
    
    
    
    className='w-full h-[50vh] flex flex-col items-start  '>
      
      <h1 className='font-bold text-2xl w-[70%] text-white '>
        {data.name || data.title || data.original_name || data.original_title}
        </h1>
        <p className='w-1/2 text-white w-[60%]'>{data.overview.slice(0,200)}
        <Link to={`/${data.media_type}/details/${data.id}`} className=' mx-2 text-blue-900 text-xl bg-yellow-300 rounded-full p-1'>more</Link>
        </p>

        <p className='text-white'>
            <i class="ri-megaphone-fill text-yellow-500"     ></i>  {data.release_date || "no info " }
            <i class="ri-video-download-fill text-yellow-500 "></i> {data.media_type}
            </p>

            <Link to={`/${data.media_type}/details/${data.id}/trailer`} className='p-4 text-white bg-pink-500 rounded-2xl font-bold  '>WATCH TRAILER </Link>
        </div>
  )
}

export default Header