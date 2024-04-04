import React from 'react';
import Movie from './Movie'; 
import './MoviesList.module.css'; 

function MoviesList({ movies }) {
  return (
    <div className="movies-list">
      {movies.map((movie, index) => (
        <Movie key={index} movie={movie} />
      ))}
    </div>
  );
}

export default MoviesList;
