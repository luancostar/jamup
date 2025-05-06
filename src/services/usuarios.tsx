import api from './api';
import { NovoUsuario } from '../hooks/useRegister';

export async function postUsuario(data: NovoUsuario) {
  const response = await api.post('/usuarios', data); // ajuste a rota conforme sua API
  return response.data;
}
