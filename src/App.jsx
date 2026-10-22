import { useState } from 'react';
import SiteHeader from './components/SiteHeader.jsx';
import Hero from './components/Hero.jsx';
import WorkSection from './components/WorkSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import ProcessSection from './components/ProcessSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import SiteFooter from './components/SiteFooter.jsx';
import InquiryDialog from './components/InquiryDialog.jsx';

function App() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const openInquiry = () => setInquiryOpen(true);
  const services = ['Graphic design', 'Web design', 'Branding', 'Motion designs', 'Illustration', 'Printing'];

  return (
    <>
      <SiteHeader onInquiry={openInquiry} />
      <main>
        <Hero onInquiry={openInquiry} />
        <div aria-label="OpenNode services" className="capability-ribbon">
          <div className="ribbon-track">
            {[0, 1].map((copy) => (
              <div aria-hidden={copy === 1 ? 'true' : undefined} className="ribbon-group" key={copy}>
                {services.map((service) => <span className="ribbon-item" key={service}>{service}<i /></span>)}
              </div>
            ))}
          </div>
        </div>
        <WorkSection />
        <ServicesSection onInquiry={openInquiry} />
        <AboutSection />
        <ProcessSection />
        <ContactSection onInquiry={openInquiry} />
      </main>
      <SiteFooter onInquiry={openInquiry} />
      {inquiryOpen && <InquiryDialog onClose={() => setInquiryOpen(false)} />}
    </>
  );
}

export default App;
