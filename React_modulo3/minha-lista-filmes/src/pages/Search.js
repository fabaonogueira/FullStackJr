import React, { useState } from 'react';
import api from '../services/api';
import MovieCard from '../components/MovieCard';
import LoadingSpinner from '../components/LoadingSpinner';

const Search = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleSearch = async (newPage = 1) => {
    if (!query) {
      setError('Por favor, digite o nome de um filme.');
      return;
    }

    setLoading(true);
    setError('');
    setMovies([]);

    try {
      const response = await api.get('/search/movie', {
        params: {
          query,
          page: newPage,
        },
      });
      setMovies(response.data.results);
      setPage(response.data.page);
      setTotalPages(response.data.total_pages);
    } catch (err) {
      setError('Erro ao buscar filmes. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div className="search-container">
      <h1>Busca de Filmes</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Digite o nome do filme..."
        />
        <button type="submit">Buscar</button>
      </form>

      {loading && <LoadingSpinner />}
      {error && <p className="error-message">{error}</p>}

      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          {page > 1 && <button onClick={() => handleSearch(page - 1)}>Anterior</button>}
          <span>Página {page} de {totalPages}</span>
          {page < totalPages && <button onClick={() => handleSearch(page + 1)}>Próxima</button>}
        </div>
      )}
    </div>
  );
};

export default Search;
