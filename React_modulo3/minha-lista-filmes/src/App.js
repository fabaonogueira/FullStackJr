import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Search from './pages/Search';
import MovieDetails from './pages/MovieDetails';
import Favorites from './pages/Favorites';
import { FavoritesProvider } from './context/FavoritesContext';
import './App.css'; // Crie um CSS básico para estilização

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <div className="App">
          <header>
            <nav>
              <Link to="/">Busca</Link>
              <Link to="/favorites">Favoritos</Link>
            </nav>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Search />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </main>
        </div>
      </Router>
    </FavoritesProvider>
  );
}

export default App;