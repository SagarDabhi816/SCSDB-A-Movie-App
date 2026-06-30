import axios from "../Utils/axios";
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loading from "./Loading";
import Topnav from "./Partials/Topnav";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./Partials/Cards";


const person = () => {
    const navigate = useNavigate();
    const [catagory, setcatagory] = useState("popular");
    const [person, setperson] = useState([]);
    const [page, setpage] = useState(1)
    const [hasmore, sethasmore] = useState(true)
    document.title  = "SSCDB || People "

    const Getperson = async () => {
        try {
            const { data } = await axios.get(`/person/${catagory}?page=${page}`);
            if(data.results.length > 0){
              setperson((prev)=> [...prev,...data.results])
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
        if(person.length === 0){
          Getperson();
        }
        else{
          setpage(1)
          setperson([])
          Getperson();
        }
      }

      useEffect(() => {
        Refreshhandler();  
      }, [catagory]);

  return person.length > 0 ? (
        <div className="w-screen h-screen">
          <div className="w-full flex items-center p-[2%]">
          <h1 className="text-2xl text-zinc-400  font-semibold flex hover:text-[#6556CD]" onClick={() => navigate(-1)}>
                <i
                  className="ri-arrow-left-line cursor-pointer mr-2 ri-2x" 
                ></i>      
              </h1><h4 className="text-4xl text-zinc-400 cursor-pointer" onClick={() => navigate(-1)}>Home</h4>
            <Topnav/> 
          </div>
          <InfiniteScroll
            loader={<h1>Loading..</h1>}
            dataLength={person.length > 0 ? person.length : 1}
            hasMore={hasmore}
            next={Getperson}
          >
            <Cards data={person} title="person" />
          </InfiniteScroll>
        </div>
      ) : (
        <Loading/>
      );
  
}

export default person
