import Navbar from "./Navbar";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import HeroSection from "./HeroSection";
import MoviesContainer from "./MoviesContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGPTSearchPage = useSelector(
    (store) => store.gptSearch?.gptSearchComponent
  );

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Navbar />
      {showGPTSearchPage ? (
        <GPTSearch />
      ) : (
        <>
          <HeroSection />
          <MoviesContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
