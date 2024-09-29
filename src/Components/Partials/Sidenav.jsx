
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidenav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger Icon (visible on small screens) */}
      <button
        className="sm:hidden p-2 text-white ml-2 mt-2"
        onClick={toggleSidenav}
      >
        <i className={`ri-${isOpen ? "close" : "menu"}-fill text-4xl`}></i>
      </button>

      {/* Sidenav */}
      <div className={`z-[999990] fixed top-0 left-0 w-64 h-full bg-gray-800 border-r-2 border-zinc-500 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0 sm:static sm:w-auto sm:block`}>
        <div className="p-5 sm:w-[19vw] w-full">
          {/* Close Button (visible only when sidenav is open) */}
          {isOpen && (
            <button className="sm:hidden p-2 text-white" onClick={toggleSidenav}>
              <i className="ri-close-fill text-5xl"></i>
            </button>
          )}

          <h1 className="text-2xl text-white font-bold">
            <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
            <span className="text-xl">SCSDB.</span>
          </h1>

          <nav className="flex flex-col text-zinc-400 gap-2 text-xl">
            <h1 className="text-2xl text-white font-semibold mt-5 mb-5">
              New Feeds
            </h1>
            <Link to="/Trending" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4">
              <i className="mr-4 ri-fire-fill"></i>
              Trending
            </Link>
            <Link to="/Popular" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4">
              <i className="mr-4 ri-bard-fill"></i>
              Popular
            </Link>
            <Link to="/Movie" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4">
              <i className="mr-4 ri-clapperboard-fill"></i>
              Movies
            </Link>
            <Link to="/tv" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4">
              <i className="mr-4 ri-computer-fill"></i>
              Tv Shows
            </Link>
            <Link to="/People" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4">
              <i className="mr-4 ri-team-fill"></i>
              People
            </Link>
          </nav>

          <hr className="border-none h-[1px] bg-zinc-500 mt-4"/>

          <nav className="flex flex-col text-zinc-400 gap-2 text-xl w-full">
            <h1 className="text-xl text-white font-semibold mt-5 mb-5 hidden sm:block">
              Website Information
            </h1>
            <Link to="/about" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4">
              <i className="mr-4 ri-information-fill"></i>
              About SCSDB
            </Link>
            <Link to="/Contact" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4">
              <i className="mr-4 ri-phone-fill"></i>
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
