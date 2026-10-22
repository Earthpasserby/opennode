import { ArrowUpRight, MessageCircle, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const WHATSAPP_NUMBER = '2349065757675';

function InquiryDialog({ onClose }) {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: 'Brand identity', budget: 'Let’s discuss', brief: '' });

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [onClose]);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function sendInquiry(event) {
    event.preventDefault();
    const message = [
      'Hello OpenNode, I would like to discuss a project.',
      '',
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Business: ${form.company || 'Not specified'}`,
      `Service: ${form.service}`,
      `Budget: ${form.budget}`,
      `Project: ${form.brief || 'I would like to talk through an idea.'}`,
    ].join('\n');
    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  return (
    <div className="dialog-backdrop" onMouseDown={onClose} role="presentation">
      <section aria-labelledby="inquiry-title" aria-modal="true" className="inquiry-dialog" onMouseDown={(event) => event.stopPropagation()} role="dialog">
        <div className="dialog-heading">
          <div><span className="eyebrow"><MessageCircle size={14} /> PROJECT ENQUIRY</span><h2 id="inquiry-title">Let’s make it real.</h2><p>Give us a little context. We’ll open WhatsApp with your project details ready to send.</p></div>
          <button aria-label="Close enquiry form" className="dialog-close" onClick={onClose} type="button"><X size={19} /></button>
        </div>
        <form className="inquiry-form" onSubmit={sendInquiry}>
          <div className="form-row">
            <label>Your name<input autoComplete="name" autoFocus name="name" onChange={updateField} placeholder="Name" required value={form.name} /></label>
            <label>Email address<input autoComplete="email" name="email" onChange={updateField} placeholder="you@company.com" required type="email" value={form.email} /></label>
          </div>
          <div className="form-row">
            <label>Business or brand<input autoComplete="organization" name="company" onChange={updateField} placeholder="Your business name" value={form.company} /></label>
            <label>What do you need?<select name="service" onChange={updateField} value={form.service}><option>Brand identity</option><option>Visual design</option><option>Website design</option><option>Brand and website</option><option>Something else</option></select></label>
          </div>
          <label>Project budget<select name="budget" onChange={updateField} value={form.budget}><option>Let’s discuss</option><option>Under $1,000</option><option>$1,000–$3,000</option><option>$3,000–$7,500</option><option>$7,500+</option></select></label>
          <label>Tell us about the idea<textarea name="brief" onChange={updateField} placeholder="What are you hoping to make?" value={form.brief} /></label>
          <button className="button inquiry-submit" type="submit">Continue to WhatsApp <ArrowUpRight size={17} /></button>
        </form>
        <p className="privacy-note">Your message opens in WhatsApp; you can review it before sending.</p>
      </section>
    </div>
  );
}

export default InquiryDialog;