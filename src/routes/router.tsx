// src/router.tsx
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import PrivateRoute from './PrivateRoute';

export const Router = () => {
  return (
    <Routes>
    <Route path="/" element={<Login />} />
    <Route
      path="/home"
      element={
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      }
    />
  </Routes>
  );
};
