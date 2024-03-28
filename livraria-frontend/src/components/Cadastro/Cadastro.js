import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Button, Card, Container, Snackbar, TextField, Typography } from '@mui/material';
import AuthService from '../../services/AuthService';
import Logo from './logo.png';

const CadastroUsuario = () => {
  const history = useNavigate();
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await AuthService.cadastrar(username, password);
      console.log('Usuário cadastrado com sucesso!');
      navigate('/login');
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      setError('Erro ao cadastrar usuário. Por favor, tente novamente.');
    } finally {
      setLoading(false);
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
        <Typography variant='h4' align="center">CADASTRO DE USUÁRIO</Typography>
        <img src={Logo} alt="" width="200px" style={{ marginTop: '20px' }} />
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nome de usuário"
            sx={{ my: 3 }}
            fullWidth
            onChange={(e) => setUsername(e.target.value)}
            type="text" id="username" value={username}
          />
          <TextField
            label="Senha"
            sx={{ mb: 3 }}
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
            type="password" id="password" value={password}
          />
          <Button type="submit" disabled={loading} sx={{ mt: 2, mb: 1 }} >
            {loading ? 'Cadastrando...' : 'Cadastrar'}
          </Button>
        <Button sx={{ mt: 1, mb: 1 }} onClick={() => {
          navigate('/login');
        }}>
          Voltar para o Login
        </Button>
        </form>
      </Card>
    </Container>
  );
};

export default CadastroUsuario;
