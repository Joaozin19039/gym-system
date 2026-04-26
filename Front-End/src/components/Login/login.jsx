import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Importamos o "navegador"
import './Login.css';

function Login() {
  const navigate = useNavigate(); // 2. Inicializamos a função de navegação

  const handleLogin = (e) => {
    e.preventDefault(); // Evita que a página recarregue ao clicar no botão
    
    // Por enquanto, vamos apenas navegar direto para o admin.
    // Futuramente, aqui você fará a validação de e-mail e senha.
    navigate('/admin'); 
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Se você tiver a logo, pode colocar o <img> aqui */}
        <h2>Acesse sua conta</h2>
        
        <form onSubmit={handleLogin}> {/* 3. Usamos o form para capturar o clique no botão */}
          <div className="input-group">
            <input type="email" placeholder="Usuário (e-mail)" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Senha" required />
          </div>
          
          <button type="submit" className="login-button">Entrar</button>
        </form>
        
        <a href="#" className="forgot-password">Esqueceu a senha?</a>
      </div>
    </div>
  );
}

export default Login;