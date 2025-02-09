import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SearchResultsList = () => {
  const moviesResults = useSelector((store) => store.gptSearch);
  const { gptMoviesNames, gptMoviesResultsOnTmdb } = moviesResults;
  if (!gptMoviesNames || !gptMoviesResultsOnTmdb) return null;

  return (
    <div className="mt-48">
      {gptMoviesNames.map((movie, i) => (
        <MovieList
          key={movie}
          title={movie}
          movies={gptMoviesResultsOnTmdb[i]}
        />
      ))}
    </div>
  );
};
export default SearchResultsList;
