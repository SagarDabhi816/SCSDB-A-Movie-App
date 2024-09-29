import axios from "../Utils/axios";
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loading from "./Loading";
import Topnav from "./Partials/Topnav";
import Dropdown from "./Partials/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./Partials/Cards";


const movie = () => {
    const navigate = useNavigate();
    const [catagory, setcatagory] = useState("now_playing");
    const [movie, setmovie] = useState([]);
    const [page, setpage] = useState(1)
    const [hasmore, sethasmore] = useState(true)
    document.title  = "SSCDB || Movie "

    const Getmovie = async () => {
        try {
            const { data } = await axios.get(`/movie/${catagory}?page=${page}`);
            if(data.results.length > 0){
              setmovie((prev)=> [...prev,...data.results])
              setpage(page + 1)
            }
            else{
              sethasmore(false)
            }     
        } catch (error) {
          console.log("Error" + error);
        }
      };  

      const Refreshhandler = () => {
        if(movie.length === 0){
          Getmovie();
        }
        else{
          setpage(1)
          setmovie([])
          Getmovie();
        }
      }

      useEffect(() => {
        Refreshhandler();  
      }, [catagory]);

  return movie.length > 0 ? (
        <div className="w-screen h-screen">
          <div className="w-full flex items-center p-[2%]">
          <h1 className="text-2xl text-zinc-400  font-semibold flex hover:text-[#6556CD]" onClick={() => navigate(-1)}>
                <i
                  className="ri-arrow-left-line cursor-pointer mr-2 ri-2x" 
                ></i>
              
              </h1><h4 className="hidden sm:block text-4xl text-zinc-400 cursor-pointer" onClick={() => navigate(-1)}>Home</h4>
            <Topnav/> 
            <Dropdown
              title="Catagory"
              options={["popular","top_rated","upcoming","now_playing"]}
              func={(e) => setcatagory(e.target.value)}
            />
          </div>
          <InfiniteScroll
            loader={<h1>Loading..</h1>}
            dataLength={movie.length > 0 ? movie.length : 1}
            hasMore={hasmore}
            next={Getmovie}
          >
            <Cards data={movie} title="Movie" />
          </InfiniteScroll>
        </div>
      ) : (
        <Loading/>
      );
  
}

export default movie
