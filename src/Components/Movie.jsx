import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from '../Utils/axios';
import InfiniteScroll from "react-infinite-scroll-component";
import Loding from "./Loding";
import Dropdown from "../Templates/Dropdown";
import Topnav from "./Topnav";
import Cards from "../Templates/Cards";

const Movie = () => {



    const navigate=useNavigate();
    const [category,setcategory]=useState("now_playing");
    const [duration,setduration]=useState("day");
    const [movie,setmovie]=useState([]);
    const [page,setpage]=useState(1);
    const[hasMore,sethasMore]=useState(true);
    

    const GetMovie=async()=>{
        try{
          const {data}=await axios.get(`/movie/${category}?page=${page}`)
      
          if(data.results.length>0){
            setmovie((prev)=>[...prev, ...data.results])
            setpage(page+1)
          } else{
    sethasMore(false)
          }
        
          //setmovie(data.results);
          
          console.log(data)
      
        }
        catch (error){
      console.log(error);
      
        }
      };
    
    console.log(movie);
    
    const refreshHandler=async()=>{
      if(movie.length===0){
        GetMovie();
      }
      else{
      setpage(1)
      setmovie([])
      GetMovie()
      }
    }
    
    
    
    useEffect(()=>{
        refreshHandler();
    },[category])
    



  return movie.length>0  ? (
    <div className='w-screen h-screen p-10   '>

<div className='w-full  flex items-center justify-center   '>
    
    <h1 className='text-2xl text-yellow-900 font-semibold'>
        
    <i onClick={()=>{navigate(-1)}} class="ri-arrow-left-circle-line  hover:text-yellow-900 "></i>
         movie    {category}  </h1>

<div className='flex  items-center justify-between'> 
    
    
    
    <Topnav/>

<Dropdown
title="category"
options={["popular","top_rated","upcoming","now_playing"]}
func={(e)=> setcategory(e.target.value)}
/>

<div className='w-[2%] '>

</div>
</div>
        
</div>

<InfiniteScroll dataLength={movie.length}
 loader={<h1>DATA IS LODING </h1>}
 next={GetMovie}
 hasMore={hasMore}
 >
<Cards data={movie} title="movie"/>
</InfiniteScroll>



    </div>
  ) : (<Loding/>);
}

export default Movie