import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login/Login';
import Cadastro from './pages/Cadastro';

const App = () => {
  const isAuthenticated = localStorage.getItem('token') !== null;
  
  return (
    <Router>
      <Routes>
        {/* Rota para o login */}
        <Route path="/login" element={<Login />} />

        {/* Rota protegida para a home */}
        <Route
          path="/"
          element={
            isAuthenticated ? <Home /> : <Navigate to="/login" />
          }
        />

        {/* Rota para o cadastro */}
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
};

export default App;
