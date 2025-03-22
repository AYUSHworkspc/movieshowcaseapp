import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Loding from "./Components/Loding"
import Trending from "./Components/Trending"
import Popular from "./Components/Popular"
import Movie from "./Components/Movie"
import Tvshows from "./Components/Tvshows"
import People from "./Components/People"
import Moviedetails from "./Components/Moviedetails"
import TvDetails from "./Components/TvDetails"
import PersonDetails from "./Components/PersonDetails"
import Trailer from "./Templates/Trailer"
import Notfound from "./Components/Notfound"
import About from "./Templates/About"
import Contact from "./Templates/Contact"
import Thankingyou from "./Templates/Thankingyou"


function App() {
  
  return (
    <>
      
        <div className="w-screen h-screen flex ">
        
        <Routes>
          <Route  path="/" element={<Home/>}   />
          <Route  path="/trending"  element={<Trending/>} />
          <Route  path="/popular" element={<Popular/>}   />
          <Route path="/movie" element={<Movie/>} />



          <Route  path="/movie/details/:id" element={<Moviedetails/>} > 
          <Route  path="/movie/details/:id/trailer"  element={<Trailer/>} />
            </Route>

          
          <Route path="/tv" element={<Tvshows/>}   /> 


          <Route path="/tv/details/:id"  element={<TvDetails/>}    >
          
          <Route  path="/tv/details/:id/trailer"  element={<Trailer/>} />
          </Route>
          
          <Route path="/person" element={<People/>}   /> 
          
          <Route  path="/person/details/:id" element={<PersonDetails/>} />

          <Route   path="/about" element={<About/>}   >
          <Route  path="/about/thankingyou"   element={<Thankingyou/>} />
          </Route>
          
          
          




          <Route   path="/contact" element={<Contact/>}   />
            
        </Routes>


        </div>
    </>
  )
}

export default App
