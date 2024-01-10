import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update import statements

import Signup from './components/Signup';
import Agreement from './components/Agreement';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/agreement" element={<Agreement />} />
          {/* Add more routes for other pages if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
