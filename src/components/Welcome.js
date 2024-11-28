import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Welcome() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f9',
      }}
    >
      <div
        style={{
          padding: '2rem',
          maxWidth: '400px',
          width: '100%',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          textAlign: 'center',
        }}
      >
        <h2>{isSignup ? 'Create an Account' : 'Welcome Back!'}</h2>
        <p style={{ marginBottom: '1rem', color: '#666' }}>
          {isSignup
            ? 'Sign up to start your journey with us.'
            : 'Login to continue to your account.'}
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(isSignup ? 'Signup successful!' : 'Login successful!');
          }}
        >
          <input
            type="email"
            placeholder="Email"
            required
            style={{
              display: 'block',
              width: '100%',
              padding: '0.8rem',
              margin: '0.5rem 0',
              border: '1px solid #ddd',
              borderRadius: '5px',
              fontSize: '1rem',
            }}
          />
          <input
            type="password"
            placeholder="Password"
            required
            style={{
              display: 'block',
              width: '100%',
              padding: '0.8rem',
              margin: '0.5rem 0',
              border: '1px solid #ddd',
              borderRadius: '5px',
              fontSize: '1rem',
            }}
          />
          {isSignup && (
            <input
              type="password"
              placeholder="Confirm Password"
              required
              style={{
                display: 'block',
                width: '100%',
                padding: '0.8rem',
                margin: '0.5rem 0',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '1rem',
              }}
            />
          )}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.8rem',
              margin: '1rem 0',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              fontSize: '1rem',
              cursor: 'pointer',
            }}
          >
            {isSignup ? 'Sign Up' : 'Login'}
          </button>
        </form>

        <p>
          {isSignup
            ? 'Already have an account?'
            : "Don't have an account?"}{' '}
          <span
            onClick={() => setIsSignup(!isSignup)}
            style={{ color: '#007bff', cursor: 'pointer', fontWeight: 'bold' }}
          >
            {isSignup ? 'Login' : 'Sign Up'}
          </span>
        </p>
      </div>
    </div>
  );
}
