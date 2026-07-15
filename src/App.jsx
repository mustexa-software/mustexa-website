import { useEffect, useState } from 'react';
import logo from './assets/logo.png';

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.4 2.5 3.6 5.5 3.6 9S14.4 18.5 12 21c-2.4-2.5-3.6-5.5-3.6-9S9.6 5.5 12 3Z" />
  </svg>
);

const AppIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18M8 4v5" />
  </svg>
);

const PhoneAppIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
    <path d="M10 5h4M11 18.5h2" />
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
  </svg>
);

const LayersIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
  </svg>
);

const DeviceIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="5" width="13" height="10" rx="1.5" />
    <rect x="17" y="8" width="4" height="9" rx="1" />
    <path d="M7 19h5M9.5 15v4" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3 5 6v5c0 4.8 2.9 8.3 7 10 4.1-1.7 7-5.2 7-10V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="9" cy="8" r="3" />
    <path d="M3.5 19a5.5 5.5 0 0 1 11 0M16 5.5a3 3 0 0 1 0 5.8M17 14a5 5 0 0 1 3.5 5" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6.5 3.5 9 3l2 5-2 1.5a14 14 0 0 0 5.5 5.5L16 13l5 2-.5 2.5A4 4 0 0 1 16.6 21C9.1 20.3 3.7 14.9 3 7.4A4 4 0 0 1 6.5 3.5Z" />
  </svg>
);

const MessageIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" />
    <path d="M8.7 8.8c.7 2.5 2 3.8 4.5 4.5" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m5 12 4 4L19 6" />
  </svg>
);

const services = [
  {
    icon: GlobeIcon,
    title: 'Website Development',
    description:
      'Create modern, responsive, and professional websites that represent businesses clearly and work smoothly across every device.',
  },
  {
    icon: AppIcon,
    title: 'Web Application Development',
    description:
      'Build fast, scalable, and user-friendly web applications designed around specific business requirements.',
  },
  {
    icon: PhoneAppIcon,
    title: 'Mobile Application Development',
    description:
      'Develop modern mobile applications with intuitive interfaces and smooth user experiences.',
  },
  {
    icon: CodeIcon,
    title: 'Custom Software Development',
    description:
      'Create custom software solutions that solve specific business problems and support long-term growth.',
  },
];

const highlights = [
  {
    icon: CodeIcon,
    title: 'Modern Development',
    text: 'Clean technologies and practical engineering practices.',
  },
  {
    icon: DeviceIcon,
    title: 'Responsive Design',
    text: 'Consistent experiences across desktop, tablet, and mobile.',
  },
  {
    icon: ShieldIcon,
    title: 'Reliable Solutions',
    text: 'Maintainable products designed for long-term value.',
  },
  {
    icon: UsersIcon,
    title: 'Client-Focused Approach',
    text: 'Clear communication built around your business goals.',
  },
];

const principles = [
  {
    title: 'Simple',
    text: 'We create clear and user-friendly digital experiences.',
  },
  {
    title: 'Modern',
    text: 'We use modern technologies and development practices.',
  },
  {
    title: 'Reliable',
    text: 'We focus on quality, maintainability, and long-term value.',
  },
];

const process = [
  {
    number: '01',
    title: 'Discovery',
    text: 'We learn about the business, project goals, users, and requirements.',
  },
  {
    number: '02',
    title: 'Planning',
    text: 'We define the structure, features, design direction, and development plan.',
  },
  {
    number: '03',
    title: 'Development',
    text: 'We build the product using clean, modern, and maintainable code.',
  },
  {
    number: '04',
    title: 'Delivery',
    text: 'We test the product, make final improvements, and prepare it for launch.',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      {/* Sticky site navigation */}
      <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
        <div className="container navbar">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Mustexa home">
            <img src={logo} alt="Mustexa logo" className="brand__logo" />
            <span className="brand__name">Mustexa</span>
          </a>

          <nav id="mobile-navigation" className={`nav-menu ${menuOpen ? 'nav-menu--open' : ''}`} aria-label="Primary navigation">
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#contact" onClick={closeMenu} className="nav-menu__contact">Contact</a>
          </nav>

          <button
            className={`menu-toggle ${menuOpen ? 'menu-toggle--open' : ''}`}
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main>
        {/* Hero section */}
        <section className="hero section" id="home">
          <div className="hero__glow hero__glow--one" aria-hidden="true" />
          <div className="hero__glow hero__glow--two" aria-hidden="true" />
          <div className="container hero__grid">
            <div className="hero__content">
              <div className="eyebrow">
                <span className="eyebrow__dot" />
                Software Solutions for Modern Businesses
              </div>
              <h1>We Build Modern Websites and Applications</h1>
              <p className="hero__lead">
                Mustexa helps businesses and startups turn their ideas into professional websites,
                web applications, mobile applications, and custom software solutions.
              </p>
              <div className="hero__actions">
                <a className="button button--primary" href="#services">
                  View Our Services
                  <ArrowIcon />
                </a>
                <a className="button button--secondary" href="#contact">Contact Us</a>
              </div>
              <div className="hero__proof" aria-label="Mustexa service qualities">
                <span><CheckIcon /> Clear communication</span>
                <span><CheckIcon /> Responsive delivery</span>
                <span><CheckIcon /> Maintainable code</span>
              </div>
            </div>

            <div className="hero-visual" aria-label="Software interface preview">
              <div className="hero-visual__orb" aria-hidden="true" />
              <div className="code-window">
                <div className="code-window__topbar">
                  <div className="window-dots" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span>mustexa-project.jsx</span>
                  <span className="code-window__status">Live</span>
                </div>
                <div className="code-window__body">
                  <div className="code-window__sidebar" aria-hidden="true">
                    <span className="sidebar-mark sidebar-mark--active" />
                    <span className="sidebar-mark" />
                    <span className="sidebar-mark" />
                    <span className="sidebar-mark" />
                  </div>
                  <div className="code-lines" aria-hidden="true">
                    <p><span className="code-purple">const</span> project = {'{'}</p>
                    <p className="code-indent"><span className="code-blue">strategy:</span> <span className="code-green">'clear'</span>,</p>
                    <p className="code-indent"><span className="code-blue">design:</span> <span className="code-green">'responsive'</span>,</p>
                    <p className="code-indent"><span className="code-blue">quality:</span> <span className="code-green">'reliable'</span>,</p>
                    <p className="code-indent"><span className="code-blue">status:</span> <span className="code-green">'ready'</span></p>
                    <p>{'}'};</p>
                    <div className="interface-panel">
                      <div className="interface-panel__header">
                        <span>Project overview</span>
                        <span className="status-pill">On track</span>
                      </div>
                      <div className="progress-row">
                        <span>Design system</span>
                        <strong>92%</strong>
                      </div>
                      <div className="progress-track"><span className="progress-track__fill progress-track__fill--wide" /></div>
                      <div className="progress-row">
                        <span>Development</span>
                        <strong>78%</strong>
                      </div>
                      <div className="progress-track"><span className="progress-track__fill" /></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="floating-card floating-card--top">
                <span className="floating-card__icon"><DeviceIcon /></span>
                <div>
                  <small>Responsive</small>
                  <strong>Every screen</strong>
                </div>
              </div>

              <div className="floating-card floating-card--bottom">
                <span className="floating-card__icon"><ShieldIcon /></span>
                <div>
                  <small>Built for</small>
                  <strong>Long-term value</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="highlights" aria-label="Our approach">
          <div className="container highlights__grid">
            {highlights.map(({ icon: Icon, title, text }) => (
              <article className="highlight-card" key={title}>
                <span className="icon-box icon-box--small"><Icon /></span>
                <div>
                  <h2>{title}</h2>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Core services */}
        <section className="section services" id="services">
          <div className="container">
            <div className="section-heading section-heading--center">
              <span className="section-label">Our Services</span>
              <h2>Software Solutions Built Around Your Business</h2>
              <p>
                Mustexa creates practical, modern, and reliable digital products designed to support
                real business goals and deliver a clear user experience.
              </p>
            </div>

            <div className="services__grid">
              {services.map(({ icon: Icon, title, description }, index) => (
                <article className="service-card" key={title}>
                  <div className="service-card__topline">
                    <span className="icon-box"><Icon /></span>
                    <span className="service-card__number">0{index + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <a href="#contact" className="text-link" aria-label={`Learn more about ${title}`}>
                    Learn More
                    <ArrowIcon />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Company introduction and principles */}
        <section className="section about" id="about">
          <div className="container about__grid">
            <div className="about__visual" aria-hidden="true">
              <div className="about__frame">
                <div className="about__logo-wrap">
                  <img src={logo} alt="" />
                </div>
                <div className="about__visual-copy">
                  <span>Mustexa</span>
                  <strong>Digital products with purpose.</strong>
                </div>
                <div className="about__bars">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="about__badge">
                <span>Built around</span>
                <strong>Your goals</strong>
              </div>
            </div>

            <div className="about__content">
              <span className="section-label">About Mustexa</span>
              <h2>We Turn Ideas Into Reliable Digital Products</h2>
              <p className="about__lead">
                Mustexa is a software development startup focused on building simple, modern, and
                reliable digital products for businesses and startups. We work closely with clients
                to understand their goals and transform their ideas into functional websites,
                applications, and custom software solutions.
              </p>

              <div className="principles">
                {principles.map((principle, index) => (
                  <article className="principle" key={principle.title}>
                    <span className="principle__number">0{index + 1}</span>
                    <div>
                      <h3>{principle.title}</h3>
                      <p>{principle.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Four-step delivery process */}
        <section className="section process" id="process">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">Our Process</span>
              <h2>How We Work</h2>
              <p>
                A clear, collaborative process keeps every project focused, efficient, and aligned
                with the result your business needs.
              </p>
            </div>

            <div className="process__grid">
              {process.map((step) => (
                <article className="process-card" key={step.number}>
                  <span className="process-card__number">{step.number}</span>
                  <span className="process-card__line" aria-hidden="true" />
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta section-small">
          <div className="container">
            <div className="cta__panel">
              <div className="cta__copy">
                <span className="section-label section-label--light">Start a Project</span>
                <h2>Have a Software Project in Mind?</h2>
                <p>Let’s discuss how Mustexa can help turn your idea into a professional digital product.</p>
              </div>
              <a href="#contact" className="button button--light">
                Contact Mustexa
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        {/* Clickable contact information only — no form or backend */}
        <section className="section contact" id="contact">
          <div className="container">
            <div className="section-heading section-heading--center">
              <span className="section-label">Contact Mustexa</span>
              <h2>Let’s Start a Conversation</h2>
              <p>
                Contact Mustexa to discuss your website, web application, mobile application, or
                custom software project.
              </p>
            </div>

            <div className="contact__grid">
              <a className="contact-card" href="tel:+905366540989" aria-label="Call Mustexa at +90 536 654 0989">
                <span className="icon-box"><PhoneIcon /></span>
                <div className="contact-card__content">
                  <span className="contact-card__label">Phone</span>
                  <strong>+90 536 654 0989</strong>
                  <span className="text-link">Call Now <ArrowIcon /></span>
                </div>
              </a>

              <a
                className="contact-card"
                href="https://wa.me/905366540989"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Mustexa on WhatsApp"
              >
                <span className="icon-box"><MessageIcon /></span>
                <div className="contact-card__content">
                  <span className="contact-card__label">WhatsApp</span>
                  <strong>+90 536 654 0989</strong>
                  <span className="text-link">Chat on WhatsApp <ArrowIcon /></span>
                </div>
              </a>

              <a
                className="contact-card"
                href="mailto:contact.mustexa@gmail.com"
                aria-label="Send an email to contact.mustexa@gmail.com"
              >
                <span className="icon-box"><MailIcon /></span>
                <div className="contact-card__content">
                  <span className="contact-card__label">Email</span>
                  <strong>contact.mustexa@gmail.com</strong>
                  <span className="text-link">Send an Email <ArrowIcon /></span>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__grid">
          <div className="footer__company">
            <a className="brand" href="#home" aria-label="Mustexa home">
              <img src={logo} alt="Mustexa logo" className="brand__logo" />
              <span className="brand__name">Mustexa</span>
            </a>
            <p>
              Mustexa builds modern websites, applications, and custom software solutions for
              businesses and startups.
            </p>
          </div>

          <div className="footer__column">
            <h2>Quick Links</h2>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer__column">
            <h2>Services</h2>
            <a href="#services">Website Development</a>
            <a href="#services">Web Application Development</a>
            <a href="#services">Mobile Application Development</a>
            <a href="#services">Custom Software Development</a>
          </div>

          <div className="footer__column footer__contact">
            <h2>Contact</h2>
            <a href="tel:+905366540989">+90 536 654 0989</a>
            <a href="mailto:contact.mustexa@gmail.com">contact.mustexa@gmail.com</a>
            <a href="https://wa.me/905366540989" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>

        <div className="container footer__bottom">
          <p>© 2026 Mustexa. All rights reserved.</p>
          <a href="#home">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
