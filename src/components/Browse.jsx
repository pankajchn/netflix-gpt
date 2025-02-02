import Navbar from "./Navbar";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import HeroSection from "./HeroSection";
import MovieList from "./movieList";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Navbar />
      <HeroSection />
      <MovieList/>
    </div>
  );
};

export default Browse;
