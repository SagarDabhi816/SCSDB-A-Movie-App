import axios from "axios";


    const instance = axios.create({
        baseURL:"https://api.themoviedb.org/3/",
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWNiMjI1NDA1NWM2NWYyNGI5MGRhYzE5ZGRkZjUyMCIsIm5iZiI6MTcyNTQ2MDYzOC4wODU3MDQsInN1YiI6IjY2ZDg2YTY4ZDdjMTllYTg2NmI4YjRjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n2oFk4LA_EvPtvo6eMq9JFBmx_WWyCEo1IfdvTbHDwo'
  }
    })

    export default instance