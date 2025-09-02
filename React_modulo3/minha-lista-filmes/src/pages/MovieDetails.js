import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';
import { useFavorites } from '../hooks/useFavorites'; // Hook que criaremos a seguir

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const isFavorited = favorites.some((fav) => fav.id === parseInt(id));

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      setError('');
      try {
        const movieResponse = await api.get(`/movie/${id}`);
        const creditsResponse = await api.get(`/movie/${id}/credits`);
        setMovie(movieResponse.data);
        setCredits(creditsResponse.data);
      } catch (err) {
        setError('Não foi possível carregar os detalhes do filme.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (error) return <p className="error-message">{error}</p>;
  if (!movie) return null;

  const director = credits?.crew.find((member) => member.job === 'Director');

  const handleFavoriteClick = () => {
    if (isFavorited) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <div className="movie-details">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <div className="details-content">
        <h1>{movie.title} ({movie.release_date.substring(0, 4)})</h1>
        <p><strong>Sinopse:</strong> {movie.overview}</p>
        <p><strong>Avaliação:</strong> {movie.vote_average.toFixed(1)} / 10</p>
        {director && <p><strong>Diretor:</strong> {director.name}</p>}
        <p><strong>Elenco:</strong> {credits?.cast.slice(0, 5).map(actor => actor.name).join(', ')}</p>
        <button onClick={handleFavoriteClick}>
          {isFavorited ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;