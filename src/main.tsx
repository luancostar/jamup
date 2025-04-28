// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // Importa o Provider do react-redux
import './styles/index.css';
import App from './App';
import { store } from './store/store'; // Importa a store que você configurou

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>  {/* Envolve o App com o Provider */}
      <App />
    </Provider>
  </StrictMode>
);
