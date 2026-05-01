import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.css';

function Sidebar() {
  const location = useLocation(); // Isso ajuda a saber qual botão destacar

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h2>Gym<span>System</span></h2>
      </div>

      <nav className="sidebar-menu">
        <Link 
          to="/admin" 
          className={`menu-item ${location.pathname === '/admin' ? 'active' : ''}`}
        >
          Dashboard
        </Link>
        
        <Link 
          to="/alunos" 
          className={`menu-item ${location.pathname === '/alunos' ? 'active' : ''}`}
        >
          Alunos
        </Link>
        
        <Link to="/planos" className="menu-item">Planos</Link>
        <Link to="/grade" className="menu-item">Grade de Aulas</Link>
      </nav>

      <div className="sidebar-footer">
        <button className="logout-button">Sair</button>
      </div>
    </div>
  );
}

export default Sidebar;