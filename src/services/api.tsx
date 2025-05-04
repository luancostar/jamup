import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Apenas até o domínio
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
