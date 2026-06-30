import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadperson, removeperson } from "../Store/actions/Personactions";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import HorizontalCards from "./Partials/HorizontalCards";
import Loading from "./Loading";
import Dropdown from "./Partials/Dropdown";

const PersonDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.person);
  const dispatch = useDispatch();
  const [category, setcategory] = useState("tvcredits");

  document.title = `SCSDB |  ${info?.detail.name} `;

  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [id]);

  return info ? (
    <div className="w-screen h-max bg-[#1F1E24] ">
      {/* Part 1 navigation */}
      <nav className="pt-2 h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-xl ">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line ri-4x"
        ></Link>
      </nav>

      <div className="px-[7%] w-full md:flex pl-14 sm:ml-0">
        {/* Part 2 left Poster and Details */}
        <div className="">
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[45vh] object-cover"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />
          <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />
          {/* Sosial Media Links */}
          <div className="text-2xl text-white flex gap-x-5">
            <a
              title="Wikipedia"
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
            >
              <i className="ri-earth-fill ri-2x"></i>
            </a>

            <a
              title="Facebook"
              target="_blank"
              href={`https://www.facebook.com/${info.externalid.facebook_id}`}
            >
              <i className="ri-facebook-circle-fill ri-2x"></i>
            </a>

            <a
              title="Instagram"
              target="_blank"
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
            >
              <i className="ri-instagram-fill ri-2x"></i>
            </a>
            <a
              title="Twitter"
              target="_blank"
              href={`https://twitter.com/${info.externalid.twitter_id}`}
            >
              <i className="ri-twitter-x-fill ri-2x"></i>
            </a>
          </div>
          {/* Personal Information */}
          <h1 className="text-2xl text-zinc-400 font-semibold my-5">
            Person Info
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold ">Known For</h1>
          <h1 className=" text-zinc-400 ">
            {info.detail.known_for_department}
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3 ">Gender</h1>
          <h1 className=" text-zinc-400 ">
            {info.detail.gender === 2 ? "Male" : "Female"}
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3 ">
            Birthday
          </h1>
          <h1 className=" text-zinc-400 ">{info.detail.birthday}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3 ">
            Death Day
          </h1>
          <h1 className=" text-zinc-400 ">
            {info.detail.deathday ? info.detail.deathday : "Still Alive"}
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3 ">
            Place Of Birth
          </h1>
          <h1 className=" text-zinc-400 ">{info.detail.place_of_birth}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3 ">
            Also Known As
          </h1>
          <h1 className=" text-zinc-400 ">
            {info.detail.also_known_as.join(", ")}
          </h1>
        </div>

        {/* Part 3 right Details and information  */}
        <div className="sm:w-[100%] ml-[2%]">
          <h1 className="text-6xl text-zinc-400 font-black my-5">
            {info.detail.name}
          </h1>

          <h1 className="text-xl text-zinc-400 font-semibold">Biography</h1>
          <p className="text-zinc-400 mt-3  sm:w-[80%] md:w-[50%] lg:w-[80%]">
            {info.detail.biography ? info.detail.biography : "No Biography Available"}
          </p>

          <div className="flex sm:flex-col flex-col-reverse">
            <h1 className="mt-5 text-lg text-zinc-400 font-semibold ">
              Known For
            </h1>
            <HorizontalCards data={info.combinedcredits.cast} />

            <div className="flex flex-col ">
            <div className="w-full flex justify-between gap-4 mt-5">
              <h1 className="mt-5 text-xl text-zinc-400 font-semibold ">
                Acting
              </h1>

              <Dropdown
                title="Credits"
                options={["tvcredits", "movie"]}
                func={(e) => setcategory(e.target.value)}
              />
            </div>

            <div className="mb-10 list-disc text-zinc-400 w-full h-[50vh] mt-5 overflow-x-hidden overflow-y-auto shadow-xl shadow-[rgba(255,255,255,.3)] border-2 border-zinc-700 p-5">
              {info[category].cast.map((c, i) => (
                <li
                  key={i}
                  className="hover:text-white p-5 rounded hover:bg-[#19191d]  duration-300 cursor-pointer"
                >
                  <Link to={`/${category}/details/${c.id}`} className="">
                    <span>
                      {" "}
                      {c.name || c.title || c.original_name || c.original_title}
                    </span>

                    <span className="block ml-5 mt-2">
                      {c.character && `Character Name:  ${c.character}`}
                    </span>
                  </Link>
                </li>
              ))}
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default PersonDetails;
