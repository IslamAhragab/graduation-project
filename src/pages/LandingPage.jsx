import React, { useState, useEffect } from 'react';
import './LandingPage.css';

const DESTINATIONS = [
  {
    id: 1,
    city: 'Paris, France',
    tag: 'City & Culture',
    duration: '5 Days',
    match: '98% Match',
    image:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    city: 'Cappadocia, Türkiye',
    tag: 'Sunrise & Adventure',
    duration: '4 Days',
    match: '96% Match',
    image:
      'https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    city: 'Giza, Egypt',
    tag: 'Ancient Heritage',
    duration: '3 Days',
    match: '95% Match',
    image:
      'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    city: 'Dolomites, Italy',
    tag: 'Alpine Trails',
    duration: '6 Days',
    match: '94% Match',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
  },
];

export default function LandingPage({ onNavigateAuth }) {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [scrolled, setScrolled] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % DESTINATIONS.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const currentSlide = DESTINATIONS[activeSlide];

  const filters = [
    'All',
    'City & Culture',
    'Sunrise & Adventure',
    'Ancient Heritage',
    'Alpine Trails',
  ];

  const filteredDestinations =
    selectedFilter === 'All'
      ? DESTINATIONS
      : DESTINATIONS.filter((item) => item.tag === selectedFilter);

  const goAuth = (mode = 'signup') => {
    if (typeof onNavigateAuth === 'function') {
      onNavigateAuth(mode);
    }
  };

  return (
    <div className="tv-landing">
      {/* شريط التنقل العلوي */}
      <header className={`tv-navbar ${scrolled ? 'tv-navbar-scrolled' : ''}`}>
        <div className="tv-brand">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="url(#tvLogoGrad)" />
            <path d="M8 14L15 8L13 16L11 13L8 14Z" fill="#ffffff" />
            <defs>
              <linearGradient
                id="tvLogoGrad"
                x1="2"
                y1="2"
                x2="22"
                y2="22"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#E2A4B5" />
                <stop offset="1" stopColor="#1D9BF0" />
              </linearGradient>
            </defs>
          </svg>
          <span>Travel Vibes</span>
        </div>

        <nav className="tv-nav-links">
          <a href="#features">Features</a>
          <a href="#destinations">Destinations</a>
          <a href="#how-it-works">How It Works</a>
        </nav>

        <div className="tv-nav-actions">
          <button
            type="button"
            className="tv-btn-ghost"
            onClick={() => goAuth('login')}
          >
            Sign In
          </button>
          <button
            type="button"
            className="tv-btn-primary"
            onClick={() => goAuth('signup')}
          >
            Get Started
          </button>
        </div>
      </header>

      {/* القسم الرئيسي Hero */}
      <section className="tv-hero">
        <div className="tv-hero-copy">
          <span className="tv-pill">✨ Smart Personalized Travel Planner</span>
          <h1>
            Explore the world with <span>hyper-personalized</span> journeys.
          </h1>
          <p>
            Discover new destinations, plan unforgettable itineraries, and sync
            live travel inventory in seconds—tailored to your pace, budget, and
            vibe.
          </p>

          <div className="tv-hero-cta">
            <button
              type="button"
              className="tv-btn-primary tv-btn-lg"
              onClick={() => goAuth('signup')}
            >
              Start Planning Free →
            </button>
            <a href="#destinations" className="tv-btn-secondary">
              Explore Destinations
            </a>
          </div>

          <div className="tv-metrics">
            <div>
              <strong>120+</strong>
              <span>Global Destinations</span>
            </div>
            <div>
              <strong>&lt; 50ms</strong>
              <span>Neural Profile Caching</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Verified Live Inventory</span>
            </div>
          </div>
        </div>

        <div
          className="tv-hero-visual"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="tv-hero-card main-card">
            <img
              key={currentSlide.id}
              src={currentSlide.image}
              alt={currentSlide.city}
              className="tv-slide-img"
            />
            <div className="tv-hero-card-caption">
              <div>
                <strong>{currentSlide.city}</strong>
                <div className="tv-slide-sub">{currentSlide.tag}</div>
              </div>
              <span>
                {currentSlide.duration} • {currentSlide.match}
              </span>
            </div>
          </div>

          <div className="tv-slide-dots">
            {DESTINATIONS.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Show ${item.city}`}
                className={`tv-dot ${idx === activeSlide ? 'active' : ''}`}
                onClick={() => setActiveSlide(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* قسم المزايا */}
      <section id="features" className="tv-section">
        <div className="tv-section-head">
          <h2>Built for effortless, intelligent travel</h2>
          <p>
            Everything you need from initial inspiration to real-time trip
            updates.
          </p>
        </div>

        <div className="tv-features-grid">
          <article className="tv-feature-card">
            <div className="tv-icon-box">⚡</div>
            <h3>Neural Profile Caching</h3>
            <p>
              Zero-latency multi-agent reasoning remembers your travel style,
              dining preferences, and comfort zones across every trip.
            </p>
          </article>

          <article className="tv-feature-card">
            <div className="tv-icon-box">🌐</div>
            <h3>Global Travel Sync</h3>
            <p>
              Real-time updates and 100% verified live partner inventory so your
              schedule stays accurate before and during departure.
            </p>
          </article>

          <article className="tv-feature-card">
            <div className="tv-icon-box">🧭</div>
            <h3>Smart Day-by-Day Routes</h3>
            <p>
              Balanced itineraries that group nearby spots, optimize transit
              time, and leave room for spontaneous discoveries.
            </p>
          </article>
        </div>
      </section>

      {/* قسم الوجهات المقترحة */}
      <section id="destinations" className="tv-section tv-section-alt">
        <div className="tv-section-head">
          <h2>Curated destinations to spark your next trip</h2>
          <p>Filter by travel vibe and jump straight into planning.</p>
        </div>

        <div className="tv-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`tv-filter-btn ${
                selectedFilter === filter ? 'active' : ''
              }`}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="tv-destinations-grid">
          {filteredDestinations.map((dest) => (
            <div key={dest.id} className="tv-dest-card">
              <div className="tv-dest-img-wrap">
                <img src={dest.image} alt={dest.city} />
                <span className="tv-match-badge">{dest.match}</span>
              </div>
              <div className="tv-dest-body">
                <span className="tv-dest-tag">{dest.tag}</span>
                <h3>{dest.city}</h3>
                <div className="tv-dest-footer">
                  <span>{dest.duration}</span>
                  <button
                    type="button"
                    className="tv-link-btn"
                    onClick={() => goAuth('signup')}
                  >
                    Plan Trip →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* دعوة أخيرة لاتخاذ إجراء CTA */}
      <section id="how-it-works" className="tv-cta-banner">
        <div className="tv-cta-inner">
          <h2>Ready to turn your next idea into a complete itinerary?</h2>
          <p>
            Create your Travel Vibes profile in under a minute and start
            exploring.
          </p>
          <div className="tv-hero-cta">
            <button
              type="button"
              className="tv-btn-primary tv-btn-lg"
              onClick={() => goAuth('signup')}
            >
              Create Free Account
            </button>
            <button
              type="button"
              className="tv-btn-outline-light"
              onClick={() => goAuth('login')}
            >
              Sign In to Existing Account
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="tv-footer">
        <span>© 2026 Travel Vibes. All rights reserved.</span>
        <div className="tv-footer-links">
          <a href="#features">Features</a>
          <a href="#destinations">Destinations</a>
          <a href="#how-it-works">How It Works</a>
        </div>
      </footer>
    </div>
  );
}