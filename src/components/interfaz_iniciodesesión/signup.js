import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); // Redirige a la página de inicio de sesión
  };

  return (
    <div className="signup-box">
      <h2>Registrarse</h2>
      <form>
        <div className="user-box">
          <label>Nombre</label>
          <input type="text" name="firstname" required />
        </div>
        <div className="user-box">
          <label>Apellido</label>
          <input type="text" name="lastname" required />
        </div>
        <div className="user-box">
          <label>Correo Electrónico</label>
          <input type="email" name="email" required />
        </div>
        <div className="user-box">
          <label>Contraseña</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">Registrarse</button>
        <button type="button" onClick={handleLoginClick} style={{ backgroundColor: '#800000', marginTop: '10px' }}>
          Regresar
        </button>
      </form>
    </div>
  );
};

export default SignUp;
