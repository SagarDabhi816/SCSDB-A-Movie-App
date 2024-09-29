import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../Notfound"

const Trailer = () => {

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const catagory = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[catagory].info?.videos);
  ytvideo && ytvideo.name && (document.title = "SCSDB | " + ytvideo.name);
  

  return (
    <div className="bg-[rgba(0,0,0,.9)] absolute z-[100] top-[0.5%] left-[5%] w-[90vw] sm:top-0 sm:left-0 sm:w-screen sm:h-screen flex items-center justify-center">
      <Link
        onClick={() => navigate(-1)}
        className="absolute top-0 left-10 ri-close-fill cursor-pointer ri-5x text-zinc-200 hover:text-[#6556CD]"
      ></Link>
      {ytvideo ? (
        <ReactPlayer controls
          height={580}
          width={1300}
          url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
        />
      ) : (
        <Loading/>
      )}
    </div>
  );
};

export default Trailer;
