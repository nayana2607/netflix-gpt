import MovieCard from "./MovieCard";

const MovieList = ({ type, movies }) => {

 
  return (
    <div className="px-2">
   
        <h1 className="text-3xl font-bold py-4 text-white">{type}</h1>
        <div  className="flex overflow-x-scroll s">
        <div className="flex">
          {movies.map((movie) => 
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          )}
        </div>
       
      

      </div>
    </div>
  ); 
};

export default MovieList;