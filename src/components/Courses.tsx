import { useState, type CSSProperties } from 'react';
import { CODES, COURSES, FILTERS, LANGS } from '../data';

interface Props { plan: number[]; onTogglePlan: (i: number) => void; }

export default function Courses({ plan, onTogglePlan }: Props) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All');
  const [saved, setSaved] = useState<number[]>([]);
  const toggleSaved = (i: number) => setSaved((s) => (s.includes(i) ? s.filter((x) => x !== i) : [...s, i]));
  const shown = COURSES.map((c, i) => ({ c, i })).filter(({ c }) => filter === 'All' || c.lv === filter || c.t === filter);

  return (
    <section id="courses">
      <div className="wrap">
        <h2>Pick your first course</h2>
        <p className="lead">Filter by level or goal, save the ones you like and build a plan. It adds up the hours for you.</p>
        <div className="filters" role="group" aria-label="Filter courses">
          {FILTERS.map((f) => (
            <button key={f} type="button" className="pill sm" aria-pressed={f === filter} onClick={() => setFilter(f)}>{f}</button>
          ))}
        </div>
        <p className="count" aria-live="polite">Showing {shown.length} {shown.length === 1 ? 'course' : 'courses'}</p>
        <div className="grid">
          {shown.map(({ c, i }) => (
            <div className="card course" key={c.n} style={{ '--c': LANGS[c.l].c } as CSSProperties}>
              <div className="badge">{CODES[c.l]}</div>
              <h3>{c.n}</h3>
              <p className="meta">{c.lv}, {c.t}, {c.ls} lessons, {c.h} hours</p>
              <div className="row">
                <button type="button" className="pill sm" aria-pressed={saved.includes(i)} onClick={() => toggleSaved(i)}>
                  {saved.includes(i) ? 'Saved' : 'Save'}
                </button>
                <button type="button" className="pill sm fill" aria-pressed={plan.includes(i)} onClick={() => onTogglePlan(i)}>
                  {plan.includes(i) ? 'Added to plan' : 'Add to plan'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
