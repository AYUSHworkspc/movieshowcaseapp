import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Topnav from './Topnav';
import Dropdown from '../Templates/Dropdown';
import axios from '../Utils/axios';
import Cards from '../Templates/Cards';
import Loding from '../Components/Loding'
import InfiniteScroll from 'react-infinite-scroll-component';

function Trending() {
const navigate=useNavigate();
const [category,setcategory]=useState("all");
const [duration,setduration]=useState("day");
const [trending,settrending]=useState([]);
const [page,setpage]=useState(1);
const[hasMore,sethasMore]=useState(true);

const GetTrending=async()=>{
    try{
      const {data}=await axios.get(`/trending/${category}/${duration}?page=${page}`)
  
      if(data.results.length>0){
        settrending((prev)=>[...prev, ...data.results])
        setpage(page+1)
      } else{
sethasMore(false)
      }
    
      //settrending(data.results);
      
      console.log(data)
  
    }
    catch (error){
  console.log(error);
  
    }
  };

console.log(trending);

const refreshHandler=async()=>{
  if(trending.length===0){
    GetTrending();
  }
  else{
  setpage(1)
  settrending([])
  GetTrending()
  }
}



useEffect(()=>{
    refreshHandler();
},[category,duration])


  return trending.length>0  ? (
    <div className='w-screen h-screen p-10   '>

<div className='w-full  flex items-center justify-center   '>
    
    <h1 className='text-2xl text-yellow-900 font-semibold'>
        
    <i onClick={()=>{navigate(-1)}} class="ri-arrow-left-circle-line  hover:text-yellow-900 "></i>
         Trending </h1>

<div className='flex  items-center justify-between'> 
    
    
    
    <Topnav/>

<Dropdown
title="category"
options={["movie","tv","all"]}
func={(e)=> setcategory(e.target.value)}
/>

<div className='w-[2%] '>
<Dropdown
title="time frame "
options={["week","day","hour"]}
func={(e)=> setduration(e.target.value)}
/>
</div>
</div>
        
</div>

<InfiniteScroll dataLength={trending.length}
 loader={<h1>DATA IS LODING </h1>}
 next={GetTrending}
 hasMore={hasMore}
 >
<Cards data={trending} title={category}/>
</InfiniteScroll>



    </div>
  ) : (<Loding/>);
}

export default Trending