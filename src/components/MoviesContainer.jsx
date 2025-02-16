import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const MoviesContainer = () => {
  const movies = useSelector((store) => store.movie);
  if (!movies) return;
  return (
    <div className="relative top-80 md:top-24 md:bottom-12 bg-black md:h-screen">
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
      <MovieList title="Popular" movies={movies.popularMovies} />
      <MovieList title="Top Rated" movies={movies.topRatedMovies} />
      <MovieList title="Upcoming" movies={movies.upComingMovies} />
      <MovieList  title="Trending" movies={movies.trendingMovies}/>
    </div>
  );
};
export default MoviesContainer;
