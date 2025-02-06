/* eslint-disable react/prop-types */

import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {

  return (
    <div className="relative bottom-32 ms-8 mb-8 flex flex-col w-full overflow-x-scroll bg-transparent">
      <h1 className="text-xl font-semibold mb-1 text-white bg-gradient-to-t from-black font-poppins">{title}</h1>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} poster_path={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};
export default MovieList;
