import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Homepage  from './components/Homepage';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Welcome />} /> */}
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
