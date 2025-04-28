// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // Importa o reducer de autenticação

export const store = configureStore({
  reducer: {
    auth: authReducer, // Configura o slice de autenticação
  },
});
