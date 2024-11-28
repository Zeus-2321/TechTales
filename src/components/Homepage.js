import React from 'react';

export default function Homepage() {
  const handleLogout = () => {
    alert('Logged out successfully!');
    window.location.href = '/'; // Redirect to Welcome page
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f9', minHeight: '100vh' }}>
      {/* Header */}
      <header
        style={{
          backgroundColor: '#007bff',
          color: '#fff',
          padding: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Blogging Platform</h1>
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: '#fff',
            color: '#007bff',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Logout
        </button>
      </header>

      {/* Main Content */}
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Welcome, User!</h2>
        <p style={{ color: '#666', marginBottom: '2rem' }}>
          Explore the latest blogs or share your thoughts with the world.
        </p>

        {/* Placeholder for Blog List */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1rem',
            padding: '1rem',
          }}
        >
          {[1, 2, 3, 4].map((blog) => (
            <div
              key={blog}
              style={{
                backgroundColor: '#fff',
                borderRadius: '10px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                padding: '1rem',
                textAlign: 'left',
              }}
            >
              <h3 style={{ margin: '0 0 0.5rem' }}>Blog Title {blog}</h3>
              <p style={{ color: '#666' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec viverra nisi.
              </p>
              <button
                style={{
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
