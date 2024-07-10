import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Whiskeys from './pages/Whiskeys';
import Members from './pages/Members'; 
import GalleryPage from './pages/GalleryPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/whiskeys" element={<Whiskeys />} />
        <Route path="/members" element={<Members />} /> 
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
