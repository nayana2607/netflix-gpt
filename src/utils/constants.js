export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGRmZDU4YzI0YTAyM2Q5NWE5MzE3OWIwM2VhYTIwYiIsInN1YiI6IjY1NjliYTRjNzFmMDk1MDBlMWE5NmJmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zlLzV0sBUUVNFbul9BqEfZdLw9S4bQZFhrHqH3kLW04",
  },
};

export const imageUrl = `https://image.tmdb.org/t/p/w780`;

export const supportedLanguages = [
  { identifier: "en", language: "English" },
  { identifier: "hd", language: "Hindi" },
  { identifier: "sp", language: "Spanish" },
];

export const OPENAI_KEY=process.env.REACT_APP_OPENAI_KEY
export const gptQuery = (query) => {
  return "Act as a movie Recommendation System and suggest some movies for the query: " +
    query +
    " only give me name of 5 movies, comma seperated like the example given ahead:- Sher, Blue, Night Manager";
};
