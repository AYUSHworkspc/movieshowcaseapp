import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from '../Utils/axios';
import InfiniteScroll from "react-infinite-scroll-component";
import Loding from "./Loding";
import Dropdown from "../Templates/Dropdown";
import Topnav from "./Topnav";
import Cards from "../Templates/Cards";

function Popular() {
    

    const navigate=useNavigate();
    const [category,setcategory]=useState("movie");
    const [duration,setduration]=useState("day");
    const [popular,setpopular]=useState([]);
    const [page,setpage]=useState(1);
    const[hasMore,sethasMore]=useState(true);
    

    const GetPopular=async()=>{
        try{
          const {data}=await axios.get(`${category}/popular?page=${page}`)
      
          if(data.results.length>0){
            setpopular((prev)=>[...prev, ...data.results])
            setpage(page+1)
          } else{
    sethasMore(false)
          }
        
          //setPopular(data.results);
          
          console.log(data)
      
        }
        catch (error){
      console.log(error);
      
        }
      };
    
    console.log(popular);
    
    const refreshHandler=async()=>{
      if(popular.length===0){
        GetPopular();
      }
      else{
      setpage(1)
      setpopular([])
      GetPopular()
      }
    }
    
    
    
    useEffect(()=>{
        refreshHandler();
    },[category])
    

  return popular.length>0  ? (
    <div className='w-screen h-screen p-10   '>

<div className='w-full  flex items-center justify-center   '>
    
    <h1 className='text-2xl text-yellow-900 font-semibold'>
        
    <i onClick={()=>{navigate(-1)}} class="ri-arrow-left-circle-line  hover:text-yellow-900 "></i>
         popular </h1>

<div className='flex  items-center justify-between'> 
    
    
    
    <Topnav/>

<Dropdown
title="category"
options={["movie","tv"]}
func={(e)=> setcategory(e.target.value)}
/>

<div className='w-[2%] '>

</div>
</div>
        
</div>

<InfiniteScroll dataLength={popular.length}
 loader={<h1>DATA IS LODING </h1>}
 next={GetPopular}
 hasMore={hasMore}
 >
<Cards data={popular} title={category}/>
</InfiniteScroll>



    </div>
  ) : (<Loding/>);
}

export default Popular