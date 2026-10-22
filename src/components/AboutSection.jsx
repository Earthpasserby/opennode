import { ArrowUpRight } from 'lucide-react';
import RevealGroup from './RevealGroup.jsx';

function AboutSection() {
  return (
    <section aria-labelledby="about-title" className="section about-section" id="about">
      <RevealGroup className="about-layout">
        <div className="about-visual">
          <img alt="Creative designer working on a colorful studio project" loading="lazy" src="https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&w=1200&q=85" />
          <span className="about-note">Curious by nature.<br />Intentional by design.</span>
        </div>
        <div className="about-copy">
          <span className="eyebrow">A LITTLE ABOUT OPENNODE</span>
          <h2 className="section-title" id="about-title">We connect<br />the dots between<br /><em>you and them.</em></h2>
          <p>OpenNode is an independent creative studio for ambitious people with something meaningful to put into the world. We get close to the heart of your business, then find the clearest, most compelling way to bring it to life.</p>
          <p>Thoughtful collaboration, good questions, and plenty of attention to the details: that’s how we make work that feels like you, only more you.</p>
          <div className="about-values"><span>Strategy first</span><span>Made together</span><span>Built to last</span></div>
          <a className="hero-link" href="#contact">Get to know us <ArrowUpRight size={16} /></a>
        </div>
      </RevealGroup>
    </section>
  );
}

export default AboutSection;