import { ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function ServiceCatalogDialog({ service, onClose, onInquiry }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);
  const activeDesign = service.designs[activeIndex];

  function showPrevious() {
    setActiveIndex((current) => (current - 1 + service.designs.length) % service.designs.length);
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % service.designs.length);
  }

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) => (current - 1 + service.designs.length) % service.designs.length);
      }
      if (event.key === 'ArrowRight') {
        setActiveIndex((current) => (current + 1) % service.designs.length);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, service.designs.length]);

  function handleTouchStart(event) {
    touchStartX.current = event.touches[0].clientX;
  }

  function handleTouchEnd(event) {
    if (touchStartX.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStartX.current;
    if (distance > 45) showPrevious();
    if (distance < -45) showNext();
    touchStartX.current = null;
  }

  function startInquiry() {
    onClose();
    onInquiry();
  }

  return (
    <div className="service-catalog-backdrop" onMouseDown={onClose} role="presentation">
      <section aria-labelledby="service-catalog-title" aria-modal="true" className="service-catalog-dialog" onMouseDown={(event) => event.stopPropagation()} role="dialog">
        <div className="catalog-visual" onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
          <img alt={activeDesign.alt} className="catalog-image" key={activeDesign.image} src={activeDesign.image} />
          <span className="catalog-image-index">{service.number} / 06</span>
          <span className="catalog-image-title">{activeDesign.title}</span>
        </div>
        <div className="catalog-panel">
          <div className="catalog-panel-top">
            <span className="eyebrow">SERVICE CATALOG <i /> {service.number}</span>
            <button aria-label="Close service catalog" className="dialog-close" onClick={onClose} type="button"><X size={19} /></button>
          </div>
          <div className="catalog-copy">
            <h2 id="service-catalog-title">{service.title}</h2>
            <p>{service.copy}</p>
          </div>
          <div className="catalog-controls">
            <span className="catalog-count">{String(activeIndex + 1).padStart(2, '0')} <i /> {String(service.designs.length).padStart(2, '0')}</span>
            <div className="catalog-arrows">
              <button aria-label="Previous design" className="catalog-arrow" onClick={showPrevious} type="button"><ArrowLeft size={18} /></button>
              <button aria-label="Next design" className="catalog-arrow" onClick={showNext} type="button"><ArrowRight size={18} /></button>
            </div>
          </div>
          <div aria-label="Choose a design" className="catalog-pagination">
            {service.designs.map((design, index) => (
              <button aria-current={activeIndex === index ? 'step' : undefined} aria-label={`Show ${design.title}`} className={activeIndex === index ? 'is-active' : ''} key={design.title} onClick={() => setActiveIndex(index)} type="button" />
            ))}
          </div>
          <button className="button catalog-inquiry" onClick={startInquiry} type="button">Start a project <ArrowUpRight size={17} /></button>
        </div>
      </section>
    </div>
  );
}

export default ServiceCatalogDialog;