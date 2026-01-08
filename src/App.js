import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';

/**
 * SELLSHARP - HIGH FIDELITY RECREATION
 * Built with React + Pure CSS
 * Features: Landing Page, Login, and Signup
 */

const App = () => {
  const [currentPage, setCurrentPage] = useState('landing');

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {currentPage === 'landing' && <Home navigate={navigate} />}
      {currentPage === 'login' && <LoginPage navigate={navigate} />}
      {currentPage === 'signup' && <SignupPage navigate={navigate} />}
    </>
  );
};

export default App;