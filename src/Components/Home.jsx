import React, { useState, useEffect } from "react";
import axios from "../Utils/axios";
import Sidenav from "./Partials/Sidenav";
import Topnav from "./Partials/Topnav";
import Header from "./Partials/Header";
import HorizontalCards from "./Partials/HorizontalCards";
import Dropdown from  "./Partials/Dropdown";
import Loading from "./Loading";

function Home() {
  document.title = "SCSDB | Home";
  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
   const [catagory, setcatagory] = useState("all")

  const Getheaderwallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomdata =
        data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomdata);
    } catch (error) {
      console.log("Error" + error);
    }
  }; 

  const Gettrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${catagory}/day`);
      settrending(data.results);
    } catch (error) {
      console.log("Error" + error);
    }
  };
  useEffect(() => { 
    Gettrending();
    !wallpaper && Getheaderwallpaper();
  }, [catagory]);

  return wallpaper && trending ? (
    <>
      <Sidenav />
      <div className="w-[100%] h-full overflow-auto overflow-x-hidden  pr-12 sm:pr-0">
        <Topnav />
        <Header data={wallpaper} />
        <div className="sm:p-7 py-7  flex items-center justify-between gap-5 ">
          <h1 className="text-3xl text-zinc-400 font-semibold">Trending</h1>
          <Dropdown title="Filter" options={["tv","movie","all"]} func={(e)=>setcatagory(e.target.value)}/>
        </div>
        <HorizontalCards data={trending}/>
      </div> 
    </> 
  ) : (
    <Loading/>
  );
}

export default Home;
