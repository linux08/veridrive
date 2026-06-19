import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import Logo from './Logo';

export default function Contact() {
  return (
    <>
      <section id="contact" style={{ background: 'var(--cream)', padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>

            {/* Left */}
            <div>
              <span className="section-label">Contact</span>
              <span className="gold-line" style={{ display: 'block', marginTop: 12, marginBottom: 16 }} />
              <h2 style={{ fontFamily: 'DM Serif Display', fontSize: 'clamp(32px, 4vw, 46px)', fontWeight: 400, color: 'var(--navy-dark)', margin: '0 0 20px', lineHeight: 1.2 }}>
                Talk to a Real Person
              </h2>
              <p style={{ fontSize: 16, color: '#5A7A96', lineHeight: 1.75, margin: '0 0 40px', maxWidth: 420 }}>
                We respond to every message. No bots, no runaround. If you have a question about sourcing, exporting, or whether VeriDrive is right for you — reach out.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { icon: <MessageCircle size={18} />, label: 'WhatsApp', value: '+234 816 654 4879', note: 'Fastest response' },
                  { icon: <Mail size={18} />, label: 'Email', value: 'veridriveus@gmail.com', note: 'Replies within 24 hours' },
                  { icon: <MapPin size={18} />, label: 'Location', value: 'Seattle, Washington', note: 'Serving Seattle metro + nationwide' },
                ].map(({ icon, label, value, note }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                    <div style={{ width: 44, height: 44, background: 'var(--navy-dark)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)', flexShrink: 0 }}>
                      {icon}
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 2 }}>{label}</div>
                      <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--navy-dark)' }}>{value}</div>
                      <div style={{ fontSize: 12, color: '#9BAFC4' }}>{note}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/2348166544879"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  marginTop: 36,
                  background: '#25D366', color: 'white',
                  fontFamily: 'Inter', fontWeight: 700, fontSize: 14,
                  padding: '13px 24px', borderRadius: 6,
                  textDecoration: 'none', letterSpacing: '0.02em',
                  transition: 'transform 0.15s, background 0.2s',
                }}
              >
                <MessageCircle size={16} />
                Message Us on WhatsApp
              </a>
            </div>

            {/* Right: trust block */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { num: '72 hrs', label: 'Sourcing Turnaround', desc: 'From intake form to verified shortlist.' },
                { num: '100%', label: 'Upfront Transparency', desc: 'Full cost breakdown before you commit.' },
                { num: '$0', label: 'Hidden Fees', desc: 'What you see is what you pay.' },
              ].map(({ num, label, desc }) => (
                <div key={label} style={{ background: 'white', border: '1px solid #E4EEF7', borderRadius: 12, padding: '28px 28px', display: 'flex', gap: 20, alignItems: 'flex-start' }} className="card-hover">
                  <div style={{ fontSize: 32, fontWeight: 800, color: 'var(--navy)', fontFamily: 'Inter', lineHeight: 1, minWidth: 72 }}>{num}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--navy-dark)', marginBottom: 4 }}>{label}</div>
                    <div style={{ fontSize: 13, color: '#7A9AB4', lineHeight: 1.6 }}>{desc}</div>
                  </div>
                </div>
              ))}

              <div style={{ background: 'var(--navy-dark)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 12, padding: '28px 28px' }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--gold)', marginBottom: 12 }}>VeriDrive Promise</div>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, margin: 0 }}>
                  "We don't just find you a car. We verify it, so you can trust it. Every vehicle we recommend has gone through our process — or we won't recommend it."
                </p>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            #contact > div > div { grid-template-columns: 1fr !important; gap: 40px !important; }
          }
        `}</style>
      </section>

      {/* Footer */}
      <footer style={{ background: 'var(--navy-dark)', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '40px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
            <Logo size={28} />
            <span style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 15, color: 'white', letterSpacing: '0.06em' }}>
              VERI<span style={{ color: 'var(--gold)' }}>DRIVE</span>
            </span>
          </a>
          <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
            {['Services', 'How It Works', 'Nigeria Export', 'Find My Car', 'Contact'].map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(/ /g, '-')}`} className="nav-link" style={{ fontSize: 13 }}>{l}</a>
            ))}
          </div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
            © 2026 VeriDrive · Seattle, WA · veridrive.autos
          </div>
        </div>
      </footer>
    </>
  );
}
