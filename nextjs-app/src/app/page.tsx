'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';

export default function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="xconnect-hero" id="hero">
        <div className="xconnect-hero__bg">
          <div className="xconnect-hero__bg-gradient"></div>
          <div className="xconnect-hero__bg-pattern"></div>
          <div className="xconnect-hero__bg-glow xconnect-hero__bg-glow--1"></div>
          <div className="xconnect-hero__bg-glow xconnect-hero__bg-glow--2"></div>
          <div className="xconnect-hero__grid-lines">
            <div className="xconnect-hero__grid-line"></div>
            <div className="xconnect-hero__grid-line"></div>
            <div className="xconnect-hero__grid-line"></div>
            <div className="xconnect-hero__grid-line"></div>
          </div>
        </div>

        <div className="xconnect-container">
          <div className="xconnect-hero__content">
            <div className="xconnect-hero__badge" data-aos="fade-down" data-aos-delay="0">
              <span className="xconnect-hero__badge-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </span>
              <span>Enterprise-Grade Infrastructure</span>
            </div>

            <h1 className="xconnect-hero__title" data-aos="fade-up" data-aos-delay="100">
              Powering India&apos;s Digital Future with<br />
              <span className="xconnect-hero__title-highlight">Secure, Scalable Data Centers</span>
            </h1>

            <p className="xconnect-hero__subtitle" data-aos="fade-up" data-aos-delay="200">
              XConnect builds and operates carrier-neutral, Tier III+ data centers designed for
              hyperscale growth, low-latency connectivity, and enterprise-grade security — enabling
              businesses to scale with confidence across India.
            </p>

            <div className="xconnect-hero__highlights" data-aos="fade-up" data-aos-delay="250" style={{
              display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem',
              margin: '2rem 0', color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem'
            }}>
              <span>🔒 Multi-Layered Physical &amp; Cyber Security</span>
              <span>🚡 Scalable from 1 Rack to Full Hall</span>
              <span>🌐 Carrier-Neutral with 100+ ISP Options</span>
              <span>♻️ Green-Certified, Energy-Efficient Design</span>
            </div>

            <div className="xconnect-hero__cta" data-aos="fade-up" data-aos-delay="300">
              <Link href="/contact" className="xconnect-btn xconnect-btn--primary xconnect-btn--lg">
                <span>Request a Consultation</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
                </svg>
              </Link>
              <Link href="/services" className="xconnect-btn xconnect-btn--outline-white xconnect-btn--lg">
                <span>Explore Our Services</span>
              </Link>
            </div>

            <div className="xconnect-hero__trust" data-aos="fade-up" data-aos-delay="400">
              <div className="xconnect-hero__trust-item">
                <span className="xconnect-hero__trust-number">99.999%</span>
                <span className="xconnect-hero__trust-label">Uptime SLA</span>
              </div>
              <div className="xconnect-hero__trust-divider"></div>
              <div className="xconnect-hero__trust-item">
                <span className="xconnect-hero__trust-number">14,941</span>
                <span className="xconnect-hero__trust-label">KM Fiber Network</span>
              </div>
              <div className="xconnect-hero__trust-divider"></div>
              <div className="xconnect-hero__trust-item">
                <span className="xconnect-hero__trust-number">50MW</span>
                <span className="xconnect-hero__trust-label">Data Center Capacity</span>
              </div>
            </div>
          </div>
        </div>

        <div className="xconnect-hero__scroll" data-aos="fade-up" data-aos-delay="500">
          <a href="#what-we-do" className="xconnect-hero__scroll-link" aria-label="Scroll to next section">
            <span className="xconnect-hero__scroll-text">Scroll to explore</span>
            <div className="xconnect-hero__scroll-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm37.66-101.66a8,8,0,0,1-11.32,11.32L136,107.31V168a8,8,0,0,1-16,0V107.31l-18.34,18.35a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0Z" transform="rotate(180 128 128)"></path>
              </svg>
            </div>
          </a>
        </div>
      </section>

      {/* What We Do Section - 6 Merged Services */}
      <section className="xconnect-what-we-do xconnect-section" id="what-we-do">
        <div className="xconnect-container">
          <div className="xconnect-section-header" data-aos="fade-up">
            <span className="xconnect-eyebrow">What We Do</span>
            <h2 className="xconnect-section-header__title">Enterprise Infrastructure Solutions</h2>
            <p className="xconnect-section-header__subtitle">
              From data centers to network connectivity, we provide end-to-end infrastructure solutions that power your digital transformation.
            </p>
          </div>

          <div className="xconnect-what-we-do__grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {/* Colocation & Hosting */}
            <div className="xconnect-service-card" data-aos="fade-up" data-aos-delay="0">
              <div className="xconnect-service-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M88,88a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,88Zm8,40h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16ZM232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM40,152H216V56H40Zm0,48H216V168H40Z"></path>
                </svg>
              </div>
              <h3 className="xconnect-service-card__title">Colocation &amp; Hosting</h3>
              <p className="xconnect-service-card__text">Tier III+ data center with 99.999% uptime, N+1 redundancy, and 24/7 on-site security for your critical infrastructure.</p>
              <Link href="/services#colocation" className="xconnect-service-card__link">
                <span>Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg>
              </Link>
            </div>

            {/* Cloud & Managed Services */}
            <div className="xconnect-service-card" data-aos="fade-up" data-aos-delay="100">
              <div className="xconnect-service-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M160,40A88.09,88.09,0,0,0,81.29,88.67,64,64,0,1,0,72,216h88a88,88,0,0,0,0-176Zm0,160H72a48,48,0,0,1,0-96h4a88.09,88.09,0,0,0-.79,12,87.62,87.62,0,0,0,1.44,16H72a32,32,0,0,0,0,64h88a72,72,0,1,1,0-144,72,72,0,0,1,0,144Z"></path>
                </svg>
              </div>
              <h3 className="xconnect-service-card__title">Cloud &amp; Managed Services</h3>
              <p className="xconnect-service-card__text">Hybrid cloud, IaaS/PaaS, 24/7 NOC monitoring and proactive maintenance to keep your infrastructure running seamlessly.</p>
              <Link href="/services#cloud" className="xconnect-service-card__link">
                <span>Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg>
              </Link>
            </div>

            {/* OPGW Connectivity */}
            <div className="xconnect-service-card" data-aos="fade-up" data-aos-delay="200">
              <div className="xconnect-service-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-104H136V72a8,8,0,0,0-16,0v48a8,8,0,0,0,8,8h40a8,8,0,0,0,0-16Z"></path>
                </svg>
              </div>
              <h3 className="xconnect-service-card__title">OPGW Connectivity</h3>
              <p className="xconnect-service-card__text">14,941 km fiber network across 13 districts with 28.8 Tbps capacity for ultra-fast, reliable connectivity.</p>
              <Link href="/services#opgw" className="xconnect-service-card__link">
                <span>Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg>
              </Link>
            </div>

            {/* Network & Interconnection */}
            <div className="xconnect-service-card" data-aos="fade-up" data-aos-delay="300">
              <div className="xconnect-service-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M232,128a8,8,0,0,1-8,8H204.94l-37.78,75.58A8,8,0,0,1,160,216h-.4a8,8,0,0,1-7.08-5.14L95.35,60.76,63.28,131.31A8,8,0,0,1,56,136H24a8,8,0,0,1,0-16H50.85L88.72,36.69a8,8,0,0,1,14.76.46l57.51,151,31.85-63.72A8,8,0,0,1,200,120h24A8,8,0,0,1,232,128Z"></path>
                </svg>
              </div>
              <h3 className="xconnect-service-card__title">Network &amp; Interconnection</h3>
              <p className="xconnect-service-card__text">Enterprise-grade SD-WAN, MPLS, dedicated circuits, and carrier-neutral cross-connects for seamless operations.</p>
              <Link href="/services#network" className="xconnect-service-card__link">
                <span>Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg>
              </Link>
            </div>

            {/* Disaster Recovery */}
            <div className="xconnect-service-card" data-aos="fade-up" data-aos-delay="400">
              <div className="xconnect-service-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208Z"></path>
                </svg>
              </div>
              <h3 className="xconnect-service-card__title">Disaster Recovery</h3>
              <p className="xconnect-service-card__text">Geo-redundant DR solutions with automated failover, ensuring business continuity and zero data loss.</p>
              <Link href="/services#dr" className="xconnect-service-card__link">
                <span>Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg>
              </Link>
            </div>

            {/* Security & Compliance */}
            <div className="xconnect-service-card" data-aos="fade-up" data-aos-delay="500">
              <div className="xconnect-service-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z"></path>
                </svg>
              </div>
              <h3 className="xconnect-service-card__title">Security &amp; Compliance</h3>
              <p className="xconnect-service-card__text">ISO 27001 certified, multi-layered physical and cyber security, VAPT, and regulatory compliance services.</p>
              <Link href="/services#security" className="xconnect-service-card__link">
                <span>Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="xconnect-why-us xconnect-section" id="why-us">
        <div className="xconnect-container">
          <div className="xconnect-why-us__grid">
            <div className="xconnect-why-us__content" data-aos="fade-right">
              <span className="xconnect-eyebrow">Why XConnectDC</span>
              <h2 className="xconnect-section-header__title" style={{ textAlign: 'left' }}>Trusted Infrastructure Partner</h2>
              <p className="xconnect-section-header__subtitle" style={{ textAlign: 'left' }}>
                We combine cutting-edge technology with deep expertise to deliver infrastructure solutions that drive business success.
              </p>

              <ul className="xconnect-why-us__features">
                <li className="xconnect-why-us__feature">
                  <div className="xconnect-why-us__feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208Z"></path>
                    </svg>
                  </div>
                  <div className="xconnect-why-us__feature-content">
                    <h4 className="xconnect-why-us__feature-title">99.999% Uptime Guarantee</h4>
                    <p className="xconnect-why-us__feature-text">Industry-leading SLA with redundant systems ensuring your business never stops.</p>
                  </div>
                </li>
                <li className="xconnect-why-us__feature">
                  <div className="xconnect-why-us__feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-104H136V72a8,8,0,0,0-16,0v48a8,8,0,0,0,8,8h40a8,8,0,0,0,0-16Z"></path>
                    </svg>
                  </div>
                  <div className="xconnect-why-us__feature-content">
                    <h4 className="xconnect-why-us__feature-title">24/7 Expert Support</h4>
                    <p className="xconnect-why-us__feature-text">Round-the-clock monitoring and support from certified network engineers.</p>
                  </div>
                </li>
                <li className="xconnect-why-us__feature">
                  <div className="xconnect-why-us__feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M232,128a8,8,0,0,1-8,8H204.94l-37.78,75.58A8,8,0,0,1,160,216h-.4a8,8,0,0,1-7.08-5.14L95.35,60.76,63.28,131.31A8,8,0,0,1,56,136H24a8,8,0,0,1,0-16H50.85L88.72,36.69a8,8,0,0,1,14.76.46l57.51,151,31.85-63.72A8,8,0,0,1,200,120h24A8,8,0,0,1,232,128Z"></path>
                    </svg>
                  </div>
                  <div className="xconnect-why-us__feature-content">
                    <h4 className="xconnect-why-us__feature-title">Scalable Solutions</h4>
                    <p className="xconnect-why-us__feature-text">Infrastructure that grows with your business — from startup to enterprise.</p>
                  </div>
                </li>
              </ul>

              <div className="xconnect-why-us__cta">
                <Link href="/about" className="xconnect-btn xconnect-btn--primary">
                  <span>Learn More About Us</span>
                </Link>
              </div>
            </div>

            <div className="xconnect-why-us__visual" data-aos="fade-left">
              <div className="xconnect-why-us__visual-wrapper">
                <div className="xconnect-why-us__visual-bg"></div>
                <div className="xconnect-why-us__visual-pattern"></div>
                <div className="xconnect-why-us__stats">
                  <div className="xconnect-why-us__stat-card">
                    <div className="xconnect-why-us__stat-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
                    </div>
                    <div className="xconnect-why-us__stat-number">14,941</div>
                    <div className="xconnect-why-us__stat-label">KM Fiber Network</div>
                  </div>
                  <div className="xconnect-why-us__stat-card">
                    <div className="xconnect-why-us__stat-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
                    </div>
                    <div className="xconnect-why-us__stat-number">50MW</div>
                    <div className="xconnect-why-us__stat-label">DC Capacity</div>
                  </div>
                  <div className="xconnect-why-us__stat-card">
                    <div className="xconnect-why-us__stat-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
                    </div>
                    <div className="xconnect-why-us__stat-number">13</div>
                    <div className="xconnect-why-us__stat-label">Districts</div>
                  </div>
                  <div className="xconnect-why-us__stat-card">
                    <div className="xconnect-why-us__stat-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
                    </div>
                    <div className="xconnect-why-us__stat-number">28.8 Tbps</div>
                    <div className="xconnect-why-us__stat-label">Capacity</div>
                  </div>
                </div>
                <div className="xconnect-why-us__badge-float">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
                  <span>ISO 27001 Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="xconnect-industries xconnect-section" id="industries">
        <div className="xconnect-container">
          <div className="xconnect-section-header" data-aos="fade-up">
            <span className="xconnect-eyebrow">Industries We Serve</span>
            <h2 className="xconnect-section-header__title">Powering Digital Transformation</h2>
            <p className="xconnect-section-header__subtitle">
              Our infrastructure solutions support enterprises across diverse industries with tailored connectivity and data services.
            </p>
          </div>

          <div className="xconnect-industries__grid">
            <div className="xconnect-industry-card" data-aos="fade-up" data-aos-delay="0">
              <div className="xconnect-industry-card__bg"></div>
              <div className="xconnect-industry-card__content">
                <div className="xconnect-industry-card__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M240,128a8,8,0,0,1-8,8H204.94l-37.78,75.58A8,8,0,0,1,160,216h-.4a8,8,0,0,1-7.08-5.14L95.35,60.76,63.28,131.31A8,8,0,0,1,56,136H24a8,8,0,0,1,0-16H50.85L88.72,36.69a8,8,0,0,1,14.76.46l57.51,151,31.85-63.72A8,8,0,0,1,200,120h24A8,8,0,0,1,240,128Z"></path></svg>
                </div>
                <h3 className="xconnect-industry-card__title">Telecom &amp; ISPs</h3>
                <p className="xconnect-industry-card__text">High-capacity backbone connectivity and co-location services for carriers.</p>
                <div className="xconnect-industry-card__features">
                  <span className="xconnect-industry-card__feature">Dark Fiber</span>
                  <span className="xconnect-industry-card__feature">Co-location</span>
                </div>
              </div>
            </div>

            <div className="xconnect-industry-card" data-aos="fade-up" data-aos-delay="100">
              <div className="xconnect-industry-card__bg"></div>
              <div className="xconnect-industry-card__content">
                <div className="xconnect-industry-card__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M224,80H176V56a24,24,0,0,0-24-24H104A24,24,0,0,0,80,56V80H32A16,16,0,0,0,16,96V208a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V96A16,16,0,0,0,224,80ZM96,56a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8V80H96ZM224,208H32V96H224Z"></path></svg>
                </div>
                <h3 className="xconnect-industry-card__title">Enterprise IT</h3>
                <p className="xconnect-industry-card__text">Secure, scalable infrastructure for corporate data centers and hybrid cloud.</p>
                <div className="xconnect-industry-card__features">
                  <span className="xconnect-industry-card__feature">Hybrid Cloud</span>
                  <span className="xconnect-industry-card__feature">DR Solutions</span>
                </div>
              </div>
            </div>

            <div className="xconnect-industry-card" data-aos="fade-up" data-aos-delay="200">
              <div className="xconnect-industry-card__bg"></div>
              <div className="xconnect-industry-card__content">
                <div className="xconnect-industry-card__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM40,56H216V96H40ZM216,200H40V112H216v88ZM56,136a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H64A8,8,0,0,1,56,136Zm0,32a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H64A8,8,0,0,1,56,168Z"></path></svg>
                </div>
                <h3 className="xconnect-industry-card__title">Government</h3>
                <p className="xconnect-industry-card__text">Compliant infrastructure for e-governance and smart city initiatives.</p>
                <div className="xconnect-industry-card__features">
                  <span className="xconnect-industry-card__feature">E-Governance</span>
                  <span className="xconnect-industry-card__feature">Smart Cities</span>
                </div>
              </div>
            </div>

            <div className="xconnect-industry-card" data-aos="fade-up" data-aos-delay="300">
              <div className="xconnect-industry-card__bg"></div>
              <div className="xconnect-industry-card__content">
                <div className="xconnect-industry-card__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M248,128a56.06,56.06,0,0,0-32-50.61V72a48,48,0,0,0-88-26.49A48,48,0,0,0,40,72v5.39a56,56,0,0,0,0,101.22V184a48,48,0,0,0,88,26.49A48,48,0,0,0,216,184v-5.39A56.09,56.09,0,0,0,248,128Z"></path></svg>
                </div>
                <h3 className="xconnect-industry-card__title">Healthcare</h3>
                <p className="xconnect-industry-card__text">HIPAA-ready infrastructure for healthcare data and telemedicine platforms.</p>
                <div className="xconnect-industry-card__features">
                  <span className="xconnect-industry-card__feature">Telemedicine</span>
                  <span className="xconnect-industry-card__feature">Compliance</span>
                </div>
              </div>
            </div>
          </div>

          <div className="xconnect-industries__more" data-aos="fade-up">
            <p className="xconnect-industries__more-text">
              <strong>Also serving:</strong> BFSI, Education, Media &amp; Entertainment, Manufacturing, and more.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="xconnect-cta" id="cta">
        <div className="xconnect-cta__bg">
          <div className="xconnect-cta__bg-gradient"></div>
          <div className="xconnect-cta__bg-pattern"></div>
          <div className="xconnect-cta__bg-glow xconnect-cta__bg-glow--1"></div>
          <div className="xconnect-cta__bg-glow xconnect-cta__bg-glow--2"></div>
        </div>

        <div className="xconnect-container">
          <div className="xconnect-cta__content">
            <div className="xconnect-cta__badge" data-aos="fade-up">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
              <span>Ready to Transform Your Infrastructure?</span>
            </div>

            <h2 className="xconnect-cta__title" data-aos="fade-up" data-aos-delay="100">
              Let&apos;s Build Your<br />
              <span className="xconnect-cta__title-highlight">Digital Future Together</span>
            </h2>

            <p className="xconnect-cta__text" data-aos="fade-up" data-aos-delay="200">
              Connect with our experts to discuss your infrastructure requirements and discover how XConnectDC can power your digital transformation.
            </p>

            <div className="xconnect-cta__buttons" data-aos="fade-up" data-aos-delay="300">
              <Link href="/contact" className="xconnect-btn xconnect-btn--white xconnect-btn--lg">
                <span>Get Started</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg>
              </Link>
              <Link href="/services" className="xconnect-btn xconnect-btn--outline-white xconnect-btn--lg">
                <span>Explore Solutions</span>
              </Link>
            </div>

            <div className="xconnect-cta__trust" data-aos="fade-up" data-aos-delay="400">
              <div className="xconnect-cta__trust-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
                <span>Free Consultation</span>
              </div>
              <div className="xconnect-cta__trust-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
                <span>Custom Solutions</span>
              </div>
              <div className="xconnect-cta__trust-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
