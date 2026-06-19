import React, { useState } from 'react';
import { Send, CheckCircle, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';

// ─── EmailJS setup (one-time, ~5 min) ────────────────────────────────────────
// 1. emailjs.com → sign up free (200 emails/month included)
// 2. Email Services → Add Service → Gmail → connect veridriveus@gmail.com
//    → copy the Service ID below
// 3. Email Templates → Create New Template
//    Set "To email" → veridriveus@gmail.com
//    Paste this as the template body:
//      New VeriDrive Request
//      Service: {{service_type}}
//      Name: {{name}}
//      Email: {{from_email}}
//      Phone: {{phone}}
//      WhatsApp: {{whatsapp}}
//      Vehicle: {{year}} {{make}} {{model}}
//      Budget: {{budget}}
//      Notes: {{notes}}
//    → copy the Template ID below
// 4. Account → General → Public Key → copy below
// ─────────────────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_ck0g2yr';
const EMAILJS_TEMPLATE_ID = 'template_a49htop';
const EMAILJS_PUBLIC_KEY  = 'zIvsTFIbzyFRVKcA3';

export default function FindMyCar() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', whatsapp: '',
    make: '', model: '', year: '', budget: '',
    type: 'local', notes: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const templateParams = {
      service_type: form.type === 'export' ? 'Nigeria Export' : 'Local Sourcing (Seattle)',
      name:         form.name,
      from_email:   form.email,
      phone:        form.phone  || '—',
      whatsapp:     form.whatsapp || '—',
      make:         form.make,
      model:        form.model || '—',
      year:         form.year  || '—',
      budget:       form.budget,
      notes:        form.notes || '—',
    };

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section id="find-my-car" style={{ background: 'var(--navy-dark)', padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: 'linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div style={{ maxWidth: 780, margin: '0 auto', position: 'relative', zIndex: 2, textAlign: 'center', padding: '60px 32px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,76,0.25)', borderRadius: 16 }}>
          <CheckCircle size={52} style={{ color: 'var(--gold)', marginBottom: 20 }} />
          <h3 style={{ fontSize: 24, fontWeight: 700, color: 'white', margin: '0 0 12px' }}>Request Received</h3>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', maxWidth: 400, margin: '0 auto', lineHeight: 1.7 }}>
            We'll review your request and reach out within 24 hours via WhatsApp or email with your shortlist.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="find-my-car" style={{ background: 'var(--navy-dark)', padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: 'linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div style={{ maxWidth: 780, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{ marginBottom: 52, textAlign: 'center' }}>
          <span className="section-label">Get Started</span>
          <span className="gold-line" style={{ display: 'block', margin: '12px auto 16px', transformOrigin: 'center' }} />
          <h2 style={{ fontFamily: 'Inter', fontSize: 'clamp(32px, 4vw, 46px)', fontWeight: 700, color: 'white', margin: '0 0 16px', lineHeight: 1.2 }}>
            Find My Car
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: 480, margin: '0 auto' }}>
            Tell us what you want. We'll send you a curated shortlist within 72 hours — verified, priced, and ready.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: '44px 40px', display: 'flex', flexDirection: 'column', gap: 24 }}>

          {/* Service type toggle */}
          <div>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.5)', marginBottom: 10, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Service Type
            </label>
            <div style={{ display: 'flex', gap: 0, borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.12)' }}>
              {[
                { value: 'local', label: 'Local Sourcing (Seattle)' },
                { value: 'export', label: 'Nigeria Export' },
              ].map(opt => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => set('type', opt.value)}
                  style={{
                    flex: 1, padding: '12px 16px', fontSize: 13, fontWeight: 600, cursor: 'pointer', border: 'none',
                    background: form.type === opt.value ? 'var(--gold)' : 'rgba(255,255,255,0.04)',
                    color: form.type === opt.value ? 'var(--navy-dark)' : 'rgba(255,255,255,0.5)',
                    transition: 'all 0.2s',
                    fontFamily: 'Inter',
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Name + email */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <label style={labelStyle}>Full Name *</label>
              <input required className="vd-input" placeholder="David Adeyemi" value={form.name} onChange={e => set('name', e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Email *</label>
              <input required type="email" className="vd-input" placeholder="you@email.com" value={form.email} onChange={e => set('email', e.target.value)} />
            </div>
          </div>

          {/* Phone + WhatsApp */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <label style={labelStyle}>Phone</label>
              <input className="vd-input" placeholder="+1 (206) 555-0000" value={form.phone} onChange={e => set('phone', e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>WhatsApp Number</label>
              <input className="vd-input" placeholder="+234 or +1 number" value={form.whatsapp} onChange={e => set('whatsapp', e.target.value)} />
            </div>
          </div>

          {/* Make + model + year */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
            <div>
              <label style={labelStyle}>Make *</label>
              <div style={{ position: 'relative' }}>
                <select required className="vd-select" value={form.make} onChange={e => set('make', e.target.value)}>
                  <option value="">Select</option>
                  {['Toyota','Lexus','Honda','Acura','Nissan','Hyundai','Mercedes','BMW','Ford','Chevrolet'].map(m => <option key={m}>{m}</option>)}
                  <option value="other">Other</option>
                </select>
                <span style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#9BAFC4', fontSize: 11 }}>▼</span>
              </div>
            </div>
            <div>
              <label style={labelStyle}>Model</label>
              <input className="vd-input" placeholder="Camry, RX 350..." value={form.model} onChange={e => set('model', e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Preferred Year</label>
              <input className="vd-input" placeholder="2018–2022" value={form.year} onChange={e => set('year', e.target.value)} />
            </div>
          </div>

          {/* Budget */}
          <div>
            <label style={labelStyle}>Budget Range (USD) *</label>
            <div style={{ position: 'relative' }}>
              <select required className="vd-select" value={form.budget} onChange={e => set('budget', e.target.value)}>
                <option value="">Select your budget</option>
                <option>Under $10,000</option>
                <option>$10,000 – $15,000</option>
                <option>$15,000 – $20,000</option>
                <option>$20,000 – $30,000</option>
                <option>$30,000 – $45,000</option>
                <option>$45,000+</option>
              </select>
              <span style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#9BAFC4', fontSize: 11 }}>▼</span>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label style={labelStyle}>Additional Notes</label>
            <textarea className="vd-textarea" placeholder="Any specific requirements — color, mileage limit, features, urgency, etc." value={form.notes} onChange={e => set('notes', e.target.value)} />
          </div>

          {status === 'error' && (
            <p style={{ fontSize: 13, color: '#f87171', textAlign: 'center', margin: 0 }}>
              Something went wrong. Please try again or message us on WhatsApp.
            </p>
          )}

          <button
            type="submit"
            className="btn-gold"
            disabled={status === 'sending'}
            style={{ justifyContent: 'center', fontSize: 14, padding: '16px 32px', opacity: status === 'sending' ? 0.7 : 1 }}
          >
            {status === 'sending'
              ? <><Loader size={15} style={{ animation: 'spin 1s linear infinite' }} /> Sending…</>
              : <><Send size={15} /> Submit Request</>
            }
          </button>

          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center', margin: 0 }}>
            We respond within 24 hours. No spam, no pressure.
          </p>
        </form>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 600px) {
          #find-my-car form { padding: 28px 20px !important; }
          #find-my-car form > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          #find-my-car form > div[style*="grid-template-columns: 1fr 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

const labelStyle = {
  display: 'block',
  fontSize: 12, fontWeight: 700,
  color: 'rgba(255,255,255,0.5)',
  marginBottom: 6,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
};
