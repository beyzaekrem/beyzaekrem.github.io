import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'
import './Contact.css'

const contactLinks = [
  {
    icon: <FiMail size={22} />,
    label: 'Email',
    value: 'beyza.ekrem1@gmail.com',
    href: 'mailto:beyza.ekrem1@gmail.com',
  },
  {
    icon: <FiLinkedin size={22} />,
    label: 'LinkedIn',
    value: 'in/beyzaekrem',
    href: 'https://www.linkedin.com/in/beyzaekrem/',
  },
  {
    icon: <FiGithub size={22} />,
    label: 'GitHub',
    value: 'beyzaekrem',
    href: 'https://github.com/beyzaekrem',
  },
]

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__wrapper">
          <div className="contact__info">
            <div className="section-label">
              <span className="label-line"></span>
              Contact
            </div>
            <h2 className="section-title">
              Let's <span className="gradient-text">work together</span>
            </h2>
            <p className="section-subtitle">
              Whether it's an internship, job opportunity, project
              collaboration, or just to say hello — feel free to reach out.
            </p>

            <div className="contact__links">
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="contact__link-card"
                >
                  <div className="contact__link-icon">{link.icon}</div>
                  <div>
                    <p className="contact__link-label">{link.label}</p>
                    <p className="contact__link-value">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="contact__form-wrapper">
            <form
              className="contact__form"
              action="https://formspree.io/f/placeholder"
              method="POST"
            >
              <div className="contact__form-group">
                <label className="contact__form-label" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="contact__form-input"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="contact__form-group">
                <label className="contact__form-label" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="contact__form-input"
                  placeholder="example@email.com"
                  required
                />
              </div>

              <div className="contact__form-group">
                <label className="contact__form-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="contact__form-input contact__form-textarea"
                  placeholder="Write your message..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary contact__form-btn">
                <FiSend size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
