import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, ChevronLeft, ChevronRight, Pause, Play, Sparkles } from 'lucide-react';

const heroSlides = [
  { title: 'Graphic design', detail: 'Concepts with clarity. Visuals with impact.', image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1500&q=88', alt: 'Graphic design compositions and creative layouts' },
  { title: 'Web design', detail: 'Digital experiences made to move people.', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1500&q=88', alt: 'A designer building a digital experience' },
  { title: 'Branding', detail: 'A distinctive identity, built to grow.', image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1500&q=88', alt: 'Brand identity concepts and colorful packaging' },
  { title: 'Motion designs', detail: 'Movement that gives your story momentum.', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1500&q=88', alt: 'Colorful abstract motion design artwork' },
  { title: 'Illustration', detail: 'Original worlds, drawn around your ideas.', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1500&q=88', alt: 'Illustrator creating colorful artwork' },
  { title: 'Printing', detail: 'Tactile details, finished beautifully.', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1500&q=88', alt: 'Printed books and stationery arranged on a desk' },
];

function Hero({ onInquiry }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slide = heroSlides[activeSlide];

  useEffect(() => {
    if (isPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6000);
    return () => window.clearInterval(interval);
  }, [isPaused]);

  function moveSlide(direction) {
    setActiveSlide((current) => (current + direction + heroSlides.length) % heroSlides.length);
  }

  return (
    <section aria-labelledby="hero-title" className="hero" id="home">
      <div className="hero-copy">
        <span className="eyebrow"><i className="eyebrow-dot" /> INDEPENDENT CREATIVE STUDIO</span>
        <h1 id="hero-title">Make your<br />next move<br /><span>unmissable.</span></h1>
        <p>We build bold brands, expressive visuals, and digital experiences for people moving things forward.</p>
        <div className="hero-actions">
          <button className="button" onClick={onInquiry} type="button">Start a project <ArrowUpRight size={17} /></button>
          <a className="hero-link" href="#services">Explore the studio <ArrowDown size={15} /></a>
        </div>
        <div className="hero-signoff"><Sparkles size={16} /><span>Strategy, craft, and a point of view.</span></div>
      </div>
      <div aria-label="OpenNode services carousel" aria-roledescription="carousel" className="hero-art" role="region">
        <div aria-hidden="true" className="hero-art-shape" />
        <img alt={slide.alt} className="hero-art-main hero-slide-image" fetchPriority="high" key={slide.image} src={slide.image} />
        <span className="hero-art-label">OPENNODE / CREATIVE PRACTICE</span>
        <div aria-live="polite" className="hero-art-card" key={slide.title}>
          <div className="hero-slide-copy"><span className="hero-art-card-index">0{activeSlide + 1} / 06</span><strong>{slide.title}</strong><small>{slide.detail}</small></div>
          <div aria-label="Choose a service" className="hero-slide-dots">
            {heroSlides.map((service, index) => (
              <button aria-current={activeSlide === index ? 'true' : undefined} aria-label={`Show ${service.title} slide`} className={activeSlide === index ? 'is-active' : ''} key={service.title} onClick={() => setActiveSlide(index)} type="button" />
            ))}
          </div>
          <div className="hero-slide-controls">
            <button aria-label="Previous service" onClick={() => moveSlide(-1)} type="button"><ChevronLeft size={18} /></button>
            <button aria-label={isPaused ? 'Resume slides' : 'Pause slides'} onClick={() => setIsPaused((paused) => !paused)} type="button">{isPaused ? <Play size={14} /> : <Pause size={14} />}</button>
            <button aria-label="Next service" onClick={() => moveSlide(1)} type="button"><ChevronRight size={18} /></button>
          </div>
        </div>
      </div>
      <a className="hero-scroll" href="#services"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
    </section>
  );
}

export default Hero;