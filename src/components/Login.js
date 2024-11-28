import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ toggle }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
    //   const response = await fetch('https://techtales-backend.onrender.com/api/auth/login', {
        const response = await fetch('https://cors-anywhere.herokuapp.com/https://techtales-backend.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('authToken', data.token);
        navigate('/home');
      } else {
        setError(data.message || 'Invalid credentials.');
      }
    } catch {
      setError('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2 style={{ textAlign: 'center' }}>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{ ...inputStyle }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={{ ...inputStyle }}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit" style={{ ...buttonStyle }} disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
      <p style={{ textAlign: 'center', marginTop: '1rem' }}>
        Don't have an account?{' '}
        <span onClick={toggle} style={{ color: '#007bff', cursor: 'pointer' }}>
          Sign Up
        </span>
      </p>
    </form>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.8rem',
  margin: '0.5rem 0',
  borderRadius: '5px',
  border: '1px solid #ddd',
};

const buttonStyle = {
  width: '100%',
  padding: '0.8rem',
  margin: '1rem 0',
  borderRadius: '5px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
};
