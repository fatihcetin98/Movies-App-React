import { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";

import Popular from "./Popular";
import Movies from "./Movies";
import MoviePagination from "./MoviePagination";

const MovieList = () => {
  const { activeLink, movies, popularMovies } = useContext(MovieContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(9);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovie = movies.slice(indexOfFirstMovie, indexOfLastMovie);
  const popularMovieList = popularMovies.slice(
    indexOfFirstMovie,
    indexOfLastMovie
  );
  const totalPagesNum = Math.ceil(movies.length / moviesPerPage);

  return (
    <div>
      {activeLink === "Popular" && (
        <>
          <div>
            {" "}
            <Popular popularMovies={popularMovieList} />{" "}
          </div>
          <div>
            <MoviePagination
              pages={totalPagesNum}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </>
      )}
      {activeLink === "All Movies" && (
        <>
          <div>
            {" "}
            <Movies movies={currentMovie} />
          </div>
          <div>
            <MoviePagination
              pages={totalPagesNum}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </>
      )}
      ;
    </div>
  );
};
export default MovieList;
