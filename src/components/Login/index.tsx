// src/pages/Login/Login.tsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { authenticateUser } from '../../services/auth';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import coverImg from '../../assets/cover.png';
import logoImg from '../../assets/logo.png';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate(); // Inicializando o hook navigate

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      // Se o token estiver presente, redireciona para a página Home
      navigate('/home');
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await authenticateUser(email, senha);
      localStorage.setItem('auth_token', response.token);
      navigate('/home'); // Redireciona para /home após login bem-sucedido
    } catch (err) {
      console.error('Erro ao autenticar:', err);
      setError('Falha na autenticação. Verifique suas credenciais.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center w-full">
      <div className="flex min-h-screen">
        {/* Formulário */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12">
          <div className="w-full max-w-md space-y-6">
            <div className="bg-contain" style={{ backgroundPositionY: '-40px', backgroundImage: "url('/src/assets/bg.gif')" }}>
              <h2 className="flex justify-center mb-20 text-3xl font-bold text-gray-900">
                <img width="350px" src={logoImg} alt="Logo" />
              </h2>
              <p className="mt-1 text-sm text-gray-300">Insira seu email e senha para entrar</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                  Seu Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="usuario@email.com"
                  required
                  className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-400">
                  Seu Email
                </label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="********"
              className="w-full text-sm px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-15 transform -translate-y-1/2 cursor-pointer text-gray-500"
            >
    {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
  </span>
</div>

              <div className="flex items-center gap-2 text-sm">
                <input type="checkbox" id="terms" className="h-4 w-4 rounded border-gray-300" />
                <label htmlFor="terms" className="text-gray-500">
                  Eu concordo com os <a href="#" className="underline">Termos e Condições</a>
                </label>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center text-gray-500 gap-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                  Receber novidades do <strong>JamUp</strong>
                </label>
                <a href="#" className="text-blue-600 hover:underline">Esqueci a senha</a>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white text-sm py-2 rounded-md hover:bg-gray-800 transition"
              >
                {loading ? 'Autenticando...' : 'ENTRAR'}
              </button>

              <button className="w-full border text-sm py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-100 transition">
                <img src="/src/assets/google.svg" alt="Google" className="w-4 h-4" />
                ENTRAR COM GOOGLE
              </button>
            </form>

            {error && <p className="text-sm text-red-600 mt-2">{error}</p>}

            <p className="text-sm text-center text-gray-600">
              Não tem cadastro? <a href="#" className="font-medium text-black hover:underline">Crie uma conta!</a>
            </p>
          </div>
        </div>

        {/* Imagem lateral - visível apenas em desktop */}
        <div className="hidden md:block w-1/2">
          <img
            src={coverImg}
            alt="Capa"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
