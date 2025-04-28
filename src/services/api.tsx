// src/services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // pega da variável de ambiente
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authenticateUser = async (email: string, senha: string) => {
  try {
    const response = await api.post('', { email, senha });
    return response.data;
  } catch (error) {
    console.error('Erro na autenticação:', error);
    throw error;
  }
};
