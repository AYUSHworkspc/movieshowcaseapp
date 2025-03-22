import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from '../Utils/axios';
import InfiniteScroll from "react-infinite-scroll-component";
import Loding from "./Loding";
import Dropdown from "../Templates/Dropdown";
import Topnav from "./Topnav";
import Cards from "../Templates/Cards";

const Tvshows = () => {
  
    const navigate=useNavigate();
    const [category,setcategory]=useState("airing_today");
    const [duration,setduration]=useState("day");
    const [tv,settv]=useState([]);
    const [page,setpage]=useState(1);
    const[hasMore,sethasMore]=useState(true);
    

    const GetTv=async()=>{
        try{
          const {data}=await axios.get(`/tv/${category}?page=${page}`)
      
          if(data.results.length>0){
            settv((prev)=>[...prev, ...data.results])
            setpage(page+1)
          } else{
    sethasMore(false)
          }
        
          //settv(data.results);
          
          console.log(data)
      
        }
        catch (error){
      console.log(error);
      
        }
      };
    
    console.log(tv);
    
    const refreshHandler=async()=>{
      if(tv.length===0){
        GetTv();
      }
      else{
      setpage(1)
      settv([])
      GetTv()
      }
    }
    
    
    
    useEffect(()=>{
        refreshHandler();
    },[category])
    



  return tv.length>0  ? (
    <div className='w-screen h-screen p-10   '>

<div className='w-full  flex items-center justify-center   '>
    
    <h1 className='text-2xl text-yellow-900 font-semibold'>
        
    <i onClick={()=>{navigate(-1)}} class="ri-arrow-left-circle-line  hover:text-yellow-900 "></i>
         tv    {category}  </h1>

<div className='flex  items-center justify-between'> 
    
    
    
    <Topnav/>

<Dropdown
title="category"
options={["top_rated","popular","on_the_air","airing_today"]}
func={(e)=> setcategory(e.target.value)}
/>

<div className='w-[2%] '>

</div>
</div>
        
</div>

<InfiniteScroll dataLength={tv.length}
 loader={<h1>DATA IS LODING </h1>}
 next={GetTv}
 hasMore={hasMore}
 >
<Cards data={tv} title="tv"/>
</InfiniteScroll>



    </div>
  ) : (<Loding/>);
}


export default Tvshows