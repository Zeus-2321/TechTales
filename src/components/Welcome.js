import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

export default function Welcome() {
  const [isSignup, setIsSignup] = useState(false);

  fetch('https://techtales-backend.onrender.com');

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f4f9',
      }}
    >
      <div
        style={{
          width: '400px',
          padding: '2rem',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        {isSignup ? (
          <Signup toggle={() => setIsSignup(false)} />
        ) : (
          <Login toggle={() => setIsSignup(true)} />
        )}
      </div>
    </div>
  );
}
