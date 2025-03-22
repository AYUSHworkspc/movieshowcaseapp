import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from '../Utils/axios';
import InfiniteScroll from "react-infinite-scroll-component";
import Loding from "./Loding";
import Dropdown from "../Templates/Dropdown";
import Topnav from "./Topnav";
import Cards from "../Templates/Cards";

const People = () => {

    const navigate=useNavigate();
    const [category,setcategory]=useState("popular");
    const [duration,setduration]=useState("day");
    const [person,setperson]=useState([]);
    const [page,setpage]=useState(1);
    const[hasMore,sethasMore]=useState(true);
    

    const GetPerson=async()=>{
        try{
          const {data}=await axios.get(`/person/${category}?page=${page}`)
      
          if(data.results.length>0){
            setperson((prev)=>[...prev, ...data.results])
            setpage(page+1)
          } else{
    sethasMore(false)
          }
        
          //setperson(data.results);
          
          console.log(data)
      
        }
        catch (error){
      console.log(error);
      
        }
      };
    
    console.log(person);
    
    const refreshHandler=async()=>{
      if(person.length===0){
        GetPerson();
      }
      else{
      setpage(1)
      setperson([])
      GetPerson()
      }
    }
    
    
    
    useEffect(()=>{
        refreshHandler();
    },[category])
    



  return person.length>0  ? (
    <div className='w-screen h-screen p-10   '>

<div className='w-full  flex items-center justify-center   '>
    
    <h1 className='text-2xl text-yellow-900 font-semibold'>
        
    <i onClick={()=>{navigate(-1)}} class="ri-arrow-left-circle-line  hover:text-yellow-900 "></i>
         person    {category}  </h1>

<div className='flex  items-center justify-between'> 
    
    
    
    <Topnav/>



<div className='w-[2%] '>

</div>
</div>
        
</div>

<InfiniteScroll dataLength={person.length}
 loader={<h1>DATA IS LODING </h1>}
 next={GetPerson}
 hasMore={hasMore}
 >
<Cards data={person} title="person"/>
</InfiniteScroll>



    </div>
  ) : (<Loding/>);
}

export default People