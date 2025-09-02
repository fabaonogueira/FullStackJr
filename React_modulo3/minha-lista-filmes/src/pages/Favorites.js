import React from 'react';
import { useFavorites } from '../hooks/useFavorites';
import MovieCard from '../components/MovieCard';

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div className="favorites-container">
      <h1>Meus Filmes Favoritos</h1>
      {favorites.length === 0 ? (
        <p>Você ainda não adicionou nenhum filme aos favoritos.</p>
      ) : (
        <div className="movie-list">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;