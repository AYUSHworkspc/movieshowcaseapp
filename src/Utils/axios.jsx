import axios from "axios";
const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3/",    // global url banana hain 
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTYwZDgyMTgzNzBjNWNmNGM3NTM4YmUxODAzYTY4NSIsIm5iZiI6MTc0MDM2OTU3Mi43NzYsInN1YiI6IjY3YmJlZWE0MzNkNzQ5Y2MzOWJlYjM1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.POUky-KqJ2S1RBh4EQsYhv89Hme4vDpYMm9ab9cbHgs'
      }
})


export default instance;