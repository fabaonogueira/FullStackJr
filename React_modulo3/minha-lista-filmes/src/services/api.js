// src/services/api.js
import axios from 'axios';

const API_KEY = '0943e72c805801c95119674072735bec'; // Substitua pela sua chave do TMDB
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'pt-BR',
  },
});

export default api;