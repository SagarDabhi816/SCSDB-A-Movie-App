import { lazy } from "react";

const Home = lazy(() => import("./Components/Home"));
const Trending = lazy(() => import("./Components/Trending"));
const Popular = lazy(() => import("./Components/Popular"));
const Movie = lazy(() => import("./Components/Movie"));
const Tvshows = lazy(() => import("./Components/Tvshows"));
const People = lazy(() => import("./Components/People"));
const Moviedetails = lazy(() => import("./Components/Moviedetails"));
const Tvdetails = lazy(() => import("./Components/Tvdetails"));
const Persondetails = lazy(() => import("./Components/Persondetails"));
const Trailer = lazy(() => import("./Components/Partials/Trailer"));
const Notfound = lazy(() => import("./Components/Notfound"));
const ContactUs = lazy(() => import("./Components/Contact"));
const About = lazy(() => import("./Components/About"));
export {
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
};
