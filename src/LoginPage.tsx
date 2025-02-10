// login-app/src/LoginPage.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    navigate("/"); 
  };

  return (
    <div className="login-container">
      <h2>Tela de Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" placeholder="Digite seu email" required />
        </div>
        <div>
          <label>Senha:</label>
          <input type="password" placeholder="Digite sua senha" required />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default LoginPage;
