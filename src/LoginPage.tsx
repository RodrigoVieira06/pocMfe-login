import React from "react";
import './LoginPage.css'

const LoginPage: React.FC = () => {
  return (
    <div style={{
      border: "2px solid #1e3a8a",
      padding: "20px",
      width: "300px",
      margin: "auto",
      borderRadius: "8px"
    }}>
      <h2>Tela de Login</h2>
      <form>
        <div>
          <label>Email:</label>
          <br />
          <input type="email" placeholder="Digite seu email" style={{ width: "100%" }} />
        </div>
        <br />
        <div>
          <label>Senha:</label>
          <br />
          <input type="password" placeholder="Digite sua senha" style={{ width: "100%" }} />
        </div>
        <br />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default LoginPage;
