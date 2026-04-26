import React from 'react';
import './Dashboard.css';

function Dashboard() {
  // Dados fictícios para a tabela (depois vira banco de dados)
  const alunos = [
    { id: 1, nome: 'João Silva', plano: 'Premium', status: 'Ativo' },
    { id: 2, nome: 'Maria Souza', plano: 'Basic', status: 'Inativo' },
    { id: 3, nome: 'Pedro Alvares', plano: 'Premium', status: 'Ativo' },
  ];

  return (
    <div className="dashboard-content">
      <header className="dashboard-header">
        <h1>Bem-vindo ao Dashboard</h1>
        <p>Aqui está o resumo da sua academia hoje.</p>
      </header>

      {/* Seção de Cards */}
      <div className="cards-grid">
        <div className="card">
          <h3>Total de Alunos</h3>
          <p className="card-value">124</p>
        </div>
        <div className="card">
          <h3>Ativos</h3>
          <p className="card-value" style={{ color: '#10B981' }}>110</p>
        </div>
        <div className="card">
          <h3>Novas Matrículas</h3>
          <p className="card-value" style={{ color: '#60A5FA' }}>12</p>
        </div>
      </div>

      {/* Seção da Tabela */}
      <div className="table-container">
        <h2>Listagem de Alunos</h2>
        <table className="alunos-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Plano</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {alunos.map((aluno) => (
              <tr key={aluno.id}>
                <td>{aluno.id}</td>
                <td>{aluno.nome}</td>
                <td>{aluno.plano}</td>
                <td>
                  <span className={`status-badge ${aluno.status.toLowerCase()}`}>
                    {aluno.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;