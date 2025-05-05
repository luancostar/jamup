// src/routes/PrivateRoute.tsx

import { JSX } from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: JSX.Element;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const token = localStorage.getItem('auth_token');

  return token ? children : <Navigate to="/" replace />;
}
