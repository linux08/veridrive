import React, { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Nigeria Export', href: '#calculator' },
    { label: 'Find My Car', href: '#find-my-car' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        transition: 'background 0.3s, box-shadow 0.3s',
        background: scrolled ? 'rgba(13,31,48,0.97)' : 'transparent',
        boxShadow: scrolled ? '0 1px 24px rgba(0,0,0,0.25)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <Logo size={36} />
          <span style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 18, color: 'white', letterSpacing: '0.04em' }}>
            VERI<span style={{ color: 'var(--gold)' }}>DRIVE</span>
          </span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="hide-mobile">
          {links.map(l => (
            <a key={l.label} href={l.href} className="nav-link">{l.label}</a>
          ))}
          <a href="#find-my-car" className="btn-gold" style={{ padding: '10px 20px', fontSize: 12 }}>
            Get Started
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'none' }}
          className="show-mobile"
        >
          <div style={{ width: 22, height: 2, background: 'white', marginBottom: 5, transition: 'transform 0.2s', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
          <div style={{ width: 22, height: 2, background: 'white', marginBottom: 5, opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
          <div style={{ width: 22, height: 2, background: 'white', transition: 'transform 0.2s', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: 'rgba(13,31,48,0.98)', padding: '16px 24px 24px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          {links.map(l => (
            <a key={l.label} href={l.href} className="nav-link" style={{ display: 'block', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: 15 }} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#find-my-car" className="btn-gold" style={{ marginTop: 16, display: 'inline-flex', fontSize: 13 }} onClick={() => setMenuOpen(false)}>
            Get Started
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
