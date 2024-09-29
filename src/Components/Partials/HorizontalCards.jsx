import React from "react";
import { Link } from "react-router-dom";
import Noimg from "../../../public/download.png"


const HorizontalCards = ({ data ,title }) => {
  return (
      <div className="w-full sm:flex overflow-y-hidden mb-5 sm:m-5 sm:p-10 sm:p-0"> 
        {data.length >0 ? data.map((d, i) => (
          <Link to={`/${d.media_type || title}/details/${d.id}`} key={i} className="sm:min-w-[17%] mr-5 mb-5 bg-zinc-900 rounded-md ">
            <img
              className="w-full h-[35vh] object-top object-cover"
              src={
                d.backdrop_path
                  ? `https://image.tmdb.org/t/p/original${d.backdrop_path}`
                  : (d.poster_path
                      ? `https://image.tmdb.org/t/p/original${d.poster_path}`
                      : Noimg) // Use Noimg as fallback
              }/>
            <div className="p-3 text-white h-[55%]">
              <h1 className="text-lg font-black">
                {d.name || d.title || d.original_name || d.original_title}
              </h1>
              <p className="mt-2 pb-10 text-md">
                {d.overview.slice(0,100)}...
                <span className="text-sky-400">More</span>
              </p>
            </div>
          </Link>
        )) : <h1 className="text-white font-black text-clip text-4xl mt-5 ">Nothing To Show</h1>}
      </div>
  );
};

export default HorizontalCards;
