import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../Utils/axios'

const Topnav = () => {

const[query,setquery]=useState("");
const [searches,setsearches]=useState([]);


console.log(query);

const GetSearches=async()=>{
  try{
    const {data}=await axios.get(`/search/multi?query=${query}`)
    console.log(data);
    setsearches(data.results);
    console.log(searches);

  }
  catch (error){
console.log(error);

  }
}

useEffect(()=>{
  GetSearches();

},[query])


  return (
    <>
    <div className='w-full h-[10vh] relative flex justify-center items-center bg-pink-400 mx-auto'> <i class="ri-search-2-line text-white text-xl"></i>
    <input
       onChange={(e)=>{setquery(e.target.value)}}
       value={query}
    
    className='w-[50%] mx-10 p-5 ' type="text" placeholder="search karo " />

{query.length>0 ? ( <i class="ri-close-large-line text-blue text-2xl hover:text-2xl" onClick={(e)=>{setquery("")}   }></i>) : <h1></h1>}

   

    <div className='absolute w-[50%] max-h-[50vh] bg-yellow-300 top-[100%] overflow-auto rounded'>
        {searches.map((s,i)=>(<Link to={`/${s.media_type}/details/${s.id}`} key={i} className='p-10 flex items-center justify-center hover:bg-red-500 text-bold bg-yellow-500 border-2 border-black'>

<img src={`https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`} alt=""
className='w-[12vh] h-[12vh] object-cover rounded-md mr-5' />
<span>{s.name || s.title || s.original_name || s.original_title}</span>
</Link>
))}

{/* <Link className='p-10 flex items-center justify-center hover:bg-red-500 text-bold bg-yellow-500 border-2 border-black'>

<img src="" alt="" />
<span>hello world</span>
</Link>
 */}

    </div>
    
    </div>
    </>
  )
}

export default Topnav