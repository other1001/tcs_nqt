export default function Navbar({ activePage, onChange, theme, onToggleTheme }) {
  return (
    <header className="top-nav">
      <div className="top-nav-inner">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-text">TCS NQT</span>
        </div>

        <nav className="nav-links" aria-label="Primary">
          <button type="button" className={`nav-link ${activePage === 'journey' ? 'active' : ''}`} onClick={() => onChange('journey')}>
            Exam-Job Journey
          </button>
          <button type="button" className={`nav-link ${activePage === 'nqt' ? 'active' : ''}`} onClick={() => onChange('nqt')}>
            NQT Exam Specific
          </button>
          <button type="button" className={`nav-link ${activePage === 'cs' ? 'active' : ''}`} onClick={() => onChange('cs')}>
            CS Fundamentals
          </button>
          <button type="button" className={`nav-link ${activePage === 'sql' ? 'active' : ''}`} onClick={() => onChange('sql')}>
            SQL prep plan
          </button>
          <button type="button" className="nav-link nav-theme-toggle" onClick={onToggleTheme} aria-label="Toggle light and dark mode">
            {theme === 'light' ? 'Dark mode' : 'Light mode'}
          </button>
        </nav>
      </div>
    </header>
  );
}
