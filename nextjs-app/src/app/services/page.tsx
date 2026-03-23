'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';

const checkSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
  </svg>
);

const services = [
  {
    id: 'colocation',
    title: 'Colocation & Hosting',
    description: 'Secure, scalable rack space in Tier III+ facilities with N+1 redundancy, dual power feeds, precision cooling, and round-the-clock physical security. From 1 rack to full data hall deployments.',
    bestFor: 'Enterprises needing secure, scalable rack space with ultra-high uptime',
    keyBenefit: '99.995%+ uptime, N+1 redundancy, 24/7 on-site security',
    features: [
      '99.999% uptime SLA',
      'N+1 power & cooling redundancy',
      '24/7 on-site security & biometric access',
      'Flexible from 1U to full data hall',
      'Dual power feed with generator backup',
    ],
    iconPath: 'M88,88a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,88Zm8,40h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16ZM232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM40,152H216V56H40Zm0,48H216V168H40Z',
  },
  {
    id: 'cloud',
    title: 'Cloud & Managed Services',
    description: 'End-to-end hybrid cloud solutions, IaaS/PaaS deployment, 24/7 NOC monitoring, proactive maintenance, and expert support to keep your infrastructure running seamlessly.',
    bestFor: 'Businesses seeking managed hybrid cloud & infrastructure operations',
    keyBenefit: '24/7 NOC, proactive monitoring, hybrid cloud orchestration',
    features: [
      'Hybrid & multi-cloud orchestration',
      '24/7 Network Operations Center',
      'IaaS / PaaS deployment',
      'Proactive monitoring & alerting',
      'SLA-backed performance guarantees',
    ],
    iconPath: 'M160,40A88.09,88.09,0,0,0,81.29,88.67,64,64,0,1,0,72,216h88a88,88,0,0,0,0-176Zm0,160H72a48,48,0,0,1,0-96h4a88.09,88.09,0,0,0-.79,12,87.62,87.62,0,0,0,1.44,16H72a32,32,0,0,0,0,64h88a72,72,0,1,1,0-144,72,72,0,0,1,0,144Z',
  },
  {
    id: 'opgw',
    title: 'OPGW Connectivity',
    description: 'Optical Ground Wire fiber network spanning 14,941 km across 13 districts with 28.8 Tbps capacity. Built on power-line infrastructure for ultra-reliable, weather-resistant connectivity.',
    bestFor: 'Carriers & ISPs requiring long-haul, weather-resistant fiber routes',
    keyBenefit: '14,941 km span, 28.8 Tbps capacity, power-line grade durability',
    features: [
      '14,941 km fiber network',
      '28.8 Tbps backbone capacity',
      '13 district coverage',
      'Weather-resistant OPGW infrastructure',
      'Low-latency backbone connectivity',
    ],
    iconPath: 'M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-104H136V72a8,8,0,0,0-16,0v48a8,8,0,0,0,8,8h40a8,8,0,0,0,0-16Z',
  },
  {
    id: 'network',
    title: 'Network & Interconnection',
    description: 'Enterprise-grade networking with SD-WAN, MPLS, dedicated circuits, and carrier-neutral cross-connects. Carrier-neutral MMRs enable direct peering with 100+ ISPs and cloud providers.',
    bestFor: 'Multi-site enterprises & cloud-heavy businesses needing low-latency peering',
    keyBenefit: 'Carrier-neutral, 100+ ISP options, SD-WAN & MPLS capabilities',
    features: [
      'SD-WAN & MPLS solutions',
      'Carrier-neutral cross-connects',
      'Meet-Me Room (MMR) access',
      'Direct cloud on-ramps',
      '100+ ISP connectivity options',
    ],
    iconPath: 'M232,128a8,8,0,0,1-8,8H204.94l-37.78,75.58A8,8,0,0,1,160,216h-.4a8,8,0,0,1-7.08-5.14L95.35,60.76,63.28,131.31A8,8,0,0,1,56,136H24a8,8,0,0,1,0-16H50.85L88.72,36.69a8,8,0,0,1,14.76.46l57.51,151,31.85-63.72A8,8,0,0,1,200,120h24A8,8,0,0,1,232,128Z',
  },
  {
    id: 'dr',
    title: 'Disaster Recovery & BCP',
    description: 'Geo-redundant disaster recovery with automated failover, data replication, and business continuity planning. Ensures zero data loss and minimal downtime during critical events.',
    bestFor: 'Regulated industries (BFSI, healthcare) and mission-critical operations',
    keyBenefit: 'Geo-redundant, automated failover, near-zero RPO/RTO',
    features: [
      'Geo-redundant DR sites',
      'Automated failover & replication',
      'Near-zero RPO/RTO targets',
      'Business continuity planning',
      'Compliance-ready architecture',
    ],
    iconPath: 'M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208Z',
  },
  {
    id: 'security',
    title: 'Security & Compliance',
    description: 'Multi-layered physical and cyber security including ISO 27001 certification, VAPT assessments, SOC monitoring, and regulatory compliance services for data protection.',
    bestFor: 'Organizations requiring regulatory compliance & advanced threat protection',
    keyBenefit: 'ISO 27001 certified, VAPT, SOC monitoring, regulatory compliance',
    features: [
      'ISO 27001 certified',
      'Multi-layered physical security',
      'VAPT & penetration testing',
      'SOC monitoring & incident response',
      'Regulatory compliance support',
    ],
    iconPath: 'M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z',
  },
];

export default function ServicesPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  return (
    <main>
      {/* Hero */}
      <section className="xconnect-services-hero">
        <div className="xconnect-services-hero__bg"></div>
        <div className="xconnect-container">
          <div className="xconnect-services-hero__content">
            <div className="xconnect-services-hero__badge" data-aos="fade-up">Our Services</div>
            <h1 className="xconnect-services-hero__title" data-aos="fade-up" data-aos-delay="100">
              Enterprise <span className="xconnect-services-hero__title-highlight">Infrastructure Solutions</span>
            </h1>
            <p className="xconnect-services-hero__text" data-aos="fade-up" data-aos-delay="200">
              Comprehensive data center, connectivity, and managed services designed to power your digital transformation with reliability, security, and scale.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid - 6 Merged Services */}
      <section className="xconnect-section" style={{ backgroundColor: 'var(--color-background, #f7f9fc)' }}>
        <div className="xconnect-container">
          <div className="xconnect-services-grid">
            {services.map((service, i) => (
              <div key={service.id} id={service.id} className="xconnect-service-block" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="xconnect-service-block__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
                    <path d={service.iconPath}></path>
                  </svg>
                </div>
                <h2 className="xconnect-service-block__title">{service.title}</h2>
                <p className="xconnect-service-block__text">{service.description}</p>
                <ul className="xconnect-service-block__features">
                  {service.features.map((feature, j) => (
                    <li key={j}>{checkSvg}<span>{feature}</span></li>
                  ))}
                </ul>
                <p className="xconnect-service-block__best-for">
                  <strong>Best for:</strong> {service.bestFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="xconnect-services-cta">
        <div className="xconnect-container">
          <div className="xconnect-services-cta__content">
            <h2 className="xconnect-services-cta__title" data-aos="fade-up">
              Ready to Scale Your Infrastructure?
            </h2>
            <p className="xconnect-services-cta__text" data-aos="fade-up" data-aos-delay="100">
              Our experts are ready to design a custom solution tailored to your business needs.
            </p>
            <div className="xconnect-services-cta__buttons" data-aos="fade-up" data-aos-delay="200">
              <Link href="/contact" className="xconnect-btn xconnect-btn--white xconnect-btn--lg">
                <span>Request a Consultation</span>
              </Link>
              <Link href="/about" className="xconnect-btn xconnect-btn--outline-white xconnect-btn--lg">
                <span>About XCONNECT</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
