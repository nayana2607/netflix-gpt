import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector((store) => store.movies?.nowPlayingMovies);
const trendingmovies=useSelector(store=>store.movies?.trendingMovies)
  if (nowPlayingMovies === null||trendingmovies===null) return;
  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">

        <MovieList type={"Now Playing"} movies={nowPlayingMovies} />
        <MovieList type={"Trending"} movies={trendingmovies} />
        <MovieList type={"Continue Playing"} movies={nowPlayingMovies} />
        <MovieList type={"Upcoming movies"} movies={nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
