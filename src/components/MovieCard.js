import React from "react";
import { imageUrl } from "../utils/constants";

const MovieCard = ({ posterPath }) => {

  return (
    <div className="w-48 pr-4">
      <img alt="movie" src={imageUrl+posterPath} />
    </div>
  );
};

export default MovieCard;
