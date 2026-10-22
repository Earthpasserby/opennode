import RevealGroup from './RevealGroup.jsx';

const steps = [
  { number: '01 / LISTEN', title: 'Find the signal', copy: 'We get to know your goals, your audience, and what makes your business different.' },
  { number: '02 / MAKE', title: 'Shape the story', copy: 'Together, we turn the insight into a clear direction and an expressive design system.' },
  { number: '03 / LAUNCH', title: 'Put it to work', copy: 'We bring everything to life with care, then hand over the tools to keep it moving.' },
];

function ProcessSection() {
  return (
    <section aria-labelledby="process-title" className="section process-section" id="process">
      <RevealGroup className="section-heading">
        <div><span className="eyebrow">A GOOD PROCESS MAKES GOOD WORK</span><h2 className="section-title" id="process-title">Clear heads.<br />Better <em>work.</em></h2></div>
        <p>Small, considered steps. Open conversation at every turn. No mystery about what happens next.</p>
      </RevealGroup>
      <RevealGroup className="process-grid">
        {steps.map((step, index) => <article className="process-step" key={step.number} style={{ '--reveal-index': index }}><span>{step.number}</span><h3>{step.title}</h3><p>{step.copy}</p></article>)}
      </RevealGroup>
    </section>
  );
}

export default ProcessSection;