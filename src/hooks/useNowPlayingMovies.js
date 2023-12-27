import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const movies=useSelector(store=>store.movies.nowPlayingMovies)

  const nowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const res = await data.json();
    dispatch(addNowPlayingMovies(res.results));
  };
  useEffect(() => {
    if(!movies)nowPlayingMovies();
  }, []);
};



export default useNowPlayingMovies