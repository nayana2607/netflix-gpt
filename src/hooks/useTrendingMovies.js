import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {  addTrendingMovies} from "../utils/movieSlice";
import { useEffect } from "react";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const trendingMov=useSelector(store=>store.movies.trendingMovies)
  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const res = await data.json();
    dispatch(addTrendingMovies(res.results));
  };
  useEffect(() => {
   if(!trendingMov) getTrendingMovies();
  }, []);
};



export default useTrendingMovies