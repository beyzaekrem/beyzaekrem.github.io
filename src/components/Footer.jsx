import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <a href="#hero" className="footer__logo">
              <span className="footer__logo-text">mbyze</span>
              <span className="footer__logo-dot">.</span>
            </a>
            <p className="footer__text">
              &copy; {new Date().getFullYear()} Beyza Ekrem
            </p>
          </div>

          <div className="footer__socials">
            <a
              href="https://github.com/beyzaekrem"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/beyzaekrem/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href="mailto:beyza.ekrem1@gmail.com"
              className="footer__social-link"
              aria-label="Email"
            >
              <FiMail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
