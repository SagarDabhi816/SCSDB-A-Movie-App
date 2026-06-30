import React from "react";
import { Link, useLocation } from "react-router-dom";
import Trailer from "./Trailer";

const Header = ({ data }) => {
  const {pathname} = useLocation()
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.7),rgba(0,0,0,.7),rgba(0,0,0,.7)),url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat:"no-repeat"
      }}
      className="w-full h-[50vh] flex flex-col items-start justify-end p-[6.5%] gap-6 sm:gap-0"
    >
      <h1 className="w-[100%] sm:w-[70%] text-white text-3xl font-black">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className="hidden sm:block w-[100%] sm:w-[70%] text-white mt-3 mb-3">
        {data.overview.slice(0, 200)}{" "}
        <Link to={`${data.media_type}/details/${data.id}`} className="text-sky-400">...More</Link>
      </p>
      <p className="text-white">
        {" "}
        <i className="text-yellow-500 ri-megaphone-fill  ri-xl pr-3"></i>
        {data.release_date || `Coming Soon`} 
        <i className="ml-5 text-yellow-500 ri-album-fill ri-xl  pr-3"></i>
        {data.media_type.toUpperCase()}
      </p>
      <Link to={`/${data.media_type}/details/${data.id}/trailer`} className="mt-5 p-4 text-white bg-[#6556CD] rounded-lg">Watch Trailer</Link>
    </div>
  );
};

export default Header;
