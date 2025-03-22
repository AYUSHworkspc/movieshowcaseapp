import React from 'react'
import Dropdown from '../Templates/Dropdown'
import { Link } from 'react-router-dom'

function Horizontalcards({data,func}) {
  return (
    <div className='w-full h-[50vh] bg-blue-500 overflow-auto' >
        <div className='mb-5 flex justify-between'>
        <h1 className='text-2xl font-bold text-zinc-200'>Trending  </h1>
        <Dropdown func={func} title="filter" options={["tv","movie","all"]} />


        </div>
        <div className='w-full flex overflow-x-auto '>

{data.map((d,i)=>(  
  
    
    <Link  onClick={() => console.log("Clicked Movie ID:", movie.id)}   to={`/${d.media_type}/details/${d.id}`} key={i} className='min-w-[15%] mr-5 bg-orange-500 m-5'> 


<img className='w-full h-[45%] object-cover' src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.profile_path}`} alt="" />
<h1 className='text-2xl font-bold text-white'> {d.title || d.name || d.original_name|| d.original_title}</h1>
   <p className='w-[70%] mt-3 mb-3 text-white '>
{d.overview.slice(0,100)}
   <span className='text-blue-900 font-bold text-xl'> more</span>
   </p>


    </Link>
    
    ))}




            
        </div>
    </div>
  )
}

export default Horizontalcards