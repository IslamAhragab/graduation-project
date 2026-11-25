import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

export default function App() {
  const [page, setPage] = useState('landing'); // 'landing' | 'login' | 'signup'

  return (
    <>
      {page === 'landing' && (
        <LandingPage onNavigateAuth={(mode) => setPage(mode)} />
      )}

      {page === 'login' && (
        <Login onSwitchToSignUp={() => setPage('signup')} />
      )}

      {page === 'signup' && (
        <SignUp onSwitchToLogin={() => setPage('login')} />
      )}
    </>
  );
}