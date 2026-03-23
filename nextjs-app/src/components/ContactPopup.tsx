'use client';

import { useState, useEffect, FormEvent } from 'react';

export default function ContactPopup() {
  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('xconnect_popup_dismissed');
    if (dismissed) return;

    const timer = setTimeout(() => {
      setIsActive(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setIsActive(false);
    localStorage.setItem('xconnect_popup_dismissed', 'true');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.name) return;

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'popup' }),
      });
      if (res.ok) {
        setSubmitted(true);
        setTimeout(dismiss, 2000);
      }
    } catch {
      // Silently fail for popup
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isActive) return null;

  return (
    <div className="xconnect-contact-popup is-active">
      <div className="xconnect-contact-popup__overlay" onClick={dismiss}></div>
      <div className="xconnect-contact-popup__container">
        <button className="xconnect-contact-popup__close" onClick={dismiss} aria-label="Close popup">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
            <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
          </svg>
        </button>

        <div className="xconnect-contact-popup__header">
          <div className="xconnect-contact-popup__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>
            </svg>
          </div>
          <h3 style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 700, margin: '0 0 0.5rem' }}>
            Get in Touch
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', margin: 0 }}>
            Let us help you with your infrastructure needs
          </p>
        </div>

        <div style={{ padding: '1.5rem 2rem 2rem' }}>
          {submitted ? (
            <div className="xconnect-form-status xconnect-form-status--success">
              Thank you! We&apos;ll be in touch soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="xconnect-form-group">
                <label className="xconnect-label" htmlFor="popup-name">Name *</label>
                <input
                  id="popup-name"
                  type="text"
                  className="xconnect-input"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="xconnect-form-group">
                <label className="xconnect-label" htmlFor="popup-email">Email *</label>
                <input
                  id="popup-email"
                  type="email"
                  className="xconnect-input"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="xconnect-form-group">
                <label className="xconnect-label" htmlFor="popup-phone">Phone</label>
                <input
                  id="popup-phone"
                  type="tel"
                  className="xconnect-input"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  type="submit"
                  className="xconnect-btn xconnect-btn--primary"
                  disabled={isSubmitting}
                  style={{ flex: 1 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                <button
                  type="button"
                  className="xconnect-btn xconnect-btn--secondary"
                  onClick={dismiss}
                >
                  Skip
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
