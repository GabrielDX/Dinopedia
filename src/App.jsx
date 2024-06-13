import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import DinosaurList from './components/DinosaurList';
import DinosaurDetail from './components/DinosaurDetail';
import Timeline from './components/Timeline';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const svgRef = useRef(null);

  useEffect(() => {
    const svgElement = svgRef.current;
    if (svgElement) {
      svgElement.addEventListener('click', toggleDarkMode);
      return () => {
        svgElement.removeEventListener('click', toggleDarkMode);
      };
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
    document.body.style.setProperty("--dark-mode", darkMode ? 0 : 1);
  };

  return (
    <Router>
      {/* Botão darkmode SVG */}
      <div className={darkMode ? 'container dark' : 'container'}>
        <svg viewBox="0 0 400 400" className="color-mode" ref={svgRef}>
          <circle r="195" cx="200" cy="200" fill="white" stroke="#000" strokeWidth="10" />
          <path d="M 200 375 A 175 175 0 0 1 200 25" />
          <path d="M 200 300 A 100 100 0 0 1 200 100" fill="#FFF" />
          <path d="M 200 100 A 100 100 180 0 1 200 300" />
        </svg>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dinosaurs" element={<DinosaurList />} />
          <Route path="/dinosaurs/:id" element={<DinosaurDetail />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
