import React from 'react';
import { Shield, CheckCircle, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #04102D 0%, #081B4B 55%, #0A2260 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Background grid */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04,
        backgroundImage: 'linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Radial glow */}
      <div style={{
        position: 'absolute', top: '20%', right: '5%',
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-10%', left: '-5%',
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(26,60,94,0.6) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '120px 24px 80px', width: '100%', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: 680 }}>
          {/* Tag */}
          <div className="animate-fade-up" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: 99, padding: '6px 16px', marginBottom: 32 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)' }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--gold)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Seattle, WA · Verified Sourcing
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up-d1" style={{ fontFamily: 'Inter', fontSize: 'clamp(42px, 6vw, 72px)', lineHeight: 1.08, color: 'white', margin: '0 0 8px', fontWeight: 800 }}>
            Your Car.
          </h1>
          <h1 className="animate-fade-up-d2" style={{ fontFamily: 'Inter', fontSize: 'clamp(42px, 6vw, 72px)', lineHeight: 1.08, margin: '0 0 32px', fontWeight: 800 }}>
            <span className="gold-shimmer">Verified.</span>
          </h1>

          <p className="animate-fade-up-d3" style={{ fontSize: 'clamp(16px, 2vw, 19px)', lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', maxWidth: 520, margin: '0 0 48px' }}>
            We source, inspect, and verify used vehicles across the United States and coordinate cross-border exports. No scams. No hidden costs. Just confidence in every transaction.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up-d4" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#find-my-car" className="btn-gold">
              Find My Car
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#how-it-works" className="btn-outline">
              How It Works
            </a>
          </div>

          {/* Trust badges */}
          <div className="animate-fade-up-d5" style={{ display: 'flex', gap: 28, marginTop: 56, flexWrap: 'wrap' }}>
            {[
              { icon: <Shield size={15} />, text: 'VIN Verified' },
              { icon: <CheckCircle size={15} />, text: 'Inspection Guaranteed' },
              { icon: <Globe size={15} />, text: 'Nigeria Export Ready' },
            ].map(({ icon, text }) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ color: 'var(--gold)' }}>{icon}</span>
                <span style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.02em' }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating card */}
        <div className="animate-float animate-fade-in" style={{
          position: 'absolute', right: 24, top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,76,0.2)',
          backdropFilter: 'blur(16px)', borderRadius: 12,
          padding: '28px 32px', minWidth: 260,
          display: 'flex', flexDirection: 'column', gap: 20,
        }} className="hero-card animate-float animate-fade-in">
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 4 }}>
            Sample Report
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 2 }}>Vehicle</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: 'white' }}>2019 Lexus RX 350</div>
            </div>
            <div style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 99, padding: '4px 12px' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#4ade80', textTransform: 'uppercase', letterSpacing: '0.06em' }}>GOOD</span>
            </div>
          </div>
          {[
            { label: 'Title Status', value: 'Clean ✓', ok: true },
            { label: 'Accident History', value: 'None ✓', ok: true },
            { label: 'Odometer', value: '48,765 mi', ok: true },
            { label: 'Frame / Structure', value: 'Verified ✓', ok: true },
          ].map(({ label, value, ok }) => (
            <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: 12 }}>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>{label}</span>
              <span style={{ fontSize: 12, fontWeight: 600, color: ok ? '#4ade80' : '#f87171' }}>{value}</span>
            </div>
          ))}
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', textAlign: 'center', marginTop: -4 }}>
            VeriDrive Inspection Report
          </div>
        </div>
      </div>


<style>{`
        @media (max-width: 900px) {
          .hero-card { display: none !important; }
        }
      `}</style>
    </section>
  );
}
