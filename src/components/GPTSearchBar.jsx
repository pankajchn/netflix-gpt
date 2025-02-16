import { lang } from "../utils/languageConstants";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useState } from "react";
import openai from "../utils/openAI";
import { API_OPTIONS } from "../utils/constants";
import {
  addGptMoviesResultsOnTmdb,
  clearGptSearchResults,
} from "../utils/gptSearchSlice";
import Loader from "./Loader";

const GPTSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const langKey = useSelector((store) => store.config?.lang);

  const searchMoviesOnTMDB = async (movie) => {
    try {
      const tmdbMovieResults = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      const json = await tmdbMovieResults.json();
      return json.results;
    } catch (error) {
      console.log(error);
    }
  };

  const handleGptSearchClick = async () => {
    setIsLoading(true);
    dispatch(clearGptSearchResults());

    const gptQuery = `Act as a movie recommendation system. Based on the user query: ${searchText.current.value}, suggest a list of movies that match the description. Ensure the recommendations are accurate and relevant to the query. give me movie results comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya`;

    const gptResults = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      store: true,
      messages: [{ role: "user", content: gptQuery }],
    });

    const searchedMovies = gptResults?.choices[0]?.message?.content?.split(",");
    const promisesArray = searchedMovies.map((movie) =>
      searchMoviesOnTMDB(movie)
    );
    const tmdbSearchResults = await Promise.all(promisesArray);
    dispatch(
      addGptMoviesResultsOnTmdb({
        gptSearchMoviesNames: searchedMovies,
        gptSearchResultsOnTmdb: tmdbSearchResults,
      })
    );
    setIsLoading(false);
    console.log(tmdbSearchResults);
  };

  return (
    <div className="absolute top-20 mx-auto w-screen md:left-[30rem]">
      <form
        className="flex w-full px-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          placeholder={lang[langKey].placeholder}
          className="px-3 md:px-5 py-4 w-[70%] md:w-[30rem] text-[14px] md:text-base bg-white rounded-sm text-black"
        />
        <button
          onClick={handleGptSearchClick}
          className="bg-red-600 text-white w-[30%] md:w-24 md:px-5 py-4 font-bold font-poppins rounded-e-sm hover:bg-opacity-80"
        >
          {lang[langKey].search}
        </button>
      </form>
      <div className="md:me-[60rem] mt-20">{isLoading && <Loader />}</div>
    </div>
  );
};
export default GPTSearchBar;
