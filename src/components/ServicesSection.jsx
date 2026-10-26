import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import RevealGroup from './RevealGroup.jsx';
import ServiceCatalogDialog from './ServiceCatalogDialog.jsx';

const services = [
  {
    number: '01', title: 'Graphic design', copy: 'Visual communication with a clear point of view, from campaign assets to everyday brand touchpoints.',
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=900&q=85', alt: 'Colorful graphic design layout on a screen',
    designs: [
      { title: 'Campaign graphics', image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1500&q=85', alt: 'Colorful graphic design layout on a screen' },
      { title: 'Poster direction', image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1500&q=85', alt: 'Bold colorful event poster and graphic design' },
      { title: 'Abstract compositions', image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1500&q=85', alt: 'Bright abstract shapes arranged as a graphic composition' },
    ],
  },
  {
    number: '02', title: 'Web design', copy: 'Expressive, intuitive websites that make your story easy to find, explore, and remember.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85', alt: 'Web designer working at a laptop',
    designs: [
      { title: 'Digital storefront', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1500&q=85', alt: 'Laptop showing a clean digital dashboard interface' },
      { title: 'Website experience', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1500&q=85', alt: 'Designer building a website at a laptop' },
      { title: 'Responsive interface', image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1500&q=85', alt: 'Responsive website displayed across digital screens' },
    ],
  },
  {
    number: '03', title: 'Branding', copy: 'Distinctive identities with the strategy, visual language, and consistency to grow with you.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=85', alt: 'Colorful brand identity and packaging concepts',
    designs: [
      { title: 'Packaging identity', image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1500&q=85', alt: 'Colorful brand identity and packaging concepts' },
      { title: 'Product identity', image: 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=1500&q=85', alt: 'Skincare products arranged as a considered product identity' },
      { title: 'Brand system', image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1500&q=85', alt: 'Beauty product packaging with a cohesive brand system' },
    ],
  },
  {
    number: '04', title: 'Motion designs', copy: 'Bring stories to life with purposeful movement, animated graphics, and digital moments.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=85', alt: 'Colorful retro visual artwork',
    designs: [
      { title: 'Digital worlds', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1500&q=85', alt: 'Colorful digital arcade artwork with a retro visual style' },
      { title: 'Moving forms', image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1500&q=85', alt: 'Vibrant abstract forms for a motion design direction' },
      { title: 'Visual effects', image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1500&q=85', alt: 'Immersive digital artwork in a vivid exhibition space' },
    ],
  },
  {
    number: '05', title: 'Illustration', copy: 'Original characters, scenes, and visual details that make your ideas feel unmistakably yours.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85', alt: 'An artist painting a colorful illustration',
    designs: [
      { title: 'Painted scenes', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1500&q=85', alt: 'Artist creating a colorful painted illustration' },
      { title: 'Expressive artwork', image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1500&q=85', alt: 'Expressive abstract artwork with layered colors' },
      { title: 'Editorial illustration', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1500&q=85', alt: 'Illustrated artwork displayed in a gallery' },
    ],
  },
  {
    number: '06', title: 'Printing', copy: 'Thoughtful print finishes and production that bring your design into the real world.',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85', alt: 'Printed books and stationery arranged on a desk',
    designs: [
      { title: 'Editorial print', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1500&q=85', alt: 'Printed books and stationery arranged on a desk' },
      { title: 'Paper goods', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1500&q=85', alt: 'Notebook and writing materials ready for a print project' },
      { title: 'Print campaign', image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1500&q=85', alt: 'Printed event graphics displayed as a campaign direction' },
    ],
  },
];

function ServicesSection({ onInquiry }) {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section aria-labelledby="services-title" className="section services-section" id="services">
      <RevealGroup className="section-heading">
        <div><span className="eyebrow">SIX WAYS TO MAKE YOUR MARK</span><h2 className="section-title" id="services-title">Design, in all<br />the right <em>forms.</em></h2></div>
        <p>From the first sketch to the final screen, explore a catalog of creative services built to make your brand stand out.</p>
      </RevealGroup>
      <RevealGroup className="services-list">
        {services.map((service, index) => (
          <article className="service-card" key={service.number} style={{ '--reveal-index': index }}>
            <div className="service-cover">
              <button aria-label={`Browse ${service.title} designs`} className="service-cover-action" onClick={() => setSelectedService(service)} type="button">
                <img alt={service.alt} loading="lazy" src={service.image} />
              </button>
              <span className="service-index">{service.number}</span>
              <button aria-label={`Start a ${service.title} project`} className="service-cta" onClick={onInquiry} title={`Start a ${service.title} project`} type="button"><ArrowUpRight size={19} /></button>
            </div>
            <button aria-label={`Browse ${service.title} designs`} className="service-details" onClick={() => setSelectedService(service)} type="button"><h3>{service.title}</h3><p>{service.copy}</p></button>
          </article>
        ))}
      </RevealGroup>
      {selectedService && <ServiceCatalogDialog onClose={() => setSelectedService(null)} onInquiry={onInquiry} service={selectedService} />}
    </section>
  );
}

export default ServicesSection;