import { ArrowUpRight, MessageCircle } from 'lucide-react';
import RevealGroup from './RevealGroup.jsx';

const currentYear = new Date().getFullYear();

function Wordmark() {
  return <span className="wordmark"><img alt="" className="wordmark-logo" src="/logo.png" /><span>opennode</span></span>;
}

function SiteFooter({ onInquiry }) {
  return (
    <footer className="site-footer">
      <RevealGroup className="footer-main">
        <div className="footer-brand"><a aria-label="OpenNode home" href="#home"><Wordmark /></a><p>Independent by design. Open to what’s next.</p></div>
        <nav aria-label="Footer navigation" className="footer-links"><a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a><button onClick={onInquiry} type="button"><MessageCircle size={14} /> Start a project <ArrowUpRight size={14} /></button></nav>
      </RevealGroup>
      <RevealGroup className="footer-bottom"><span>© {currentYear} OpenNode Studio</span><a href="#home">Back to top ↑</a><span>Made with intention.</span></RevealGroup>
    </footer>
  );
}

export default SiteFooter;