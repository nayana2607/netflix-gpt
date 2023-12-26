import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTrendingMovies from "../hooks/useTrendingMovies";
import { useSelector } from "react-redux";
import GPTSearchPage from "./GPTSearchPage";

const Browse = () => {
  useNowPlayingMovies();
  useTrendingMovies();
  const showGPTView = useSelector((store) => store.gpt.showSearch);

  return (
    <div>
      <Header />
      {showGPTView ? (
        <GPTSearchPage />
      ) : (
        <div>
          <MainContainer />
          <SecondaryContainer />
        </div>
      )}
    </div>
  );
};

export default Browse;
