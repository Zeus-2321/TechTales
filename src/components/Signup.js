import React, { useState } from 'react';

export default function Signup({ toggle }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    alert('Signup successful!');
    toggle();
  };

  return (
    <form onSubmit={handleSignup}>
      <h2 style={{ textAlign: 'center' }}>Sign Up</h2>
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
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        style={{ ...inputStyle }}
      />
      <button type="submit" style={{ ...buttonStyle }}>
        Sign Up
      </button>
      <p style={{ textAlign: 'center', marginTop: '1rem' }}>
        Already have an account?{' '}
        <span onClick={toggle} style={{ color: '#007bff', cursor: 'pointer' }}>
          Login
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
