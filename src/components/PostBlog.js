import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PostBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePostBlog = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://techtales-backend.onrender.com/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        },
        body: JSON.stringify({ title, content }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Blog posted successfully!');
        navigate('/home');
      } else {
        setError(data.message || 'Failed to post the blog.');
      }
    } catch {
      setError('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="post-blog-container">
      <h2>Post a New Blog</h2>
      <form onSubmit={handlePostBlog}>
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="input-field"
        />
        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="textarea-field"
        ></textarea>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button
          type="submit"
          className="submit-btn"
          disabled={loading}
        >
          {loading ? 'Posting...' : 'Post Blog'}
        </button>
      </form>
    </div>
  );
}