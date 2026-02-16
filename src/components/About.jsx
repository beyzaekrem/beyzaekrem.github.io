import { FiMapPin, FiBook, FiCode, FiHeart, FiGlobe } from 'react-icons/fi'
import './About.css'

const highlights = [
  {
    icon: <FiBook size={22} />,
    title: 'Education',
    text: 'Konya Technical University, B.Sc. in Computer Engineering (2022-2026)',
  },
  {
    icon: <FiCode size={22} />,
    title: 'Focus Area',
    text: 'Mobile app development & user-centered design',
  },
  {
    icon: <FiMapPin size={22} />,
    title: 'Location',
    text: 'Konya, Turkey',
  },
  {
    icon: <FiHeart size={22} />,
    title: 'Interests',
    text: 'Piano, Swimming, Digital Illustration, Sketching',
  },
]

const languages = [
  { name: 'Turkish', level: 'Native', percent: 100, color: '#6775d6' },
  { name: 'English', level: 'A2.2', percent: 35, color: '#8b96ef' },
  { name: 'German', level: 'A2', percent: 30, color: '#a8b2f0' },
]

const RING_SIZE = 90
const STROKE_WIDTH = 6
const RADIUS = (RING_SIZE - STROKE_WIDTH) / 2
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-label">
          <span className="label-line"></span>
          About Me
        </div>
        <h2 className="section-title">
          Get to <span className="gradient-text">know me</span>
        </h2>
        <p className="section-subtitle">
          A senior Computer Engineering student eager to learn, grow,
          and contribute to meaningful projects.
        </p>

        <div className="about__content">
          <div className="about__text">
            <p>
              As a project-oriented developer, I strive to prepare myself
              for the industry through academic knowledge, self-driven
              exploration, and building my personal archive of experiences.
              My primary focus is mobile app development, and I'm also
              actively training in data science and artificial intelligence.
            </p>
            <p>
              I'm open to internship and job opportunities. I believe we
              can build amazing things together.
            </p>
          </div>

          <div className="about__highlights">
            {highlights.map((item, index) => (
              <div key={index} className="about__highlight-card">
                <div className="about__highlight-icon">{item.icon}</div>
                <div>
                  <h4 className="about__highlight-title">{item.title}</h4>
                  <p className="about__highlight-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about__languages">
          <div className="about__languages-header">
            <FiGlobe size={20} />
            <h3 className="about__languages-title">Languages</h3>
          </div>
          <div className="about__languages-grid">
            {languages.map((lang, index) => (
              <div key={index} className="about__lang-card">
                <div className="about__lang-ring">
                  <svg
                    width={RING_SIZE}
                    height={RING_SIZE}
                    viewBox={`0 0 ${RING_SIZE} ${RING_SIZE}`}
                  >
                    <circle
                      cx={RING_SIZE / 2}
                      cy={RING_SIZE / 2}
                      r={RADIUS}
                      fill="none"
                      stroke="rgba(255,255,255,0.06)"
                      strokeWidth={STROKE_WIDTH}
                    />
                    <circle
                      cx={RING_SIZE / 2}
                      cy={RING_SIZE / 2}
                      r={RADIUS}
                      fill="none"
                      stroke={lang.color}
                      strokeWidth={STROKE_WIDTH}
                      strokeLinecap="round"
                      strokeDasharray={CIRCUMFERENCE}
                      strokeDashoffset={CIRCUMFERENCE - (CIRCUMFERENCE * lang.percent) / 100}
                      transform={`rotate(-90 ${RING_SIZE / 2} ${RING_SIZE / 2})`}
                      className="about__lang-ring-progress"
                    />
                  </svg>
                  <span className="about__lang-level">{lang.level}</span>
                </div>
                <span className="about__lang-name">{lang.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
