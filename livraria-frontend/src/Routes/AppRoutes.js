import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RotaProtegida from './RotaProtegida';
import Home from './Home';
import Login from './Login';

const AppRoutes = () => {
  return (
    <Routes>
      <RotaProtegida path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
