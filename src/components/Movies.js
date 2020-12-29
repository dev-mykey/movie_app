import React from "react";
import PropTypes from "prop-types";
import Movie from "./Movie";
import "./Movie.css";

function Movies({ movies }) {
  return (
    <div className="movies">
      {movies.map((movie) => {
        return (
          <Movie
            key={movie.id}
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image}
            genres={movie.genres}
          ></Movie>
        );
      })}
    </div>
  );
}

Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Movies;
