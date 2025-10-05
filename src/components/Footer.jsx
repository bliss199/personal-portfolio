import { FiGithub, FiMail, FiHeart } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <h3 className="footer-name">Towhid Murad</h3>
            <p className="footer-version">v1.0</p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <button onClick={() => scrollToSection('about')}>About</button>
            <button onClick={() => scrollToSection('projects')}>Projects</button>
            <button onClick={() => scrollToSection('writing')}>Writing</button>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </nav>

          <div className="footer-social">
            <a
              href="https://github.com/bliss199"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <FiGithub />
            </a>
            <a
              href="mailto:towhid@example.com?subject=Hey Towhid"
              aria-label="Send email"
            >
              <FiMail />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Towhid Murad. Built with care.
          </p>
          <p className="footer-privacy">
            <FiHeart className="heart-icon" /> Analytics are privacy-friendly
          </p>
        </div>
      </div>
    </footer>
  );
}

