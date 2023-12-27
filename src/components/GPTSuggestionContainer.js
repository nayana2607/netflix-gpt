import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";

const GPTSuggestionContainer = () => {
  const { recommendedMovies, recommendedResult } = useSelector(
    (store) => store.gpt
  );
  if (!recommendedMovies || !recommendedResult) return <div><h1>Loading...</h1></div>;
  const finalResults = recommendedResult.map((result) =>
    result.filter((movie) => movie.poster_path != null)
  );

  return (
    <div className="p-4 m-4">
      {finalResults.map((result, index) => (
        <MovieList type={result?.[index]?.original_title} movies={result} />
      ))}
    </div>
  );
};

export default GPTSuggestionContainer;
