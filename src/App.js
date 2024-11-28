import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Homepage  from './components/Homepage';
import PostBlog from './components/PostBlog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/post-blog" element={<PostBlog />} />
      </Routes>
    </Router>
  );
}

export default App;
