import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SearchResultsList = () => {
  const moviesResults = useSelector((store) => store.gptSearch);
  const { gptMoviesNames, gptMoviesResultsOnTmdb } = moviesResults;
  if (!gptMoviesNames || !gptMoviesResultsOnTmdb) return null;

  return (
    <div className="relative top-48 md:top-[40rem] h-screen bg-black">
      {gptMoviesNames.map((movie, i) => (
        <MovieList
          key={movie}
          title={movie}
          movies={gptMoviesResultsOnTmdb[i]}  //gptMoviesResultsOnTmdb is an array

        />
      ))}
    </div>
  );
};
export default SearchResultsList;
