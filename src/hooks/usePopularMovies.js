/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice.js";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movie.popularMovies);

  const getPopularMovies = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTIONS
      );
      const json = await res.json();
      const { results } = json;
      dispatch(addPopularMovies(results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
   !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
