// src/services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://myband.calledtecnologia.com/usuarios/login.php', // URL base do seu endpoint
  headers: {
    'Content-Type': 'application/json', // Especifica que o corpo da requisição será em JSON
  },
});

export const authenticateUser = async (email: string, senha: string) => {
  try {
    const response = await api.post('', { email, senha });
    return response.data;  // Retorna os dados recebidos do servidor (geralmente um token)
  } catch (error) {
    console.error('Erro na autenticação:', error);
    throw error;
  }
};
