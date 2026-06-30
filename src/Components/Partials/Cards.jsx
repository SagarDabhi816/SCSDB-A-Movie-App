import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  return (
    <div className="flex flex-wrap w-full bg-[#1F1E24] ">
      {data.map((c, i) => (
        <Link
          to={`/${c.media_type || title}/details/${c.id}`}
          key={i}
          className="group relative w-[35vh] mr-[3%] mb-10 ml-7"
        >
          <div className="relative overflow-hidden rounded-xl">
            <img
              className="h-[50vh] object-center object-cover rounded shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              src={`https://image.tmdb.org/t/p/w300/${
                c.poster_path || c.backdrop_path || c.profile_path
              }`}
              alt=""
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"></div>
          </div>

          <h1 className="text-xl text-zinc-200 mt-3 font-semibold line-clamp-1">
            {" "}
            {c.name || c.title || c.original_name || c.original_title}
          </h1>

          <p className="text-zinc-500 text-sm mt-1">
            {(c.release_date || c.first_air_date || "").slice(0, 4)}
          </p>

       
          {c.vote_average && (
            <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm text-yellow-400 text-sm font-bold px-3 py-2 rounded-full shadow-lg border border-zinc-700">
              ⭐ {c.vote_average.toFixed(1)}
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Cards;
