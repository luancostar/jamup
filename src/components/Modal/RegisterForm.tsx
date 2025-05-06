import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useRegister, NovoUsuario } from '../../hooks/useRegister';

export default function RegisterModal() {
  // Usando react-hook-form para gerenciar o formulário
  const { register, handleSubmit, formState: { errors } } = useForm<NovoUsuario>();
  const { handleRegister, isLoading } = useRegister(); // Hook customizado para registrar o usuário
  
  // Função chamada no submit
  const onSubmit = (data: NovoUsuario) => {
    handleRegister(data);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <a href="#" className="font-medium text-black hover:underline">
          Crie uma conta!
        </a>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/50 fixed inset-0 z-40" />
        <Dialog.Content
          className="filter drop-shadow-[0px_0px_3px_#8400f7] fixed z-50 left-1/2 top-1/2 w-[90%] sm:w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl bg-[#1c1c1c] p-6 shadow-lg"
        >
          <div className="flex justify-between items-center mb-4">
            <Dialog.Title className="text-2xl font-bold text-white ">Criar conta 🎧🚀</Dialog.Title>
            <Dialog.Close asChild>
              <button className="text-white border-none hover:text-purple-200 transition">
                <X size={20} />
              </button>
            </Dialog.Close>
          </div>

          {/* Formulário de registro */}
          <form id="register-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-white" htmlFor="nome">Nome</label>
              <input
                id="nome"
                type="text"
                className="w-full p-2 mt-2 bg-gray-800 text-white rounded-md"
                {...register('nome', { required: 'O nome é obrigatório' })}
              />
              {errors.nome && <p className="text-red-500 text-sm">{errors.nome.message}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-white" htmlFor="sobrenome">Sobrenome</label>
              <input
                id="sobrenome"
                type="text"
                className="w-full p-2 mt-2 bg-gray-800 text-white rounded-md"
                {...register('sobrenome', { required: 'O sobrenome é obrigatório' })}
              />
              {errors.sobrenome && <p className="text-red-500 text-sm">{errors.sobrenome.message}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-white" htmlFor="data_nascimento">Data de Nascimento</label>
              <input
                id="data_nascimento"
                type="date"
                className="w-full p-2 mt-2 bg-gray-800 text-white rounded-md"
                {...register('data_nascimento', { required: 'A data de nascimento é obrigatória' })}
              />
              {errors.data_nascimento && <p className="text-red-500 text-sm">{errors.data_nascimento.message}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-white" htmlFor="email">Email</label>
              <input
               placeholder='usuario@email.com'
                id="email"
                type="email"
                className="w-full p-2 mt-2 bg-gray-800 text-white rounded-md"
                {...register('email', { 
                  required: 'O email é obrigatório', 
                  pattern: {
                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                    message: 'Email inválido'
                  } 
                })}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-white" htmlFor="senha">Senha</label>
              <input
               placeholder='*******'
                id="senha"
                type="password"
                className="w-full p-2 mt-2 bg-gray-800 text-white rounded-md"
                {...register('senha', { required: 'A senha é obrigatória' })}
              />
              {errors.senha && <p className="text-red-500 text-sm">{errors.senha.message}</p>}
            </div>
          </form>

          <div className="mt-6 flex justify-end gap-3">
            <Dialog.Close asChild>
              <button
                type="button"
                className="px-4 py-2 rounded-md border border-white text-white hover:bg-white/10 transition"
              >
                Cancelar
              </button>
            </Dialog.Close>
            <button
              type="submit"
              form="register-form"
              className="px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition"
              disabled={isLoading}  // Desabilita o botão enquanto a requisição está carregando
            >
              {isLoading ? 'Cadastrando...' : 'Cadastrar'}
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
