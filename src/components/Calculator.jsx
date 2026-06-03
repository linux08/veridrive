import React, { useState } from 'react';
import { Calculator, Info } from 'lucide-react';

const FREIGHT_RATES = {
  sedan: 1800,
  suv: 2400,
  truck: 2800,
  van: 2600,
};

const PORT_FEE = 450;
const INSPECTION_FEE = 250;
const CLEARING_AGENT = 600;
const LAST_MILE = 150;
const CUSTOMS_RATE = 0.35; // ~35% of CIF value (simplified)

function formatUSD(n) {
  return '$' + Math.round(n).toLocaleString();
}

export default function Calculator_() {
  const [carPrice, setCarPrice] = useState('');
  const [type, setType] = useState('sedan');
  const [port, setPort] = useState('lagos');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const price = parseFloat(carPrice.replace(/,/g, ''));
    if (!price || isNaN(price)) return;

    const freight = FREIGHT_RATES[type] + (port === 'port-harcourt' ? 200 : 0);
    const portFee = PORT_FEE;
    const cifValue = price + freight + portFee;
    const customsDuty = Math.round(cifValue * CUSTOMS_RATE);
    const clearing = CLEARING_AGENT;
    const lastMile = LAST_MILE;
    const total = price + freight + portFee + customsDuty + clearing + lastMile + INSPECTION_FEE;

    setResult({
      carPrice: price,
      freight,
      portFee,
      inspection: INSPECTION_FEE,
      customsDuty,
      clearing,
      lastMile,
      total,
    });
  };

  const lineItems = result ? [
    { label: 'Vehicle purchase price', amount: result.carPrice, note: 'Your cost' },
    { label: 'US-side freight / port handling', amount: result.portFee, note: 'At Seattle/Tacoma port' },
    { label: 'Pre-export inspection', amount: result.inspection, note: 'VeriDrive inspection' },
    { label: 'Ocean freight (container)', amount: result.freight, note: 'Seattle → Nigeria' },
    { label: 'Nigeria customs & import duty', amount: result.customsDuty, note: '~35% of CIF value' },
    { label: 'Clearing agent fee', amount: result.clearing, note: 'Port clearance' },
    { label: 'Last-mile delivery', amount: result.lastMile, note: 'To your door' },
  ] : [];

  return (
    <section id="calculator" style={{ background: 'var(--cream)', padding: '100px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>

        {/* Left: context */}
        <div>
          <span className="section-label">Nigeria Export</span>
          <span className="gold-line" style={{ display: 'block', marginTop: 12, marginBottom: 16 }} />
          <h2 style={{ fontFamily: 'DM Serif Display', fontSize: 'clamp(32px, 4vw, 46px)', fontWeight: 400, color: 'var(--navy-dark)', margin: '0 0 20px', lineHeight: 1.2 }}>
            True Landed Cost Calculator
          </h2>
          <p style={{ fontSize: 16, color: '#5A7A96', lineHeight: 1.75, margin: '0 0 32px' }}>
            Know exactly what a vehicle will cost you before you pay a single dollar. Enter the car price and we estimate every cost from Seattle to your door in Nigeria.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              'No hidden fees — see every line item',
              'Includes customs duty, freight, clearing, and delivery',
              'Updated regularly to reflect current shipping rates',
              'Free to use — no sign-up required',
            ].map(p => (
              <div key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <span style={{ color: 'var(--gold)', fontSize: 18, lineHeight: 1, marginTop: 1 }}>✓</span>
                <span style={{ fontSize: 14, color: '#4A6A84', lineHeight: 1.6 }}>{p}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 36, padding: '16px 20px', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)', borderRadius: 8, display: 'flex', gap: 10 }}>
            <Info size={16} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: 2 }} />
            <p style={{ fontSize: 12, color: '#6A8AA4', margin: 0, lineHeight: 1.6 }}>
              <strong style={{ color: 'var(--navy)' }}>Disclaimer:</strong> These are estimates based on typical rates. Actual costs vary by vehicle value, port, and current duty schedules. Contact us for an exact quote.
            </p>
          </div>
        </div>

        {/* Right: calculator */}
        <div style={{ background: 'white', border: '1px solid #E4EEF7', borderRadius: 16, padding: '36px 32px', boxShadow: '0 8px 40px rgba(26,60,94,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
            <div style={{ width: 40, height: 40, background: 'var(--navy-dark)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Calculator size={18} style={{ color: 'var(--gold)' }} />
            </div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--navy-dark)' }}>Cost Estimator</div>
              <div style={{ fontSize: 12, color: '#9BAFC4' }}>Seattle → Nigeria</div>
            </div>
          </div>

          {/* Inputs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 24 }}>
            <div>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--navy)', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Vehicle Purchase Price (USD)
              </label>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', fontSize: 15, color: '#9BAFC4', fontWeight: 600 }}>$</span>
                <input
                  className="vd-input"
                  style={{ paddingLeft: 28 }}
                  placeholder="15,000"
                  value={carPrice}
                  onChange={e => setCarPrice(e.target.value)}
                  type="text"
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--navy)', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Vehicle Type
              </label>
              <div style={{ position: 'relative' }}>
                <select className="vd-select" value={type} onChange={e => setType(e.target.value)}>
                  <option value="sedan">Sedan (Camry, Accord, etc.)</option>
                  <option value="suv">SUV / Crossover (Lexus RX, Highlander, etc.)</option>
                  <option value="truck">Truck / Large SUV</option>
                  <option value="van">Van / Minivan</option>
                </select>
                <span style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#9BAFC4', fontSize: 12 }}>▼</span>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--navy)', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Destination Port
              </label>
              <div style={{ position: 'relative' }}>
                <select className="vd-select" value={port} onChange={e => setPort(e.target.value)}>
                  <option value="lagos">Lagos (Apapa / Tin Can)</option>
                  <option value="port-harcourt">Port Harcourt</option>
                </select>
                <span style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#9BAFC4', fontSize: 12 }}>▼</span>
              </div>
            </div>
          </div>

          <button className="btn-gold" style={{ width: '100%', justifyContent: 'center', marginBottom: 28 }} onClick={calculate}>
            Calculate Total Cost
          </button>

          {/* Results */}
          {result && (
            <div style={{ borderTop: '1px solid #E4EEF7', paddingTop: 24 }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9BAFC4', marginBottom: 16 }}>
                Cost Breakdown
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {lineItems.map(({ label, amount, note }) => (
                  <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
                    <div>
                      <div style={{ fontSize: 13, color: 'var(--navy-dark)', fontWeight: 500 }}>{label}</div>
                      <div style={{ fontSize: 11, color: '#9BAFC4' }}>{note}</div>
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--navy)', whiteSpace: 'nowrap' }}>{formatUSD(amount)}</span>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: '2px solid var(--navy-dark)', marginTop: 16, paddingTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: 11, color: '#9BAFC4', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Estimated Total</div>
                  <div style={{ fontSize: 26, fontWeight: 800, color: 'var(--navy-dark)' }}>{formatUSD(result.total)}</div>
                </div>
                <a href="#find-my-car" className="btn-gold" style={{ fontSize: 12, padding: '10px 18px' }}>
                  Get Exact Quote
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #calculator > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
