
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/PageNavbar';
import IndexPage from './Components/IndexPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<IndexPage />} />
      </Routes>
    </div>
  );
}

export default App;
