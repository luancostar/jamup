// src/router.tsx
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />  {/* Rota para Login */}
      <Route path="/home" element={<Home />} />  {/* Rota para Home */}
    </Routes>
  );
};
