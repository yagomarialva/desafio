import axios from 'axios';

const AuthService = {
  login: async (username, password) => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        username,
        password
      });
      return response.data.token;
    } catch (error) {
      throw new Error('Credenciais inválidas. Por favor, tente novamente.');
    }
  },

  cadastrar: async (username, password) => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/register', {
        username,
        password
      });
      return response.data.token;
    } catch (error) {
      throw new Error('Credenciais inválidas. Por favor, tente novamente.');
    }
  }
};

export default AuthService;
