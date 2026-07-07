import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import {
  Home,
  Trending,
  Popular,
  Movie,
  Tvshows,
  People,
  Moviedetails,
  Tvdetails,
  Persondetails,
  Trailer,
  Notfound,
  ContactUs,
  About,
} from "./LazyImports";
function App() {
  return (
    <div className="bg-[#1F1E24] h-screen w-screen flex">
      {" "}
      <Suspense fallback={<div>Loading...</div>}>
        {" "}
        <Routes>
          {" "}
          <Route path="/" element={<Home />} />{" "}
          <Route path="/Trending" element={<Trending />} />{" "}
          <Route path="/Popular" element={<Popular />} />{" "}
          <Route path="/movie" element={<Movie />} />{" "}
          <Route path="/movie/details/:id" element={<Moviedetails />}>
            <Route
              path="/movie/details/:id/trailer"
              element={<Trailer />}
            />{" "}
          </Route>{" "}
          <Route path="/Tv" element={<Tvshows />} />{" "}
          <Route path="/Tv/details/:id" element={<Tvdetails />}>
            {" "}
            <Route path="/Tv/details/:id/trailer" element={<Trailer />} />{" "}
          </Route>{" "}
          <Route path="/people" element={<People />} />{" "}
          <Route path="/person/details/:id" element={<Persondetails />} />{" "}
          <Route path="/contact" element={<ContactUs />} />{" "}
          <Route path="/about" element={<About />} />{" "}
          <Route path="*" element={<Notfound />} />{" "}
        </Routes>{" "}
      </Suspense>{" "}
    </div>
  );
}

export default App;
