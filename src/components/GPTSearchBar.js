import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openAIService";
import { API_OPTIONS, gptQuery } from "../utils/constants";
import { addRecommendedMovies } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const selectedLanguage = useSelector((store) => store.appConfig.lang);
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const getMovieRecommendation = async () => {
    const query = gptQuery(searchText.current.value);
    const result = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });
    if (!result.choices) throw console.error("No so much movies");
    return result.choices?.[0].message?.content;
  };

  const fetchMovieDetails = async (movieName) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const data = await res.json();
    return data.results;
  };

  const handleGPTSerachClick = async () => {
    //"Andaz Apna Apna, Golmaal: Fun Unlimited, Chupke Chupke, Bombay to Goa, Jo Jeeta Wohi Sikandar"
    const recommendation = await getMovieRecommendation();
    const output = recommendation.split(",");

    //for the recieved movie, serach the TMDB API for that
    const promiseArray = output.map((movie) => fetchMovieDetails(movie));
    const results = await Promise.all(promiseArray);
    dispatch(addRecommendedMovies({ recommendation, results }));
  };

  return (
    <div className="flex justify-center pt-[10%]">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-2 col-span-9 rounded-md"
          type="text"
          placeholder={lang[selectedLanguage].placeholder}
        />
        <button
          className="p-4 m-2 col-span-3 bg-red-500 text-white rounded-md"
          onClick={handleGPTSerachClick}
        >
          {lang[selectedLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
