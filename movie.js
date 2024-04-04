import React from 'react';
import './css/Movie.modules.css';

function Movie({ movie }) {
  return (
    <div className="movie">
      <img src={movie.image_url} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
      <p>Rating: {movie.average_votes} / Votes: {movie.total_votes}</p>
    </div>
  );
}

export default Movie;
