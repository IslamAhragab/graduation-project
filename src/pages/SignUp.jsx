import React, { useState } from 'react';
import './SignUp.css';

export default function SignUp({ onSwitchToLogin }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreedTerms, setAgreedTerms] = useState(false);

  // حساب قوة كلمة المرور تلقائياً
  const getPasswordStrength = (pwd) => {
    if (!pwd) return { score: 0, label: '', color: '#e2e8f0' };
    let score = 0;
    if (pwd.length >= 6) score++;
    if (pwd.length >= 8 && /[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;

    if (score <= 1) return { score: 1, label: 'Weak', color: '#ef4444' };
    if (score === 2) return { score: 2, label: 'Fair', color: '#f59e0b' };
    if (score === 3) return { score: 3, label: 'Good Strength', color: '#1d9bf0' };
    return { score: 4, label: 'Strong Password', color: '#10b981' };
  };

  const strength = getPasswordStrength(password);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreedTerms) {
      alert('Please accept the Terms of Service and Privacy Architecture first.');
      return;
    }
    console.log('Creating account:', { fullName, email, password, agreedTerms });
    alert(`Welcome to Travel Vibes, ${fullName}! Your account has been created.`);
  };

  return (
    <div className="page-wrapper">
      <div className="signup-card">
        {/* القسم الأيسر: نموذج إنشاء الحساب */}
        <div className="signup-left-panel">
          <div className="signup-form-container">
            <div className="brand-header">
              <div className="brand-logo">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="url(#signupLogoGrad)" />
                  <path d="M8 14L15 8L13 16L11 13L8 14Z" fill="#ffffff" />
                  <defs>
                    <linearGradient id="signupLogoGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#38BDF8" />
                      <stop offset="1" stopColor="#6366F1" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="brand-name">Travel Vibes</span>
            </div>

            <h2 className="signup-title">Create Your Account</h2>
            <p className="signup-subtitle">
              Start engineering intelligent, predictive, and multi-agent travel journeys.
            </p>

            {/* أزرار التسجيل السريع جنب بعض */}
            <div className="signup-social-row">
              <button type="button" className="btn-social-half btn-google">
                <svg width="17" height="17" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" />
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.14C3.26 21.3 7.31 24 12 24z" />
                  <path fill="#FBBC05" d="M5.28 14.24c-.24-.72-.38-1.49-.38-2.24s.14-1.52.38-2.24V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.99-3.14z" />
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.99 3.14c.95-2.85 3.6-4.96 6.72-4.96z" />
                </svg>
                <span>Continue with Google</span>
              </button>

              <button type="button" className="btn-social-half btn-apple">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <span>Continue with Apple</span>
              </button>
            </div>

            <div className="divider">
              <span>OR REGISTER WITH EMAIL</span>
            </div>

            <form onSubmit={handleSubmit} className="signup-form">
              {/* حقل الاسم الكامل */}
              <div className="input-group">
                <label htmlFor="fullName">Full Name</label>
                <div className="input-wrapper">
                  <span className="input-icon">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </span>
                  <input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>

              {/* حقل البريد الإلكتروني */}
              <div className="input-group">
                <label htmlFor="signupEmail">Email Address</label>
                <div className="input-wrapper">
                  <span className="input-icon">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>
                  <input
                    id="signupEmail"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    required
                  />
                </div>
              </div>

              {/* حقل إنشاء كلمة المرور + مؤشر القوة */}
              <div className="input-group">
                <div className="password-label-row">
                  <label htmlFor="signupPassword">Create Password</label>
                  {password && (
                    <span className="strength-label" style={{ color: strength.color }}>
                      ● {strength.label}
                    </span>
                  )}
                </div>

                <div className="input-wrapper">
                  <span className="input-icon">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                    </svg>
                  </span>
                  <input
                    id="signupPassword"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create a strong password"
                    required
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>

                {/* شريط قوة كلمة المرور (4 أجزاء) */}
                <div className="strength-bars">
                  {[1, 2, 3, 4].map((step) => (
                    <div
                      key={step}
                      className="strength-segment"
                      style={{
                        backgroundColor: strength.score >= step ? strength.color : '#e2e8f0',
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Checkbox الموافقة على الشروط */}
              <div className="terms-row">
                <label className="checkbox-container terms-label">
                  <input
                    type="checkbox"
                    checked={agreedTerms}
                    onChange={(e) => setAgreedTerms(e.target.checked)}
                  />
                  <span>
                    By continuing, you accept Travel Vibes's{' '}
                    <a href="#terms" onClick={(e) => e.preventDefault()}>Terms of Service</a>,{' '}
                    <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Architecture</a>, and Neural Profiling.
                  </span>
                </label>
              </div>

              <button type="submit" className="btn-submit btn-create-account">
                <span>Create My Account</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </form>

            <p className="signup-prompt">
              Already have an account?{' '}
              <a
                href="#signin"
                onClick={(e) => {
                  e.preventDefault();
                  onSwitchToLogin();
                }}
              >
                Sign In
              </a>
            </p>
          </div>
        </div>

        {/* القسم الأيمن: كولاج السفر والطيارة */}
        <div className="signup-right-panel">
          <div className="collage-container">
            <div className="photo-card card-plane">
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80"
                alt="Airplane Wing Above Clouds"
              />
            </div>

            <div className="photo-card card-globe-resort">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
                alt="Tropical Beach Destination"
              />
            </div>

            <div className="photo-card card-passport">
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=500&q=80"
                alt="World Map and Travel"
              />
            </div>

            <div className="photo-card card-skyline">
              <img
                src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80"
                alt="Explore Cities"
              />
            </div>
          </div>

          <div className="signup-overlay-gradient"></div>

          <div className="left-content">
            <h1>Explore the world</h1>
            <p className="hero-subtitle">
              Discover new destinations, plan unforgettable journeys, and
              experience the world like never before.
            </p>

            <div className="feature-badges">
              <div className="glass-badge">
                <div className="badge-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <div className="badge-text">
                  <strong>Neural Profile Caching</strong>
                  <span>Zero latency multi-agent reasoning</span>
                </div>
              </div>

              <div className="glass-badge">
                <div className="badge-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                </div>
                <div className="badge-text">
                  <strong>Global Travel Sync</strong>
                  <span>100% verified live partner inventory</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}