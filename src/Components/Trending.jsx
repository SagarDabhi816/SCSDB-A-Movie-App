      import React, { useState, useEffect } from "react";
      import { useNavigate } from "react-router-dom";
      import Topnav from "./Partials/Topnav";
      import Dropdown from "./Partials/Dropdown";
      import axios from "../Utils/axios";
      import Cards from "./Partials/Cards";
      import Loading from "./Loading";
      import InfiniteScroll from "react-infinite-scroll-component";

      const Trending = () => {
        const navigate = useNavigate();
        const [catagory, setcatagory] = useState("all");
        const [duration, setduration] = useState("day");
        const [trending, settrending] = useState([]);
        const [page, setpage] = useState(1)
        const [hasmore, sethasmore] = useState(true)
        document.title  = "SSCDB || Trending "
        
        const Gettrending = async () => {
          try {
              const { data } = await axios.get(`/trending/${catagory}/${duration}?page=${page}`);
              if(data.results.length > 0){
                settrending((prev)=> [...prev,...data.results])
                setpage(page + 1);
                
              }
              else{
                sethasmore(false)
              }     
          } catch (error) {
            console.log("Error" + error);
          }
        };  

        const Refreshhandler = () => {
          if(trending.length === 0){
            Gettrending();
          }
          else{
            setpage(1)
            settrending([])
            Gettrending();
          }
        }

        useEffect(() => {
          Refreshhandler();  
        }, [catagory, duration]);

        return trending.length > 0 ? (
          <div className="w-screen h-screen">
            <div className="w-full flex items-center p-[2%]">
              <h1 className="text-2xl text-zinc-400  font-semibold flex hover:text-[#6556CD]" onClick={() => navigate(-1)}>
                <i
                  className="ri-arrow-left-line cursor-pointer mr-2 ri-2x" 
                ></i>
              
              </h1><h4 className=" hidden sm:block text-4xl text-zinc-400 cursor-pointer" onClick={() => navigate(-1)}>Home</h4>
              <Topnav/> 
           
              <Dropdown
                title="Catagory"
                options={["movie", "tv", "all"]}
                func={(e) => setcatagory(e.target.value)}
              />
              <div className="w-[2%]"></div>
              <Dropdown
                title="Duration"
                options={["week", "day"]}
                func={(e) => setduration(e.target.value)}
              />
           
            </div>
            <InfiniteScroll
              loader={<h1>Loading..</h1>}
              dataLength={trending.length > 0 ? trending.length : 1}
              hasMore={hasmore}
              next={Gettrending}
            >
              <Cards data={trending} title={catagory} />
            </InfiniteScroll>
          </div>
        ) : (
          <Loading />
        );
      };

      export default Trending;
