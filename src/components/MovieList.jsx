/* eslint-disable react/prop-types */

import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="relative md:bottom-[25rem] md:h-[17rem] ms-[10px] md:ms-8 mb-8 flex flex-col  bg-transparent">
      <h1 className="md:text-xl ms-2 md:ms-0 font-semibold mb-1 text-white font-poppins text-left">
        {title}
      </h1>
      <div className="flex overflow-x-auto scrollbar-hide pe-16 md:pe-3">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} cey={movie.id} poster_path={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};
export default MovieList;
