import React, { useState } from 'react';
import './alunos.css';

function Alunos() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para o modal
  const [alunos, setAlunos] = useState([
    { id: 1, nome: 'João Silva', email: 'joao@email.com', plano: 'Premium', status: 'Ativo' },
    { id: 2, nome: 'Maria Souza', email: 'maria@email.com', plano: 'Basic', status: 'Inativo' },
    { id: 3, nome: 'Pedro Álvares', email: 'pedro@email.com', plano: 'Premium', status: 'Ativo' },
    { id: 4, nome: 'Ana Costa', email: 'ana@email.com', plano: 'Black', status: 'Ativo' },
  ]);

  return (
    <>
      <div className="alunos-container">
        <div className="alunos-header">
          <h2>Gestão de Alunos</h2>
          <button className="add-button" onClick={() => setIsModalOpen(true)}>
            + Novo Aluno
          </button>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Buscar aluno por nome ou e-mail..." />
        </div>

        <div className="table-wrapper">
          <table className="alunos-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Plano</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {alunos.map((aluno) => (
                <tr key={aluno.id}>
                  <td>#{aluno.id}</td>
                  <td>{aluno.nome}</td>
                  <td>{aluno.email}</td>
                  <td>{aluno.plano}</td>
                  <td>
                    <span className={`status-badge ${aluno.status.toLowerCase()}`}>
                      {aluno.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn-edit">Editar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* O MODAL FICA AQUI FORA DA CONTAINER */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Cadastrar Novo Aluno</h3>
            <form className="modal-form">
              <div className="form-group">
                <label>Nome Completo</label>
                <input type="text" placeholder="Ex: João Silva" />
              </div>
              <div className="form-group">
                <label>E-mail</label>
                <input type="email" placeholder="email@exemplo.com" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Plano</label>
                  <select>
                    <option>Basic</option>
                    <option>Premium</option>
                    <option>Black</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <select>
                    <option>Ativo</option>
                    <option>Inativo</option>
                  </select>
                </div>
              </div>
              <div className="modal-actions">
                <button type="button" className="btn-cancel" onClick={() => setIsModalOpen(false)}>
                  Cancelar
                </button>
                <button type="submit" className="btn-save">Salvar Aluno</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Alunos;