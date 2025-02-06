/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        API_OPTIONS
      );
      const json = await res.json();
      const { results } = json;
      dispatch(addUpcomingMovies(results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};
export default useUpcomingMovies;
