'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home', key: 'home' },
    { href: '/about', label: 'About', key: 'about' },
    { href: '/services', label: 'Services', key: 'services' },
    { href: '/contact', label: 'Contact', key: 'contact' },
  ];

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
    return () => document.body.classList.remove('mobile-menu-open');
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`xconnect-header${isScrolled ? ' is-scrolled' : ''}`}
        id="xconnect-header"
      >
        <div className="xconnect-header__wrapper">
          <div className="xconnect-container">
            <nav className="xconnect-nav">
              <Link href="/" className="xconnect-logo" aria-label="XConnectDC Home">
                <img
                  src={`${basePath}/images/logo.svg`}
                  alt="XConnectDC Logo"
                  className="xconnect-logo__image xconnect-logo__image--light"
                  width={180}
                  height={45}
                />
                <img
                  src={`${basePath}/images/logo-dark.svg`}
                  alt="XConnectDC Logo"
                  className="xconnect-logo__image xconnect-logo__image--dark"
                  width={180}
                  height={45}
                />
              </Link>

              <ul className="xconnect-nav__menu" id="xconnect-nav-menu">
                {navLinks.map((link) => (
                  <li key={link.key} className="xconnect-nav__item">
                    <Link
                      href={link.href}
                      className={`xconnect-nav__link${isActive(link.href) ? ' is-active' : ''}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="xconnect-nav__cta">
                <Link href="/contact" className="xconnect-btn xconnect-btn--primary xconnect-nav__cta-btn">
                  Get in Touch
                </Link>
              </div>

              <button
                className={`xconnect-nav__toggle${isMobileMenuOpen ? ' is-active' : ''}`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="xconnect-nav__toggle-bar"></span>
                <span className="xconnect-nav__toggle-bar"></span>
                <span className="xconnect-nav__toggle-bar"></span>
              </button>
            </nav>
          </div>
        </div>

        <div
          className={`xconnect-mobile-menu${isMobileMenuOpen ? ' is-open' : ''}`}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="xconnect-mobile-menu__content">
            <ul className="xconnect-mobile-menu__list">
              {navLinks.map((link) => (
                <li key={link.key} className="xconnect-mobile-menu__item">
                  <Link
                    href={link.href}
                    className={`xconnect-mobile-menu__link${isActive(link.href) ? ' is-active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="xconnect-mobile-menu__cta">
              <Link
                href="/contact"
                className="xconnect-btn xconnect-btn--primary xconnect-btn--lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="xconnect-header-spacer"></div>
    </>
  );
}
