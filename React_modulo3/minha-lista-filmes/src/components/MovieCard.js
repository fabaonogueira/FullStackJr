import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const posterPath = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750.png?text=No+Image';

  return (
    <div className="movie-card">
      <img src={posterPath} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>Ano: {movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'}</p>
      <Link to={`/movie/${movie.id}`}>Ver Detalhes</Link>
    </div>
  );
};

export default MovieCard;