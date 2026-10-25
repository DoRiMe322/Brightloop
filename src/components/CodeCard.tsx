import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { KEYWORDS, LANGS, type LangKey } from '../data';

const NOTE = /\[\[(.+?)\|(.+?)\]\]/g;

function Segment({ text }: { text: string }) {
  const parts = text.split(/("[^"]*"|`[^`]*`|\b[A-Za-z_]\w*\b|\d+)/);
  return (
    <>
      {parts.map((t, i) => {
        if (!t) return null;
        const cls = /^["`]/.test(t) ? 's' : /^\d/.test(t) ? 'n' : KEYWORDS.test(t) ? 'k' : '';
        return cls ? <span key={i} className={cls}>{t}</span> : t;
      })}
    </>
  );
}

function Code({ source }: { source: string }) {
  const nodes: ReactNode[] = [];
  let last = 0;
  for (const m of source.matchAll(NOTE)) {
    const i = m.index ?? 0;
    nodes.push(<Segment key={`s${i}`} text={source.slice(last, i)} />);
    nodes.push(<button key={`n${i}`} type="button" className="tok" data-note={m[2]}>{m[1]}</button>);
    last = i + m[0].length;
  }
  nodes.push(<Segment key="end" text={source.slice(last)} />);
  return <>{nodes}</>;
}

export default function CodeCard({ lang, runSignal }: { lang: LangKey; runSignal: number }) {
  const l = LANGS[lang];
  const [lines, setLines] = useState<string[]>([]);
  const [running, setRunning] = useState(false);
  const [ran, setRan] = useState(false);
  const [copyLabel, setCopyLabel] = useState('Copy');
  const timer = useRef<number>();

  const run = useCallback(() => {
    window.clearTimeout(timer.current);
    setLines([]);
    setRunning(true);
    setRan(true);
    let i = 0;
    const step = () => {
      if (i >= l.out.length) { setRunning(false); return; }
      const next = l.out[i++];
      setLines((prev) => [...prev, next]);
      timer.current = window.setTimeout(step, 320);
    };
    step();
  }, [l]);

  useEffect(() => {
    window.clearTimeout(timer.current);
    setLines([]); setRunning(false); setRan(false);
  }, [lang]);
  useEffect(() => { if (runSignal) run(); }, [runSignal]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(l.code.replace(/\[\[(.+?)\|.+?\]\]/g, '$1'));
      setCopyLabel('Copied');
    } catch {
      setCopyLabel('Copy failed');
    }
    window.setTimeout(() => setCopyLabel('Copy'), 1600);
  };

  return (
    <div className="card code" id="demo">
      <div className="ch">
        <span>{l.f}</span>
        <span>
          <button className="pill sm" type="button" onClick={copy}>{copyLabel}</button>{' '}
          <button className="pill sm run" type="button" disabled={running} onClick={run}>
            {running ? 'Running…' : ran ? 'Run again' : 'Run'}
          </button>
        </span>
      </div>
      <pre tabIndex={0} aria-label="Code sample"><Code source={l.code} /></pre>
      <div className="out" aria-live="polite">{lines.join('\n')}</div>
    </div>
  );
}
