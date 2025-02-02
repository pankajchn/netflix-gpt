/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?page=1",
          API_OPTIONS
        );
        const json = await res.json();
        dispatch(addNowPlayingMovies(json.results));
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getNowPlayingMovies();
    }, []);
}


export default useNowPlayingMovies;