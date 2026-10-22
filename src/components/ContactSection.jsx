import { ArrowUpRight, MessageCircle } from 'lucide-react';
import RevealGroup from './RevealGroup.jsx';

function ContactSection({ onInquiry }) {
  return (
    <section aria-labelledby="contact-title" className="contact-section" id="contact">
      <RevealGroup className="contact-layout">
        <div><span className="eyebrow"><MessageCircle size={14} /> GOOD PROJECTS START WITH A HELLO</span><h2 id="contact-title">What are you<br />thinking about?</h2><p>A new brand, a better website, or just a thought you can’t shake. We’d love to hear it.</p></div>
        <div className="contact-action"><button className="button" onClick={onInquiry} type="button">Tell us about it <ArrowUpRight size={17} /></button><small>No pitch deck required.</small></div>
      </RevealGroup>
    </section>
  );
}

export default ContactSection;