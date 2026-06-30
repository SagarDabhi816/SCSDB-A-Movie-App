import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data ,title }) => {  
  return (
    <div className="flex flex-wrap w-full bg-[#1F1E24] p-10 sm:p-8  md:p-12">
      {data.map((c , i) => (
        <Link to={`/${c.media_type || title}/details/${c.id}`}
         key={i} 
         className="relative w-[35vh] mr-[3%] mb-10 ml-7"
        >
          <img
            className="h-[50vh] object-center object-cover rounded shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
            src={`https://image.tmdb.org/t/p/original/${
              c.poster_path || c.backdrop_path || c.profile_path
            }`}
            alt=""
          />
          <h1 className="text-2xl text-zinc-300 mt-3 font-semibold">
            {" "}
            {c.name || c.title || c.original_name || c.original_title}
          </h1>
          
          {c.vote_average && <div className="absolute right-[-10%] bottom-[90%] text-2xl text-black font-semibold bg-yellow-300 rounded-full w-[15vw] lg:w-[5vw] h-[5vh] flex items-center justify-center">
            {Math.floor(c.vote_average)}/10
          </div>}
        </Link>
      ))}
    </div>
  );
};

export default Cards;
