import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidenav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Hamburger Button */}
      <div className="sm:hidden p-4">
        <button className="text-white text-3xl" onClick={toggleSidenav}>
          <i className="ri-menu-3-line"></i>
        </button>
      </div>

      {/* Sidenav Container */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed top-0 left-0 h-full w-64 bg-[#1F1F1F] z-[999999] border-r border-zinc-700 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 sm:static sm:w-[20%]`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center sm:block">
            <h1 className="text-2xl text-white font-bold">
              <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
              <span>SCSDB.</span>
            </h1>
            <button className="sm:hidden text-white text-2xl" onClick={toggleSidenav}>
              <i className="ri-close-line"></i>
            </button>
          </div>

          <nav className="flex flex-col text-zinc-400 gap-2 mt-10 text-lg">
            <h1 className="text-white font-semibold mb-2">New Feeds</h1>
            <Link to="/trending" className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-300">
              <i className="ri-fire-fill mr-2"></i> Trending
            </Link>
            <Link to="/popular" className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-300">
              <i className="ri-bard-fill mr-2"></i> Popular
            </Link>
            <Link to="/movie" className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-300">
              <i className="ri-clapperboard-fill mr-2"></i> Movies
            </Link>
            <Link to="/tv" className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-300">
              <i className="ri-tv-2-fill mr-2"></i> Tv Shows
            </Link>
            <Link to="/person" className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-300">
              <i className="ri-team-fill mr-2"></i> People
            </Link>
          </nav>

          <hr className="my-6 border-zinc-700" />

          <nav className="flex flex-col text-zinc-400 gap-2 text-lg">
            <h1 className="text-white font-semibold mb-2">Website Information</h1>
            <Link to="/about" className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-300">
              <i className="ri-information-fill mr-2"></i> About SCSDB
            </Link>
            <Link to="/contact" className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-300">
              <i className="ri-phone-fill mr-2"></i> Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidenav;
