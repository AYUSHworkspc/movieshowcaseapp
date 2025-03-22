import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { asyncloadperson, removeperson } from "../store/actions/personAction";
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import Loding from "./Loding"
import Horizontalcards from './Horizontalcards';
import Dropdown from '../Templates/Dropdown';
import { useState } from 'react';


const PersonDetails = () => {
  const {pathname}=useLocation(); //YAHA PATH NAME MILTA HAIN JO LOCATION DETA HAIN 

  const {id}=useParams();
  const navigate=useNavigate();
 const {info}= useSelector((state)=>state.person)  //redux ka data access 

const dispatch=useDispatch();
const[category,setcategory]=useState("movie");

console.log(info)
  useEffect(()=>{
dispatch(asyncloadperson(id));

return ()=>{
  dispatch(removeperson());
}

  },[id])
  return info ? (
    <div className='px-[10%] w-screen h-[210vh] flex flex-col bg-[rgba(0,0,0,.7)] '>
  {/* navigation part1 */}
<nav className='w-full flex gap-10 text-white h-[10vh]'>
    
      <i onClick={()=>{navigate(-1)}} class="ri-arrow-left-circle-line  hover:text-yellow-900 ">GO BACK </i>
      
      </nav>

<div className='w-full flex '>
{/* part 2== left poster and details */}

<div className='w-[30%] '>
<img  className='h-[40vh] object-cover ' src={`https://image.tmdb.org/t/p/original/${info.detail.backdrop_path || info.detail.profile_path}`} alt="" />
<hr className='mt-10 mb-5 border-none h-[2px] bg-zinc-500' />

{/* social media links---> */}
<div className='flex gap-x-10 text-white text-2xl '>
      <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i class="ri-global-fill "></i></a>
      <a target='_blank' href={`https://www.facebook.com/${info.externalid.facebook_id}`}><i class="ri-facebook-circle-fill"></i></a>
      <a target='_blank' href={`https://www.instagram.com/${info.externalid.instagram_id}`}><i class="ri-instagram-fill"></i></a>
      <a target='_blank' href={`https://www.twitter.com/${info.externalid.twitter_id}`}><i class="ri-twitter-x-fill"></i></a>
       </div>


       {/* personal information */}
       <h1 className='text-2xl font-black text-yellow-200 my-5 '>personal info </h1>
       <h1 className='text-2xl font-black text-orange-700 my-5 '> {info.detail.name}.</h1>
       <h1 className='text-2xl font-black text-yellow-400 my-2 '>known for.. <span className='text-blue-500 text-3xl'> {info.detail.known_for_department }</span> </h1>
       <h1 className='text-2xl font-black text-pink-400 my-2 '> GENDER...  <span className='text-white'>{info.detail.gender ===2 ? "male" : "feemale" }</span> </h1>
       <h1 className='text-2xl font-black text-red-700 my-2 '>BIRTHDAY... <span className='text-yellow-500'>{info.detail.birthday }</span></h1>
       <h1 className='text-xl font-black text-white my-2 '> LAST DAY ON EARTH ...  <br /> <span className='text-2xl text-orange-300' >{info.detail.deathday   ? info.detail.deathday : "He is ALIVE " }</span>  </h1>
       <h1 className='text-xl font-black text-white my-2 '> place of birth------ <br /> <span className='text-xl text-pink-300' >{info.detail.place_of_birth}</span>  </h1>
       <h1 className='text-xl font-black text-white my-2 '>Also Known As- <br /> <span className='text-xl text-pink-300' >{info.detail.also_known_as.join(",")}</span>  </h1>
</div>

{/* part3 ======> details and information  */}

<div className='w-[80%] ml-[5%]'>
<h1 className='text-2xl font-black text-yellow-200 my-5 '>personal info </h1>
<h1 className='text-7xl font-black text-white my-5 '> {info.detail.name}.</h1>
<h1 className='text-2xl font-black text-yellow-200 my-5 '>Over View...... <p className='text-xl text-white'>{info.detail.biography}</p> </h1>
<h1 className='text-2xl font-black text-white my-5 '> Work & summary</h1>
<Horizontalcards data={info.combinedCredits.cast}/>

<div className='flex w-full justify-between '>
<h1 className='text-2xl font-black text-white my-5 '> Acting</h1>
<Dropdown title="category" options={["tv","movie"]} func={(e)=>setcategory(e.target.value)}/>

</div>

<div className=' scroll  list-disc text-blue-900 text-2xl font-bold w-full h-[50vh] overflow-x-hidden overflow-y-scroll shadow-2xl shadow-yellow-500 bg-white shadow-lg'>

  {info[category+"Credits"].cast.map((c,i)=><li key={i} >
<Link to={`/${category}/details/${c.id}`}   className=''>

<span>{c.name || c.title|| c.original_name || c.original_title}</span>
<span className='block'>{c.character}</span>

</Link>
</li>)}

</div>

</div>

</div>
    </div>
  )    : <Loding/>
}

export default PersonDetails