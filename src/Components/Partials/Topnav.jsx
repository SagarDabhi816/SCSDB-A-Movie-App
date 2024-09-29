import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../Utils/axios";
import noImage from "../../Utils/noimg.png"

const Topnav = () => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);
  const Getsearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
      
    } catch (error) {
      console.log("Error" + error);
    }
  };
  
  useEffect(() => {
    Getsearches();
  }, [query]);

  return (
    <div className="h-[9vh] w-full flex justify-start items-center sm:pl-[15%] z-[99999] relative">
      <i className="text-4xl ri-search-line text-zinc-400 cursor-pointe hidden sm:block"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[100%] sm:mx-10 p-5 text-xl outline-none border-none bg-transparent text-zinc-200"
        type="text"
        placeholder="search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="text-2xl ri-close-line text-zinc-400 cursor-pointer"
        ></i>
      )}

        <div className="fixed top-[10%] sm:top-[15%]  flex items-center justify-center z-10 left-0 md:left-[30%] mb-44">
    <div className=" w-[80%] sm:w-[100%] max-h-[50vh] bg-zinc-200 overflow-auto rounded shadow-lg">
      {searches.map((s, i) => (
        <Link 
          to={`/${s.media_type}/details/${s.id}`} 
          key={i} 
          className="hover:text-black hover:bg-zinc-400 duration-300 font-semibold text-zinc-600 w-full p-7 flex items-center border-b-2 border-zinc-300"
        >
          <img 
            className="w-[11vh] h-[11vh] object-cover rounded mr-5" 
            src={s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}` : noImage} 
            alt="" 
          />
          <span>{s.name || s.title || s.original_name || s.original_title}</span>
        </Link>
      ))}
    </div>
</div>

    </div>
  );
};

export default Topnav;
