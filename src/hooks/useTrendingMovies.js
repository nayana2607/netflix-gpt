import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import {  addTrendingMovies} from "../utils/movieSlice";
import { useEffect } from "react";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const res = await data.json();
    dispatch(addTrendingMovies(res.results));
  };
  useEffect(() => {
    getTrendingMovies();
  }, []);
};



export default useTrendingMovies