import { useState } from 'react';
import { postUsuario } from '../services/usuarios'; 
import { toast } from 'react-toastify';

export interface NovoUsuario {
  nome: string;
  sobrenome: string;
  data_nascimento: string;
  email: string;
  senha: string;
}

export function useRegister() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleRegister(data: NovoUsuario) {
    setIsLoading(true);

    try {
      await postUsuario(data);
      toast.success('Usuário cadastrado com sucesso!');
    } catch (error) {
      toast.error('Erro ao cadastrar usuário. Tente novamente.');
      console.error('Erro no cadastro:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return { handleRegister, isLoading };
}
