'use client';

import { useEffect } from 'react';
import AOS from 'aos';

export default function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  return (
    <main>
      {/* Hero */}
      <section className="xconnect-about-hero">
        <div className="xconnect-about-hero__bg"></div>
        <div className="xconnect-container">
          <div className="xconnect-about-hero__content">
            <div className="xconnect-about-hero__badge" data-aos="fade-up">About XCONNECT</div>
            <h1 className="xconnect-about-hero__title" data-aos="fade-up" data-aos-delay="100">
              Powering India&apos;s<br />
              <span className="xconnect-about-hero__title-highlight">Digital Infrastructure</span>
            </h1>
            <p className="xconnect-about-hero__text" data-aos="fade-up" data-aos-delay="200">
              XCONNECT Datacenters Pvt Ltd is a next-generation digital infrastructure company focused on building secure, scalable, and future-ready data center and connectivity platforms in India.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="xconnect-overview xconnect-section">
        <div className="xconnect-container">
          <div className="xconnect-overview__grid">
            <div className="xconnect-overview__content" data-aos="fade-right">
              <span className="xconnect-eyebrow">Company Overview</span>
              <h2 className="xconnect-section-header__title" style={{ marginBottom: 'var(--spacing-6)' }}>Building the Foundation of Digital India</h2>
              <p className="xconnect-overview__text">
                Incorporated in 2018, XCONNECT supports the rapidly growing requirements of cloud service providers, enterprises, telecom operators, OTT platforms, and digital ecosystems.
              </p>
              <p className="xconnect-overview__text">
                The company combines deep domain expertise in telecom, fiber networks, and data center infrastructure to deliver reliable, high-availability solutions aligned with global best practices.
              </p>
            </div>
            <div className="xconnect-overview__illustration" data-aos="fade-left" data-aos-delay="100">
              <div className="xconnect-overview__visual">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
                  <path d="M248,128a8,8,0,0,1-8,8H223.33a88.18,88.18,0,0,1-78.71,78.71V232a8,8,0,0,1-16,0V214.71a88.18,88.18,0,0,1-78.71-78.71H32a8,8,0,0,1,0-16H49.91a88.18,88.18,0,0,1,78.71-78.71V24a8,8,0,0,1,16,0V41.29a88.18,88.18,0,0,1,78.71,78.71H240A8,8,0,0,1,248,128Zm-120,72a72,72,0,1,0-72-72A72.08,72.08,0,0,0,128,200Zm0-112a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152Z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - UPDATED per client */}
      <section className="xconnect-vm xconnect-section">
        <div className="xconnect-container">
          <div className="xconnect-section-header" data-aos="fade-up">
            <span className="xconnect-eyebrow">Our Purpose</span>
            <h2 className="xconnect-section-header__title">Vision &amp; Mission</h2>
            <p className="xconnect-section-header__subtitle">
              Driving India&apos;s digital transformation through world-class infrastructure and connectivity solutions.
            </p>
          </div>

          <div className="xconnect-vm__grid">
            {/* Vision Card - UPDATED */}
            <div className="xconnect-vm__card" data-aos="fade-up" data-aos-delay="100">
              <div className="xconnect-vm__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"/>
                </svg>
              </div>
              <div className="xconnect-vm__label">Our Vision</div>
              <h3 className="xconnect-vm__title">India&apos;s Most Trusted Digital Infrastructure Platform</h3>
              <p className="xconnect-vm__text">
                To become India&apos;s most trusted digital infrastructure platform — enabling businesses, governments, and innovators to thrive in a connected, data-driven world through resilient, scalable, and sustainable data center ecosystems.
              </p>
            </div>

            {/* Mission Card - UPDATED */}
            <div className="xconnect-vm__card xconnect-vm__card--mission" data-aos="fade-up" data-aos-delay="200">
              <div className="xconnect-vm__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128ZM128,56a72,72,0,1,0,72,72A72.08,72.08,0,0,0,128,56Zm0,128a56,56,0,1,1,56-56A56.06,56.06,0,0,1,128,184Zm0-96a40,40,0,1,0,40,40A40,40,0,0,0,128,88Z"/>
                </svg>
              </div>
              <div className="xconnect-vm__label">Our Mission</div>
              <h3 className="xconnect-vm__title">Build, Operate &amp; Scale World-Class Infrastructure</h3>
              <p className="xconnect-vm__text">
                To build, operate, and scale world-class data center and connectivity infrastructure that empowers India&apos;s digital transformation.
              </p>
              <ul className="xconnect-vm__list">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
                  <span>Design and deliver carrier-neutral, Tier III+ data centers with 99.995%+ uptime</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
                  <span>Provide seamless interconnection across cloud, telecom, and enterprise ecosystems</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
                  <span>Champion sustainability through energy-efficient design, renewable energy, and green certifications</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
                  <span>Support customers with flexible, future-ready infrastructure from 1 rack to full-hall deployments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NLD Hub */}
      <section className="xconnect-nld xconnect-section">
        <div className="xconnect-container">
          <div className="xconnect-section-header" data-aos="fade-up">
            <span className="xconnect-eyebrow">Strategic Initiative</span>
            <h2 className="xconnect-section-header__title">South India NLD Interconnect Infrastructure Hub</h2>
          </div>
          <div className="xconnect-nld__content" data-aos="fade-up" data-aos-delay="100">
            <p className="xconnect-nld__description">
              XCONNECT proposes the development of a South India National Long Distance (NLD) Interconnect Infrastructure Hub — a strategic digital crossroads for Southern India. This carrier-neutral interconnection platform enables seamless exchange of data, cloud, content, and telecom traffic.
            </p>
            <div className="xconnect-nld__features">
              <div className="xconnect-nld__feature"><p className="xconnect-nld__feature-text">Low Latency</p></div>
              <div className="xconnect-nld__feature"><p className="xconnect-nld__feature-text">High Capacity</p></div>
              <div className="xconnect-nld__feature"><p className="xconnect-nld__feature-text">Resilient Design</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Importance */}
      <section className="xconnect-strategic xconnect-section">
        <div className="xconnect-container">
          <div className="xconnect-section-header" data-aos="fade-up">
            <span className="xconnect-eyebrow" style={{ color: 'var(--color-primary-light)' }}>Why It Matters</span>
            <h2 className="xconnect-section-header__title" style={{ color: 'var(--color-white)' }}>Strategic Importance</h2>
            <p className="xconnect-section-header__subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Enabling the next wave of digital transformation across Southern India
            </p>
          </div>

          <div className="xconnect-strategic__grid">
            {[
              'Centralized NLD interconnection for South India',
              'Reduced latency and optimized routing',
              'High redundancy and reliability',
              'Supports hyperscale, ISPs, cloud, and enterprises',
              "Strengthens India's national digital backbone",
              'Strategic digital crossroads for Southern India',
            ].map((text, i) => (
              <div key={i} className="xconnect-strategic__card" data-aos="fade-up" data-aos-delay={i * 50}>
                <div className="xconnect-strategic__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
                </div>
                <p className="xconnect-strategic__text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connectivity Architecture */}
      <section className="xconnect-architecture xconnect-section">
        <div className="xconnect-container">
          <div className="xconnect-section-header" data-aos="fade-up">
            <span className="xconnect-eyebrow">Technical Excellence</span>
            <h2 className="xconnect-section-header__title">Connectivity Architecture</h2>
          </div>
          <div className="xconnect-architecture__content">
            <div className="xconnect-architecture__intro" data-aos="fade-up" data-aos-delay="100">
              <p className="xconnect-architecture__description">
                The hub integrates major regional and national fiber routes including Hyderabad, Chennai, Bengaluru, Visakhapatnam, and Amaravati/Vijayawada, creating a robust interconnection ecosystem.
              </p>
            </div>
            <div className="xconnect-architecture__features">
              {[
                'Redundant ring and mesh topology',
                'DWDM / OTN infrastructure (100G–400G+)',
                'Carrier-neutral Meet-Me Rooms (MMRs)',
                'Multi-operator and NLD license holder support',
              ].map((text, i) => (
                <div key={i} className="xconnect-architecture__feature" data-aos="fade-up" data-aos-delay={150 + i * 50}>
                  <div className="xconnect-architecture__feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
                  </div>
                  <p className="xconnect-architecture__feature-text">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="xconnect-integration xconnect-section">
        <div className="xconnect-container">
          <div className="xconnect-section-header" data-aos="fade-up">
            <span className="xconnect-eyebrow">Ecosystem Integration</span>
            <h2 className="xconnect-section-header__title">Integration with Data Center Ecosystem</h2>
            <p className="xconnect-section-header__subtitle">
              Comprehensive connectivity solutions for modern digital infrastructure needs
            </p>
          </div>
          <div className="xconnect-integration__grid">
            {[
              'Direct interconnection for hyperscale and enterprises',
              'Cloud on-ramps and hybrid cloud connectivity',
              'OTT and content delivery optimization',
              'ISP and carrier cross-connects',
              'DR and BCP support',
            ].map((text, i) => (
              <div key={i} className="xconnect-integration__item" data-aos="fade-up" data-aos-delay={i * 50}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"/></svg>
                <p className="xconnect-integration__text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="xconnect-benefits xconnect-section">
        <div className="xconnect-container">
          <div className="xconnect-section-header" data-aos="fade-up">
            <span className="xconnect-eyebrow">Advantages</span>
            <h2 className="xconnect-section-header__title">Key Benefits</h2>
            <p className="xconnect-section-header__subtitle">
              Why enterprises choose XCONNECT for their digital infrastructure needs
            </p>
          </div>
          <div className="xconnect-benefits__grid">
            {['Low Latency', 'High Availability', 'Scalability', 'Carrier Neutrality', 'Future Ready'].map((title, i) => (
              <div key={i} className="xconnect-benefit-card" data-aos="fade-up" data-aos-delay={i * 50}>
                <div className="xconnect-benefit-card__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
                </div>
                <h3 className="xconnect-benefit-card__title">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Customers */}
      <section className="xconnect-customers xconnect-section">
        <div className="xconnect-container">
          <div className="xconnect-section-header" data-aos="fade-up">
            <span className="xconnect-eyebrow">Who We Serve</span>
            <h2 className="xconnect-section-header__title">Target Customers</h2>
            <p className="xconnect-section-header__subtitle">
              Serving diverse industries with tailored infrastructure solutions
            </p>
          </div>
          <div className="xconnect-customers__grid">
            {[
              'Telecom Operators & NLD Providers',
              'ISPs',
              'Hyperscale & Cloud Providers',
              'Enterprises & IT Companies',
              'Government & PSUs',
              'OTT & CDN Providers',
            ].map((text, i) => (
              <div key={i} className="xconnect-customer-card" data-aos="fade-up" data-aos-delay={i * 50}>
                <div className="xconnect-customer-card__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
                </div>
                <p className="xconnect-customer-card__text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="xconnect-leadership xconnect-section">
        <div className="xconnect-container">
          <div className="xconnect-section-header" data-aos="fade-up">
            <span className="xconnect-eyebrow">Our Team</span>
            <h2 className="xconnect-section-header__title">Leadership</h2>
          </div>
          <div className="xconnect-leadership__grid">
            <div className="xconnect-leader-card" data-aos="fade-up" data-aos-delay="100">
              <div className="xconnect-leader-card__avatar">BV</div>
              <h3 className="xconnect-leader-card__name">B. Venugopal</h3>
              <p className="xconnect-leader-card__role">Chairman &amp; Managing Director</p>
              <p className="xconnect-leader-card__bio">
                Over 25 years of experience in telecom and infrastructure development, leading strategic initiatives across fiber networks and data center ecosystems.
              </p>
            </div>
            <div className="xconnect-leader-card" data-aos="fade-up" data-aos-delay="200">
              <div className="xconnect-leader-card__avatar">BS</div>
              <h3 className="xconnect-leader-card__name">B. Suresh</h3>
              <p className="xconnect-leader-card__role">Director &amp; COO</p>
              <p className="xconnect-leader-card__bio">
                Extensive experience in operations management and telecom infrastructure, overseeing day-to-day operations and strategic partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registered Office */}
      <section className="xconnect-office xconnect-section">
        <div className="xconnect-container">
          <div className="xconnect-section-header" data-aos="fade-up">
            <span className="xconnect-eyebrow">Location</span>
            <h2 className="xconnect-section-header__title">Registered Office</h2>
          </div>
          <div className="xconnect-office__card" data-aos="fade-up" data-aos-delay="100">
            <div className="xconnect-office__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256"><path d="M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.36,134.39a8,8,0,0,0,9.28,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z"></path></svg>
            </div>
            <h3 className="xconnect-office__title">XCONNECT Datacenters Pvt Ltd</h3>
            <address className="xconnect-office__address">
              HIG-281, Phase-1, KPHB Colony,<br />
              Kukatpally, Hyderabad,<br />
              Telangana - 500072, India
            </address>
          </div>
        </div>
      </section>
    </main>
  );
}
