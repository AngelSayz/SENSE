import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Cambia si usas otro puerto

const api = axios.create({
  baseURL: API_URL,
  timeout: 5000, // Tiempo máximo de espera
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;