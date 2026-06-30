import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadtvs, removetv } from "../Store/actions/Tvactions";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import HorizontalCards from "./Partials/HorizontalCards";

const Tvdetails = () => {
  const {pathname} = useLocation()
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.tv);
  const dispatch = useDispatch();
  
 
  useEffect(() => {
    dispatch(asyncloadtvs(id));
    return () => {
      dispatch(removetv());
    };
  }, [id]);

  return info ? (
    <div
      className="relative w-screen h-max px-[5%]"
      style={{
        background: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.4),rgba(0,0,0,.5),rgba(0,0,0,.5)),url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Part 1 nav */}
      <nav className="h-[10vh] w-full text-zinc-100 flex gap-10 items-center "> 
        <Link
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line cursor-pointer mr-2 ri-3x  text-zinc-200 hover:text-[#6556CD]"
        ></Link>
        <a href={info.detail.homepage} target="_blank">
          <i className="ri-external-link-fill ri-2x  text-zinc-200 hover:text-[#6556CD]"></i>
        </a>
        <a
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
          target="_blank" title="Wikipedia"
          className="hover:text-[#6556CD] font-serif text-3xl"
        >
          W
        </a>
        <a
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
          className="text-3xl hover:text-[#6556CD]" title="IMDB"
          target="_blank"
        >
          IMDB
        </a>
      </nav>

      {/* Part 2 Middle Data */}
      <div className="w-full flex flex-col sm:flex-row">
        <img
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] mx-auto h-[50vh] w-[60vw] sm:w-[25vw] objec-contain object-center sm:ml-10"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.profile_path
          })`}
        />

        <div className="content sm:ml-16 flex flex-col gap-3 text-white w-full mt-10">

          <h1 className="text-6xl font-black">
            {info.detail.name ||
              info.detail.title ||
              info.detail.original_name ||
              info.detail.original_title}
            <small className="ml-5 text-3xl font-bold ">
              ({info.detail.first_air_date.split("-")[0]})
            </small>
          </h1>

          <div className="flex items-center gap-x-5">
            <span className="hidden md:block mt-3 text-2xl  font-semibold rounded-full w-[5vw] h-[5vh]  items-center justify-center">
              ⭐{Math.floor(info.detail.vote_average)}/10
            </span>
            <h1 className="mt-3 text-xl">{info.detail.genres.map((g)=>g.name).join(", ")}</h1>
            <h1 className="mt-3 text-xl">Seasons : {info.detail.number_of_seasons}</h1>
            <div className="flex gap-2">
            <h1 className="mt-3 text-xl">From: {info.detail.first_air_date}</h1>
            <h1 className="mt-3 text-xl">To : {info.detail.last_air_date}</h1>
            </div>
            
          </div>

          <h1 className="text-3xl">{info.detail.tagline}</h1>

          <p className="text-xl hidden sm:block ">Overview : {info.detail.overview}</p>

          <h1>Available in: {info.translations.join(", ")}</h1>

        <Link to={`${pathname}/trailer`} className=" hover:bg-yellow-500 hover:text-black bg-[#6556CD] w-fit p-3 rounded-md text-lg font-bold px-4 ">
         <i className="ri-play-fill"></i> Watch Trailer
         </Link>

        </div>
      </div>

        {/* Part 3 Available on */}
      <div className="mt-5 ml-5 flex flex-col gap-4 mb-10">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex gap-x-3 items-center text-zinc-100">
            <h1>Available On Platform</h1>
            {info.watchproviders.flatrate.map((w,i) => (
              <img key={i}
                title={w.provider_name}
                className="w-[7vh] h-[7vh] objec-contain object-center rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path})`}
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.rent && (
          <div className="flex gap-x-3 items-center text-zinc-100">
            <h1>Available On Rent</h1>
            {info.watchproviders.rent.map((w,i) => (
              <img key={i}
                title={w.provider_name}
                className="w-[7vh] h-[7vh] objec-contain object-center rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path})`}
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.buy && (
          <div className="flex gap-x-3 items-center text-zinc-100">
            <h1>Available To buy</h1>
            {info.watchproviders.buy.map((w,i) => (
              <img key={i}
                title={w.provider_name}
                className="w-[7vh] h-[7vh] objec-contain object-center rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path})`}
              />
            ))}
          </div>
        )}
      </div><hr className="h-[3px] bg-zinc-300"/>

         {/* Part 4 Recommendations */}
         <h1 className="mt-10 text-3xl font-bold text-white">Seasons</h1>
        {<HorizontalCards data={info.detail.seasons}/>}

      {/* Part 4 Recommendations */}
        <h1 className="mt-10 text-3xl font-bold text-white">Recommendations & Similar</h1>
        <HorizontalCards data={info.recommendations.length >0 
        ? info.recommendations : 
        info.similar}/>
        
          <Outlet/>
    </div>
  ) : (
    <Loading />
  );
};

export default Tvdetails
