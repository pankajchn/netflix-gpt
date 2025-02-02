/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVedio } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
    
  const dispatch = useDispatch();
  const getTrailer = async function () {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );

      const json = await res.json();
      const trailerMovies = json.results.filter(function (movie) {
        return movie.type === "Trailer";
      });
      const trailer = trailerMovies[0];
      dispatch(addTrailerVedio(trailer));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(function () {
    getTrailer();
  }, []);
};
export default useMovieTrailer;
