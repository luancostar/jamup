// src/App.tsx
import { BrowserRouter } from 'react-router-dom';  // Importando o BrowserRouter
import './styles/index.css';
import { Router } from './routes/router';  // Importando o Router

function App() {
  return (
    <BrowserRouter>
      <div className='text-5xl'>
        <Router />  
      </div>
    </BrowserRouter>
  );
}

export default App;
