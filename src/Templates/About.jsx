import React from 'react'
import { Link,Outlet } from 'react-router-dom';

function About() {
    return (


        <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-10">
          <h1 className="text-4xl font-bold mb-4 text-yellow-500">About TMDB</h1>
          <p className="max-w-3xl text-center text-lg text-gray-300">
            The Movie Database (TMDB) is a popular, user-driven database for movies, TV shows, and celebrities.
            It provides an extensive collection of movie and TV data, including cast, crew, trailers, and posters.
            TMDB is powered by an active community that continuously updates and maintains the database, making it
            one of the most reliable sources for entertainment content.
          </p>
          <p className="max-w-3xl text-center text-lg text-gray-300 mt-4">
            Our platform fetches data from TMDB's API to bring you the latest trending movies, popular TV shows,
            and in-depth details about your favorite content. This project is built using React and Redux, integrating
            TMDB's API for dynamic content updates.
          </p>
          <p className="max-w-3xl text-center text-lg text-gray-300 mt-4">
            Visit the official TMDB website: 
            <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline ml-1">
              www.themoviedb.org
            </a>
          </p>
          <br />
          <br />
          <br />
          <h1 className='text-3xl font-bold mb-4 text-yellow-500 rounded-xl bg-blue-100 px-2 py-2 boder-black border-2'>
          <Link to={"/about/thankingyou"}   >  Thankyou     </Link>
          </h1>



    
          <Outlet />





        </div>
      );
}

export default About