import React from 'react';
import { MessageSquare, Search, ClipboardCheck, Truck, CheckCircle } from 'lucide-react';

const steps = [
  { num: '01', icon: <MessageSquare size={22} />, title: 'Tell Us What You Want', desc: 'Fill out our Find My Car form — make, model, budget, condition, and any special requirements. Takes 2 minutes.' },
  { num: '02', icon: <Search size={22} />, title: 'We Source & Shortlist', desc: 'Within 72 hours we search Seattle lots, online listings, and our dealer network. You get a curated shortlist of verified options.' },
  { num: '03', icon: <ClipboardCheck size={22} />, title: 'Inspection & Verification', desc: 'We run a full VIN and Carfax check on every option. We coordinate an independent mechanic inspection on your chosen vehicle.' },
  { num: '04', icon: <Truck size={22} />, title: 'Coordination & Export', desc: 'For Nigeria exports, we handle freight forwarding, documentation, and give you a full landed cost breakdown before you pay anything.' },
  { num: '05', icon: <CheckCircle size={22} />, title: 'You Drive With Confidence', desc: 'Every step is documented and communicated. You know exactly what you\'re getting, what it costs, and when it arrives.' },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ background: 'var(--navy-dark)', padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
      {/* BG texture */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: 'linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{ marginBottom: 72, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <span className="section-label">The Process</span>
            <span className="gold-line" style={{ display: 'block', marginTop: 12, marginBottom: 16 }} />
            <h2 style={{ fontFamily: 'Inter', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: 'white', margin: 0, lineHeight: 1.2 }}>
              How VeriDrive Works
            </h2>
          </div>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', maxWidth: 340, lineHeight: 1.7, margin: 0 }}>
            Every deal follows the same verified, transparent process — whether you're in Seattle or Lagos.
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                display: 'flex', alignItems: 'flex-start', gap: 32,
                padding: '32px 0',
                borderBottom: i < steps.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}
            >
              {/* Number + icon */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 12,
                  background: i === 0 ? 'var(--gold)' : 'rgba(201,168,76,0.1)',
                  border: `1px solid ${i === 0 ? 'var(--gold)' : 'rgba(201,168,76,0.25)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: i === 0 ? 'var(--navy-dark)' : 'var(--gold)',
                }}>
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <div style={{ flex: 1, paddingTop: 6 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--gold)', letterSpacing: '0.14em', opacity: 0.6 }}>{step.num}</span>
                  <h3 style={{ fontSize: 19, fontWeight: 700, color: 'white', margin: 0 }}>{step.title}</h3>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(255,255,255,0.5)', margin: 0, maxWidth: 560 }}>
                  {step.desc}
                </p>
              </div>

              {/* Connector for desktop */}
              {i < steps.length - 1 && (
                <div style={{ display: 'none' }} className="step-arrow" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop: 64, padding: '40px', background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <h3 style={{ fontSize: 22, fontWeight: 700, color: 'white', margin: '0 0 6px' }}>Ready to get started?</h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', margin: 0 }}>We respond to every inquiry within 24 hours.</p>
          </div>
          <a href="#find-my-car" className="btn-gold">Find My Car →</a>
        </div>
      </div>
    </section>
  );
}
