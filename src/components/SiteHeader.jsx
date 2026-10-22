import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

function Wordmark() {
  return <span className="wordmark"><img alt="" className="wordmark-logo" src="/logo.png" /><span>opennode</span></span>;
}

function SiteHeader({ onInquiry }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a aria-label="OpenNode home" href="#home" onClick={closeMenu}><Wordmark /></a>
      <button aria-expanded={menuOpen} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} type="button">
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      <nav aria-label="Main navigation" className={`site-nav ${menuOpen ? 'is-open' : ''}`}>
        <a href="#work" onClick={closeMenu}>Work</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <button className="nav-cta" onClick={() => { closeMenu(); onInquiry(); }} type="button">Start a project <ArrowUpRight size={16} /></button>
      </nav>
    </header>
  );
}

export default SiteHeader;