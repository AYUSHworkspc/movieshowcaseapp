import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({data,title}) => {
console.log(title)

  return (

<div className='flex flex-wrap w-[full] m-auto'>

    {data.map((c,i)=>( 
      <Link to={`/${c.media_type  || title}/details/${c.id}`} className='w-[25vh] mr-[5%] mt-5' key={i} >
        <img  className='h-[35vh] object-cover ' src={`https://image.tmdb.org/t/p/original/${c.backdrop_path || c.poster_path || c.profile_path}`} alt="" />
      
      <h1 className='text-xl font-bold '>
      {c.name || c.title || c.original_name || c.original_title }
      </h1>

      {c.vote_average && (<div className='flex items-center justify-center bg-yellow-500 rounded-full w-[10vh] h-[5vh]'>
  <h1 className='text-blue-900 font-bold '>review {c.vote_average}</h1> 
  </div>) }


    </Link>))}
  </div>
  );
}

export default Cards