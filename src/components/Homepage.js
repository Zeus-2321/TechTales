import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchBlogs } from '../utils/api';

export default function Homepage() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getBlogs = async () => {
      const response = await fetchBlogs();
      setBlogs(response);
    };
    getBlogs();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/';
  };

  return (
    <div className="homepage-container">
      <div className="header">
        <h1>TechTales</h1>
        <button
          onClick={() => navigate('/post-blog')}
          className="post-btn"
        >
          Post a Blog
        </button>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
      <div className="blog-list">
        {blogs?.length === 0 ? (
          <p>No blogs available. Be the first to post one!</p>
        ) : (
          blogs?.map((blog, index) => (
            <div key={index} className="blog-item">
              <div className="blog-header">
                <div className="author-info">
                  <div className="profile-pic">
                    {/* Profile placeholder */}
                    <img
                      src={blog.authorProfilePic || 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'}
                      alt={`${blog.author}'s profile`}
                    />
                  </div>
                  <span className="author-name">{blog.user.firstName}</span>
                </div>
                <span className="blog-date">{new Date(blog.createdAt).toLocaleDateString()}</span>
              </div>
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-content">{blog.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}