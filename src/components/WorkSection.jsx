import { ArrowUpRight } from 'lucide-react';
import RevealGroup from './RevealGroup.jsx';

const projects = [
  { name: 'Goodside', type: 'Identity concept · Everyday goods', label: 'IDENTITY CONCEPT', image: 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=1400&q=85', alt: 'Minimal skincare products arranged as a brand identity concept' },
  { name: 'Sunday Supply', type: 'Web development · Lifestyle brand', label: 'WEB DEVELOPMENT', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85', alt: 'Laptop displaying a polished web dashboard for a lifestyle brand' },
  { name: 'Form / Field', type: 'Illustration · Creative culture', label: 'ART DIRECTION', image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1000&q=85', alt: 'Colorful abstract artwork shaping an illustration-led art direction concept' },
];

function WorkSection() {
  return (
    <section aria-labelledby="work-title" className="section work-section" id="work">
      <RevealGroup className="section-heading">
        <div><span className="eyebrow">A FEW THINGS WE MAKE</span><h2 className="section-title" id="work-title">Good ideas deserve<br />good <em>design.</em></h2></div>
        <p>From the first spark to the final screen, we make the moving parts feel like they belong together.</p>
      </RevealGroup>
      <RevealGroup className="work-grid">
        {projects.map((project, index) => (
          <article className="work-card" key={project.name} style={{ '--reveal-delay': `${index * 110}ms` }}>
            <img alt={project.alt} className="work-image" loading="lazy" src={project.image} />
            <span className="work-tag">{project.label}</span>
            <span aria-hidden="true" className="work-project-index">0{index + 1} / 03</span>
            <div className="work-meta"><div><h3>{project.name}</h3><p>{project.type}</p></div><span aria-hidden="true" className="work-arrow"><ArrowUpRight size={19} /></span></div>
            <span aria-hidden="true" className="work-focus-line" />
          </article>
        ))}
      </RevealGroup>
      <div className="work-caption"><span>Independent concept explorations</span><span>Selected visual directions · 2025—26</span></div>
    </section>
  );
}

export default WorkSection;