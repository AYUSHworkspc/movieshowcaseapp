import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { asyncloadmovie, removemovie } from '../store/actions/movieActions';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import Horizontalcards from"./Horizontalcards";
import Loding from './Loding';

const Moviedetails = () => {
const {pathname}=useLocation(); //YAHA PATH NAME MILTA HAIN JO LOCATION DETA HAIN 

  const {id}=useParams();
  const navigate=useNavigate();
 const {info}= useSelector((state)=>state.movie)  //redux ka data access 

const dispatch=useDispatch();

  useEffect(()=>{
dispatch(asyncloadmovie(id));

return ()=>{
  dispatch(removemovie());
}

  },[id])



  return info ? (
    <div style={{
      background:`linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.5),rgba(0,0,0,.6)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,

      backgroundPosition:"center",
      backgroundSize:"cover",
      backgroundPosition:"object-fit-cover",
      

  }} 
   className='w-screen h-[120vh] px-[10%] relative '>

{/* navigation part1 */}

<nav className='w-full flex gap-10 text-white '>
      
<i onClick={()=>{navigate(-1)}} class="ri-arrow-left-circle-line  hover:text-yellow-900 ">GO BACK </i>

<a target='_blank' href={info.detail.homepage}><i class="ri-external-link-fill"></i></a>
<a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i class="ri-global-fill"></i></a>
<a target='_blank' href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}>imdb</a>



</nav>

{/* navigation part2 -- poster and details  */}

<div className='w-full flex '>
<img  className='h-[35vh] object-cover ' src={`https://image.tmdb.org/t/p/original/${info.detail.backdrop_path || info.detail.poster_path}`} alt="" />
<div className='mt-70 ml-[-400px] flex  gap-2 max-w-[100px]' >
  { info.watchproviders && info.watchproviders.buy && info.watchproviders.buy.map((w,e)=>(
  <img title={w.provider_name} key={e} className='w-[5vh] h-[5vh] object-cover  rounded-md'  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
/>))}


{ info.watchproviders && info.watchproviders.rent && info.watchproviders.rent.map((w,e)=>(
  <img title={w.provider_name} key={e} className='w-[5vh] h-[5vh] object-cover  rounded-md'  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
/>
))}

</div>
<div className='content ml-[25%]'>
  <h1 className='text-5xl font-black text-white'>
    {info.detail.original_title || info.detail.title|| info.detail.original_title }

    <span className='text-xl font-bold text-zinc-200'>{info.detail.release_date.split("-")[0]}</span>
  </h1>


<div className='flex text-zinc-500 items-center gap-x-4 '>
  {info.detail.vote_average && (<div className='flex items-center justify-center bg-yellow-500 rounded-full w-[20vh] h-[5vh]'>
  <h1 className='text-blue-900 font-bold '>review {info.detail.vote_average}</h1> 
  </div>) }

  <h1 className='text-white'>user score</h1>
  <h1  className='text-white'>{info.detail.release_date}</h1>
  <h1 className='text-yellow-200 font-bold'>   <span className='text-blue-300'>movie type=</span>  {info.detail.genres.map((e)=>e.name).join(",")}</h1>
  <h1 className='text-orange-500 font-bold'> <span> Movie Duration</span>   {info.detail.runtime}</h1>
  </div>


<h1 className='text-white'>{info.detail.tagline}</h1>

<h1 className='text-yellow-500 font-bold text-2xl '  >overview</h1>
<p className='text-white mt-2 p-auto'>{info.detail.overview}</p>






<Link className='text-yellow-700 font-black px-5 py-5 bg-white mt-5 flex max-w-35 rounded-3xl' to={`${pathname}/trailer`}> 
<i class="ri-movie-fill text-blue-500 mr-3 text-3xl "></i>
Play Trailer</Link>

</div>



</div>
{/* part 4 recommendation and similar stuff jo ki Horizontal cards se milega   */}

<div className='mt-25'>
<h1 className='text-yellow-500 font-bold text-3xl  mb-5 ml-70'>recommendation and similar stuiff </h1>
<Horizontalcards  data={info.recommendation.length>0  ? info.recommendation : info.similar} />
</div>
<Outlet/>
    </div>
  )  : <Loding/>
}

export default Moviedetails