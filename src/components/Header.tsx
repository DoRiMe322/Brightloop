import type { Theme } from '../hooks/useTheme';

export default function Header({ theme, onToggle }: { theme: Theme; onToggle: () => void }) {
  return (
    <header className="bar">
      <div className="wrap">
        <span className="logo">Bright<i>loop</i></span>
        <nav aria-label="Main">
          <a href="#courses">Courses</a><a href="#how">How it works</a><a href="#pricing">Pricing</a><a href="#faq">FAQ</a>
        </nav>
        <div className="acts">
          <button className="pill icon" type="button" onClick={onToggle} aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
            <svg className="moon" viewBox="0 0 24 24"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
            <svg className="sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
          </button>
          <a className="pill fill" href="#courses">Start free</a>
        </div>
      </div>
    </header>
  );
}
