import { ArrowUpRight } from 'lucide-react';
import RevealGroup from './RevealGroup.jsx';

const services = [
  { number: '01', title: 'Graphic design', copy: 'Visual communication with a clear point of view, from campaign assets to everyday brand touchpoints.', image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=900&q=85', alt: 'Colorful graphic design layout on a screen' },
  { number: '02', title: 'Web design', copy: 'Expressive, intuitive websites that make your story easy to find, explore, and remember.', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85', alt: 'Web designer working at a laptop' },
  { number: '03', title: 'Branding', copy: 'Distinctive identities with the strategy, visual language, and consistency to grow with you.', image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=85', alt: 'Colorful brand identity and packaging concepts' },
  { number: '04', title: 'Motion designs', copy: 'Bring stories to life with purposeful movement, animated graphics, and digital moments.', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=85', alt: 'Colorful retro visual artwork' },
  { number: '05', title: 'Illustration', copy: 'Original characters, scenes, and visual details that make your ideas feel unmistakably yours.', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85', alt: 'An artist painting a colorful illustration' },
  { number: '06', title: 'Printing', copy: 'Thoughtful print finishes and production that bring your design into the real world.', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85', alt: 'Printed books and stationery arranged on a desk' },
];

function ServicesSection({ onInquiry }) {
  return (
    <section aria-labelledby="services-title" className="section services-section" id="services">
      <RevealGroup className="section-heading">
        <div><span className="eyebrow">SIX WAYS TO MAKE YOUR MARK</span><h2 className="section-title" id="services-title">Design, in all<br />the right <em>forms.</em></h2></div>
        <p>From the first sketch to the final screen, explore a catalog of creative services built to make your brand stand out.</p>
      </RevealGroup>
      <RevealGroup className="services-list">
        {services.map(({ number, title, copy, image, alt }, index) => (
          <article className="service-card" key={number} style={{ '--reveal-index': index }}>
            <div className="service-cover">
              <img alt={alt} loading="lazy" src={image} />
              <span className="service-index">{number}</span>
              <button aria-label={`Start a ${title} project`} className="service-cta" onClick={onInquiry} title={`Start a ${title} project`} type="button"><ArrowUpRight size={19} /></button>
            </div>
            <div className="service-details"><h3>{title}</h3><p>{copy}</p></div>
          </article>
        ))}
      </RevealGroup>
    </section>
  );
}

export default ServicesSection;