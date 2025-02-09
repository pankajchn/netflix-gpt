import { lang } from "../utils/languageConstants";
import { useSelector } from "react-redux";
import { useRef } from "react";
import openai from "../utils/openAI";
import { API_OPTIONS } from "../utils/constants";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config?.lang);
  const searchText = useRef(null);

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
    console.log(searchText.current.value);
    const gptQuery = `Act as a movie recommendation system. Based on the user query: ${searchText.current.value}, suggest a list of movies that match the description. Ensure the recommendations are accurate and relevant to the query. Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya`;

    const gptResults = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      store: true,
      messages: [{ role: "user", content: gptQuery }],
    });

    const searchedMovies = gptResults?.choices[0]?.message?.content?.split(",");
    console.log(searchedMovies);
    const promisesArray = searchedMovies.map((movie) =>
      searchMoviesOnTMDB(movie)
    );
    const tmdbSearchResults = await Promise.all(promisesArray);
    console.log(tmdbSearchResults);
  };

  return (
    <div>
      <form
        className="flex justify-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          placeholder={lang[langKey].placeholder}
          className="px-5 py-4 w-[30rem] bg-white rounded-sm text-black"
        />
        <button
          onClick={handleGptSearchClick}
          className="bg-red-600 text-white px-5 py-4 font-bold font-poppins rounded-e-sm hover:bg-opacity-80"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};
export default GPTSearchBar;
