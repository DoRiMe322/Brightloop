import { useEffect, useRef, type ReactNode } from 'react';

/** Inline term with a note shown by TooltipLayer. */
export function Note({ text, children }: { text: string; children: ReactNode }) {
  return (
    <button className="term" type="button" data-note={text}>
      {children}
    </button>
  );
}

/** One shared tooltip for every element with a data-note attribute. */
export function TooltipLayer() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const tip = ref.current;
    if (!tip) return;
    const find = (e: Event) => (e.target as HTMLElement).closest<HTMLElement>('[data-note]');
    const hide = () => tip.classList.remove('on');
    const show = (el: HTMLElement) => {
      tip.textContent = el.dataset.note ?? '';
      tip.classList.add('on');
      const r = el.getBoundingClientRect();
      const x = Math.min(Math.max(8, r.left + r.width / 2 - tip.offsetWidth / 2), window.innerWidth - tip.offsetWidth - 8);
      const above = r.top - tip.offsetHeight - 10;
      tip.style.left = `${x}px`;
      tip.style.top = `${above < 8 ? r.bottom + 10 : above}px`;
    };
    const onShow = (e: Event) => { const el = find(e); if (el) show(el); };
    const onOut = (e: Event) => { if (find(e)) hide(); };
    const onClick = (e: Event) => { const el = find(e); if (el) show(el); else hide(); };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') hide(); };
    document.addEventListener('mouseover', onShow);
    document.addEventListener('focusin', onShow);
    document.addEventListener('mouseout', onOut);
    document.addEventListener('focusout', hide);
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mouseover', onShow);
      document.removeEventListener('focusin', onShow);
      document.removeEventListener('mouseout', onOut);
      document.removeEventListener('focusout', hide);
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);
  return <div id="tip" role="tooltip" ref={ref} />;
}
