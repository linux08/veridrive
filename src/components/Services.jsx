import React from 'react';
import { Search, Shield, Globe, FileText } from 'lucide-react';

const services = [
  {
    icon: <Search size={24} />,
    title: 'Vehicle Sourcing',
    subtitle: 'Local & USA-wide',
    desc: 'Tell us what you want. We search, compare, and shortlist verified options across Seattle lots and nationwide listings within 72 hours.',
    fee: 'From $150',
    points: ['Toyota, Lexus, Honda focus', 'Carfax & VIN check included', 'Negotiation support'],
  },
  {
    icon: <Shield size={24} />,
    title: 'Inspection & Verification',
    subtitle: '150+ point check',
    desc: "We coordinate a trusted independent mechanic inspection on any vehicle before you commit — so you know exactly what you're buying.",
    fee: 'Add-on service',
    points: ['Independent mechanic only', 'Full written report', 'Photos & video walkthrough'],
  },
  {
    icon: <Globe size={24} />,
    title: 'Nigeria Export',
    subtitle: 'Seattle → Lagos',
    desc: 'We coordinate the full export process for Nigerian diaspora buyers — from sourcing to freight forwarding, documentation, and landed cost estimates.',
    fee: 'From $400',
    points: ['VIN & title verification', 'Freight forwarder coordination', 'Real landed cost breakdown'],
    featured: true,
  },
  {
    icon: <FileText size={24} />,
    title: 'Premium Concierge',
    subtitle: 'End-to-end service',
    desc: 'Our full-service package for buyers who want us to handle everything — sourcing, verification, negotiation, export, and communication.',
    fee: 'From $800',
    points: ['Dedicated point of contact', 'WhatsApp updates at every step', 'Post-purchase support'],
  },
];

export default function Services() {
  return (
    <section id="services" style={{ background: 'var(--cream)', padding: '100px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <span className="section-label">What We Do</span>
          <span className="gold-line" style={{ display: 'block', marginTop: 12, marginBottom: 16 }} />
          <h2 style={{ fontFamily: 'Inter', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: 'var(--navy-dark)', margin: 0, maxWidth: 520, lineHeight: 1.2 }}>
            Our Services
          </h2>
          <p style={{ fontSize: 17, color: '#5A7A96', marginTop: 16, maxWidth: 480, lineHeight: 1.7 }}>
            We are not a dealership. We are the trusted layer above the marketplace — sourcing, verifying, and coordinating on your behalf.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
          {services.map((s) => (
            <div
              key={s.title}
              className="card-hover"
              style={{
                background: s.featured ? 'var(--navy-dark)' : 'white',
                border: s.featured ? '1px solid rgba(201,168,76,0.4)' : '1px solid #E4EEF7',
                borderRadius: 12,
                padding: '32px 28px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {s.featured && (
                <div style={{ position: 'absolute', top: 16, right: 16, background: 'var(--gold)', color: 'var(--navy-dark)', fontSize: 10, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 99 }}>
                  Most Popular
                </div>
              )}
              {/* Icon */}
              <div style={{
                width: 52, height: 52, borderRadius: 10,
                background: s.featured ? 'rgba(201,168,76,0.15)' : 'var(--slate)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--gold)', marginBottom: 20,
              }}>
                {s.icon}
              </div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 6 }}>
                {s.subtitle}
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: s.featured ? 'white' : 'var(--navy-dark)', margin: '0 0 12px' }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: s.featured ? 'rgba(255,255,255,0.6)' : '#5A7A96', margin: '0 0 24px' }}>
                {s.desc}
              </p>
              {/* Points */}
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {s.points.map(pt => (
                  <li key={pt} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: s.featured ? 'rgba(255,255,255,0.7)' : '#4A6A84', fontWeight: 500 }}>
                    <span style={{ color: 'var(--gold)', fontSize: 16, lineHeight: 1 }}>✓</span>
                    {pt}
                  </li>
                ))}
              </ul>
              {/* Fee */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: `1px solid ${s.featured ? 'rgba(255,255,255,0.1)' : '#E4EEF7'}`, paddingTop: 20 }}>
                <span style={{ fontSize: 18, fontWeight: 800, color: s.featured ? 'var(--gold-light)' : 'var(--navy)' }}>{s.fee}</span>
                <a href="#find-my-car" style={{ fontSize: 12, fontWeight: 700, color: s.featured ? 'var(--gold)' : 'var(--navy)', textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Get Started →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
