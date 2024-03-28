import React, { useState } from 'react';
import AuthService from '../../services/AuthService';
import { Alert, Button, Card, Container, Snackbar, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Logo from './logo.png'

const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await AuthService.login(username, password);
      localStorage.setItem('token', token);
      navigate('/')
      // Redirecionar após o login, se necessário
      
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center' }}>
      <Snackbar open={error.length > 0} autoHideDuration={6000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>

      <Card sx={{ mt: 5, pt: 5, px: 10, width: '40%', display: 'flex', alignItems: 'center', flexDirection: 'column', }}>
        <img src={Logo} alt="" width="200px" style={{ marginTop: '20px' }} />
        <form onSubmit={handleSubmit}>
          <TextField
            label="username"
            sx={{ my: 3 }}
            fullWidth
            onChange={(e) => setUsername(e.target.value)}
            type="text" id="username" value={username}
          />
          <TextField
            label="Senha"
            id="password"
            type="password"
            sx={{ mb: 3 }}
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Button type="submit" sx={{ mt: 2, mb: 1 }} onClick={() => {
          navigate('/cadastro')
        }}>
            Cadastrar
          </Button>
          <Button  type="submit" sx={{ mt: 2, mb: 1 } }  onClick={() => {
          navigate('/')
        }}>
            Login
          </Button>
          
        </form>
      </Card>
    </Container>
  );

};

export default Login;