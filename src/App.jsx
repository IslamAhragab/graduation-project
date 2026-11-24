import React, { useState } from 'react';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

export default function App() {
  const [currentPage, setCurrentPage] = useState('login');

  return currentPage === 'login' ? (
    <Login onSwitchToSignUp={() => setCurrentPage('signup')} />
  ) : (
    <SignUp onSwitchToLogin={() => setCurrentPage('login')} />
  );
}