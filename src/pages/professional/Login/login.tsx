import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);

    // Validación de la contraseña (ejemplo: al menos 8 caracteres)
    setIsPasswordValid(value.length >= 8);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);

    // Validación del email usando una expresión regular simple
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(value));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (isPasswordValid && isEmailValid) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <div className="form-container">
          <h1>TurnoSync <span>Login</span></h1>
          <p>Access your account to manage your business or schedule appointments</p>
          <form onSubmit={handleSubmit}>
            <div className="login-input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                required
              />
              {!isEmailValid && (
                <p className="error-message">Please enter a valid email address.</p>
              )}
            </div>
            <div className="login-input-group">
              <label htmlFor="password">Password</label>
              <div className="password-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <i className="fa fa-eye-slash"></i>
                  ) : (
                    <i className="fa fa-eye"></i>
                  )}
                </button>
              </div>
              {!isPasswordValid && (
                <p className="error-message">Password must be at least 8 characters.</p>
              )}
            </div>
            <button className="login-button" type="submit">Login</button>
          </form>
          <div className="login-footer">
            <p>Don't have an account? <span onClick={() => navigate('/professional/register')}>Sign up</span></p>
          </div>
        </div>
        <div className="illustration">
          <img src="/public/assets/illustration.png" alt="Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Login;
