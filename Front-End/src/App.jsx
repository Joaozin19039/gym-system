import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/login';
import Sidebar from './components/Sidebar/sidebar'; 
import Dashboard from './components/Dashboard/dashboard';
import Alunos from './components/Alunos/alunos';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* 1. Login fica sozinho, sem Sidebar */}
        <Route path="/" element={<Login />} />

        {/* 2. Rota do Painel (Dashboard) */}
        <Route path="/admin" element={
          <div style={{ display: 'flex' }}>
            <Sidebar />
            <main style={{ flex: 1, marginLeft: '250px', padding: '20px' }}>
              <Dashboard />
            </main>
          </div>
        } />

        {/* 3. Rota da Listagem de Alunos */}
        <Route path="/alunos" element={
          <div style={{ display: 'flex' }}>
            <Sidebar />
            <main style={{ flex: 1, marginLeft: '250px', padding: '20px' }}>
              <Alunos />
            </main>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;