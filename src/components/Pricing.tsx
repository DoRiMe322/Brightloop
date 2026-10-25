import { useState } from 'react';
import { PLANS } from '../data';

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  const [picked, setPicked] = useState<string | null>(null);
  return (
    <section id="pricing" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <h2>Simple pricing</h2>
        <div className="sw">
          <span>Monthly</span>
          <button type="button" role="switch" aria-checked={yearly} className={`pill sm${yearly ? ' on' : ''}`} onClick={() => setYearly((y) => !y)}>
            Yearly, save 20%
          </button>
        </div>
        <div className="plans">
          {PLANS.map((p) => (
            <div key={p.name} className={`card plan-c${p.popular ? ' pop' : ''}`}>
              <h3>{p.name}</h3>
              <div className="price">
                €{yearly ? p.y : p.m} {p.unit && <small>{p.unit}{p.popular && <sup><a href="#fn2" id="r2">2</a></sup>}</small>}
              </div>
              <ul>{p.perks.map((perk) => <li key={perk}>{perk}</li>)}</ul>
              <button type="button" className={`pill plan-b${p.popular ? ' fill' : ''}${picked === p.name ? ' on' : ''}`} onClick={() => setPicked(p.name)}>
                {picked === p.name ? `Selected: ${p.name}` : p.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
