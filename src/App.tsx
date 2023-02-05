import { BrowserRouter } from 'react-router-dom'
import { Router } from './Routes';

// import styles from './styles/app.module.scss';

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter> 
  );
}
