'use client';

import { useEffect, useState, FormEvent } from 'react';
import AOS from 'aos';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', service: '', message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'contact-page' }),
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <main>
      {/* Hero */}
      <section className="xconnect-contact-hero">
        <div className="xconnect-contact-hero__bg"></div>
        <div className="xconnect-container">
          <div className="xconnect-contact-hero__content">
            <div className="xconnect-contact-hero__badge" data-aos="fade-up">Get In Touch</div>
            <h1 className="xconnect-contact-hero__title" data-aos="fade-up" data-aos-delay="100">
              Contact Us
            </h1>
            <p className="xconnect-contact-hero__text" data-aos="fade-up" data-aos-delay="200">
              Ready to discuss your infrastructure needs? Our team is here to help you find the right solution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="xconnect-contact xconnect-section">
        <div className="xconnect-container">
          <div className="xconnect-contact__grid">
            {/* Form */}
            <div className="xconnect-contact-form-wrapper" data-aos="fade-right">
              <h2 className="xconnect-contact-form__title">Send us a message</h2>
              <p className="xconnect-contact-form__subtitle">Fill out the form and we&apos;ll get back to you within 24 hours.</p>

              {status === 'success' ? (
                <div className="xconnect-form-status xconnect-form-status--success" style={{
                  padding: '2rem', textAlign: 'center', background: 'rgba(16,185,129,0.08)',
                  borderRadius: '0.75rem', border: '1px solid rgba(16,185,129,0.2)',
                }}>
                  <h3 style={{ color: 'var(--color-success)', marginBottom: '0.5rem' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--color-text-muted)' }}>Thank you for reaching out. We&apos;ll respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="xconnect-contact-form__row" style={{ marginBottom: 'var(--spacing-5, 1.25rem)' }}>
                    <div className="xconnect-form-group">
                      <label className="xconnect-label" htmlFor="name">Full Name *</label>
                      <input id="name" type="text" className="xconnect-input" placeholder="Your full name"
                        value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required />
                    </div>
                    <div className="xconnect-form-group">
                      <label className="xconnect-label" htmlFor="email">Email Address *</label>
                      <input id="email" type="email" className="xconnect-input" placeholder="you@company.com"
                        value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} required />
                    </div>
                  </div>

                  <div className="xconnect-contact-form__row" style={{ marginBottom: 'var(--spacing-5, 1.25rem)' }}>
                    <div className="xconnect-form-group">
                      <label className="xconnect-label" htmlFor="phone">Phone Number</label>
                      <input id="phone" type="tel" className="xconnect-input" placeholder="+91 XXXXX XXXXX"
                        value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                    </div>
                    <div className="xconnect-form-group">
                      <label className="xconnect-label" htmlFor="company">Company</label>
                      <input id="company" type="text" className="xconnect-input" placeholder="Your company name"
                        value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })} />
                    </div>
                  </div>

                  <div className="xconnect-form-group" style={{ marginBottom: 'var(--spacing-5, 1.25rem)' }}>
                    <label className="xconnect-label" htmlFor="service">Service Interest</label>
                    <select id="service" className="xconnect-input"
                      value={formData.service} onChange={e => setFormData({ ...formData, service: e.target.value })}>
                      <option value="">Select a service</option>
                      <option value="colocation">Colocation &amp; Hosting</option>
                      <option value="cloud">Cloud &amp; Managed Services</option>
                      <option value="opgw">OPGW Connectivity</option>
                      <option value="network">Network &amp; Interconnection</option>
                      <option value="dr">Disaster Recovery</option>
                      <option value="security">Security &amp; Compliance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="xconnect-form-group" style={{ marginBottom: 'var(--spacing-6, 1.5rem)' }}>
                    <label className="xconnect-label" htmlFor="message">Message *</label>
                    <textarea id="message" className="xconnect-input" rows={5} placeholder="Tell us about your requirements..."
                      value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} required />
                  </div>

                  {status === 'error' && (
                    <p style={{ color: '#ef4444', fontSize: '0.875rem', marginBottom: '1rem' }}>
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}

                  <button type="submit" className="xconnect-btn xconnect-btn--primary xconnect-btn--lg" style={{ width: '100%' }}
                    disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="xconnect-contact-info" data-aos="fade-left">
              <div className="xconnect-contact-info__card">
                <div className="xconnect-contact-info__header">
                  <div className="xconnect-contact-info__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.36,134.39a8,8,0,0,0,9.28,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z"></path>
                    </svg>
                  </div>
                  <h3 className="xconnect-contact-info__title">Office Address</h3>
                </div>
                <div className="xconnect-contact-info__content">
                  HIG-281, Phase-1, KPHB Colony,<br />
                  Kukatpally, Hyderabad,<br />
                  Telangana - 500072, India
                </div>
              </div>

              <div className="xconnect-contact-info__card">
                <div className="xconnect-contact-info__header">
                  <div className="xconnect-contact-info__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>
                    </svg>
                  </div>
                  <h3 className="xconnect-contact-info__title">Email</h3>
                </div>
                <div className="xconnect-contact-info__content">
                  <a href="mailto:info@xconnectdc.com">info@xconnectdc.com</a><br />
                  <a href="mailto:sales@xconnectdc.com">sales@xconnectdc.com</a>
                </div>
              </div>

              <div className="xconnect-contact-info__card">
                <div className="xconnect-contact-info__header">
                  <div className="xconnect-contact-info__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46Z"></path>
                    </svg>
                  </div>
                  <h3 className="xconnect-contact-info__title">Phone</h3>
                </div>
                <div className="xconnect-contact-info__content">
                  <a href="tel:+914040123456">+91 40 4012 3456</a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="xconnect-contact-map">
                <div className="xconnect-contact-map__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.36,134.39a8,8,0,0,0,9.28,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z"></path>
                  </svg>
                </div>
                <p className="xconnect-contact-map__text">Hyderabad, Telangana</p>
                <p className="xconnect-contact-map__subtext">Interactive map coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
