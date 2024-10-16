import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup'); // Redirige a la página de registro
  };

  return (
    <div className="login-box">
      <h2>Iniciar Sesión</h2>
      <form>
        <div className="user-box">
          <input type="text" name="username" required placeholder="Nombre de Usuario" />
        </div>
        <div className="user-box">
          <input type="password" name="password" required placeholder="Contraseña" />
        </div>
        <button type="submit">Iniciar Sesión</button>
        <button type="button" onClick={handleSignUpClick} style={{ backgroundColor: 'wine', marginTop: '10px' }}>
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Login;
