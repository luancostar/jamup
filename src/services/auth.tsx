// src/services/auth.ts
import api from './api';

export const authenticateUser = async (email: string, senha: string) => {
  try {
    const response = await api.post('/usuarios/login.php', { email, senha });
    return response.data;
  } catch (error) {
    console.error('Erro na autenticação:', error);
    throw error;
  }
};
