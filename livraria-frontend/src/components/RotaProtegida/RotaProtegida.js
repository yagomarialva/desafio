import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const RotaProtegida = ({ element, ...props }) => {
  const isAuthenticated = true; // Lógica para verificar se o usuário está autenticado

  return isAuthenticated ? (
    <Route {...props} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default RotaProtegida;
