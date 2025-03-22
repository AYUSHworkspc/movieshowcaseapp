import React, { useEffect, useState } from 'react'
import Sidenav from '../Templates/Sidenav'
import Topnav from './Topnav'
import axios from '../Utils/axios'
import Header from './Header';
import Horizontalcards from './Horizontalcards';
import Loding from './Loding';
function Home() {
  const[wallpaper,setwallpaper]=useState(null);
  const[trending,settrending]=useState([]);

  const [category,setcategory]=useState("all");


const GetHeaderWallpaper=async()=>{
  try{
    const {data}=await axios.get(`/trending/all/day`)
    console.log(data);
   
    console.log("wallpaper data====>",wallpaper);
    let randomdata=data.results[(Math.random()*data.results.length).toFixed()];
    setwallpaper(randomdata);

  }
  catch (error){
console.log(error);

  }
};



const GetTrending=async()=>{
  try{
    const {data}=await axios.get(`/trending/${category}/day`)
    settrending(data.results);

  }
  catch (error){
console.log(error);

  }
}

useEffect(()=>{
  !wallpaper && GetHeaderWallpaper();
  GetTrending();
},[category])


console.log("trending===>",trending);

  return  wallpaper && trending  ?  ( // agar trending and wallpaper dono aa rahe hain tabhi ye loafd ho
    <>
    <Sidenav/>
    <div className='w-[80%] h-full bg-red-400 overflow-auto overflow-auto'> 
      <Topnav/>
    <Header  data={wallpaper}  />

    <Horizontalcards data={trending} func={(e)=>setcategory(e.target.value)} />
    </div>
   
   
    </>
  ) : (<Loding/>)
}

export default Home