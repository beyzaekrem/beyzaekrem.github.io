import { useState, useEffect } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import profileImg from '../assets/profile.png'
import './Hero.css'

const FULL_TEXT =
  'Computer Engineering student passionate about mobile app development and user-centered design. Always eager to learn, grow, and contribute.'

function useTypewriter(text, speed = 30, startDelay = 800) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    let timeout

    const startTyping = () => {
      timeout = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(timeout)
          setDone(true)
        }
      }, speed)
    }

    const delay = setTimeout(startTyping, startDelay)

    return () => {
      clearTimeout(delay)
      clearInterval(timeout)
    }
  }, [text, speed, startDelay])

  return { displayed, done }
}

function Hero() {
  const { displayed, done } = useTypewriter(FULL_TEXT)

  return (
    <section id="hero" className="hero">
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1"></div>
        <div className="hero__orb hero__orb--2"></div>
        <div className="hero__grid"></div>
      </div>

      <div className="container hero__content">
        <div className="hero__layout">
          <div className="hero__text-side">
            <div className="hero__badge">
              <span className="hero__badge-dot"></span>
              Open to new opportunities
            </div>

            <h1 className="hero__title">
              Hi, I'm{' '}
              <span className="gradient-text">Beyza Ekrem</span>
            </h1>

            <p className="hero__subtitle">
              {displayed}
              <span className={`hero__cursor ${done ? 'hero__cursor--blink' : ''}`}>|</span>
            </p>

            <div className="hero__actions">
              <a href="#contact" className="btn btn-primary">
                <FiMail size={18} />
                Get in Touch
              </a>
              <a href="#projects" className="btn btn-outline">
                View My Projects
              </a>
            </div>

            <div className="hero__socials">
              <a
                href="https://github.com/beyzaekrem"
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-link"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/beyzaekrem/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-link"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="mailto:beyza.ekrem1@gmail.com"
                className="hero__social-link"
                aria-label="Email"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>

          <div className="hero__image-side">
            <div className="hero__image-wrapper">
              <img
                src={profileImg}
                alt="Beyza Ekrem"
                className="hero__image"
              />
              <div className="hero__image-ring"></div>
              <div className="hero__image-glow"></div>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll down">
        <FiArrowDown size={20} />
      </a>
    </section>
  )
}

export default Hero
