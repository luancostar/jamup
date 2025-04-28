 // src/pages/Login/Login.tsx
 import React, { useState } from 'react';
 import { authenticateUser } from '../../services/api'; // Importa a função de autenticação
 
 const Login = () => {
   const [email, setEmail] = useState('');
   const [senha, setSenha] = useState('');
   const [error, setError] = useState<string | null>(null);
   const [loading, setLoading] = useState(false);
 
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     setLoading(true);
     setError(null);
 
     try {
       const response = await authenticateUser(email, senha);
       // Sucesso, pode armazenar o token no estado global ou no localStorage
       console.log('Usuário autenticado', response);
       localStorage.setItem('auth_token', response.token); // Exemplo de armazenar token
     } catch (err) {
       setError('Falha na autenticação. Verifique suas credenciais.');
     } finally {
       setLoading(false);
     }
   };
 
   return (
     <div>
       <form onSubmit={handleSubmit}>
         <input
           type="email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           placeholder="Email"
         />
         <input
           type="password"
           value={senha}
           onChange={(e) => setSenha(e.target.value)}
           placeholder="Senha"
         />
         <button type="submit" disabled={loading}>
           {loading ? 'Autenticando...' : 'Entrar'}
         </button>
       </form>
 
       {error && <p>{error}</p>}
     </div>
   );
 };
 
 export default Login;
 