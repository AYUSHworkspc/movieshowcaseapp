import React from 'react'
import ReactPlayer from "react-player"
import { useSelector } from 'react-redux';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Notfound from '../Components/Notfound';
function Trailer() {
    const navigate=useNavigate()
const {pathname}=useLocation();
const category=pathname.includes("movie") ? "movie" : "tv";
const ytvideo=useSelector((state)=>state[category].info.videos)




  return ytvideo ? (
    <div className='absolute w-screen h-screen flex items-center justify-center top-0 left-0 z-[100] bg-[rgba(0,0,0,.8)] '>
        <Link onClick={()=>{navigate(-1)}}
        
         className="ri-close-circle-line  hover:text-yellow-900 absolute font-bold text-3xl text-white top-[5%] right-[50%]">
        </Link>
    <ReactPlayer  url={`https://www.youtube.com/watch?v=${ytvideo.key}`}  
    controls
    height={720}
    width={1420}
    />
    
    
    
    </div>
  )  : ( <Notfound/> )  
}

export default Trailer