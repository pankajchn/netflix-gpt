import Navbar from "./Navbar";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import HeroSection from "./HeroSection";
import MoviesContainer from "./MoviesContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";
import useTrendingMovies from "../hooks/useTrendingMovies";

const Browse = () => {
  const showGPTSearchPage = useSelector(
    (store) => store.gptSearch?.gptSearchComponent
  );

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTrendingMovies();

  return (
    <div className="w-[430px] md:w-screen h-screen">
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
