import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailers } from "../utils/movieSlice";

const useMovieTrailer=(id)=>{
    const dispatch = useDispatch();
    useEffect
    (() => {
        const fetchVideos = async () => {
          const res = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/videos`,
            API_OPTIONS
          );
          const data = await res.json();
          const filteredData = data.results.filter(
            (video) => video.type === "Trailer"
          );
          const trailer = filteredData.length ? filteredData[0] : data.results[0];
          dispatch(addTrailers(trailer));
        };
    
        fetchVideos();
      }, []);
}

export default useMovieTrailer;
