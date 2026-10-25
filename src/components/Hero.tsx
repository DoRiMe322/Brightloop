import { useState } from 'react';
import { LANGS, type LangKey } from '../data';
import CodeCard from './CodeCard';
import { Note } from './Tooltip';

interface Props { lang: LangKey; onLang: (k: LangKey) => void; }

export default function Hero({ lang, onLang }: Props) {
  const [opening, setOpening] = useState(false);
  const [signal, setSignal] = useState(0);

  const tryLesson = () => {
    setOpening(true);
    window.setTimeout(() => {
      document.getElementById('demo')?.scrollIntoView({ block: 'center' });
      setOpening(false);
      setSignal((s) => s + 1);
    }, 600);
  };

  return (
    <div className="wrap hero">
      <div>
        <h1>Learn <span className="word">{LANGS[lang].n}</span> by building real things.</h1>
        <p className="lead" style={{ marginTop: '1.2rem' }}>
          Short lessons, hands-on <Note text="Every course ends with a project you can put in a portfolio.">projects</Note> and an
          editor that runs in your browser. Pick a language and see how it reads.
        </p>
        <div className="chips" role="group" aria-label="Choose a language">
          {(Object.keys(LANGS) as LangKey[]).map((k) => (
            <button key={k} type="button" className="pill sm" aria-pressed={k === lang} onClick={() => onLang(k)}>{LANGS[k].n}</button>
          ))}
        </div>
        <div className="cta">
          <button className="pill fill" type="button" disabled={opening} onClick={tryLesson}>
            {opening ? 'Opening lesson…' : 'Try a lesson now'}
          </button>
          <a className="pill" href="#courses">Browse courses</a>
        </div>
      </div>
      <CodeCard lang={lang} runSignal={signal} />
    </div>
  );
}
