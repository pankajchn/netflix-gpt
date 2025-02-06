import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const MoviesContainer = () => {
  const movies = useSelector((store) => store.movie);
  if (!movies) return;
  return (
    <div className=" bg-black">
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
      <MovieList title="Popular" movies={movies.popularMovies} />
      <MovieList title="Top Rated" movies={movies.topRatedMovies} />
      <MovieList title="Upcoming" movies={movies.upComingMovies} />
    </div>
  );
};
export default MoviesContainer;
