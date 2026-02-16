import { FiBriefcase, FiAward } from 'react-icons/fi'
import './Experience.css'

const experiences = [
  {
    type: 'work',
    title: 'Intern',
    company: 'Konya Metropolitan Municipality',
    period: 'Jun 2025 – Jul 2025',
    description:
      'Worked on Flutter, Dart, Firebase, Widget Architecture, State Management, UI/UX, REST API, JSON, and Responsive Design.',
    tags: ['Flutter', 'Dart', 'Firebase', 'REST API'],
  },
  {
    type: 'education',
    title: 'Trainee',
    company: 'Baslangic Noktasi Akademi | Be Node',
    period: 'Feb 2024 – Dec 2024',
    description:
      'Training in Data Literacy, Fundamentals of Artificial Intelligence, Digital Ethics, Digital Transformation, and Technology Literacy.',
    tags: ['Data Science', 'AI', 'Digital Ethics'],
  },
  {
    type: 'work',
    title: 'Sponsorship Team Member',
    company: 'TurkStudentCo Volunteer Student Community',
    period: 'Sep 2024 – Nov 2024',
    description:
      'Corporate Communication, Sponsorship Management, Negotiation & Persuasion, Teamwork, and Event Coordination.',
    tags: ['Communication', 'Sponsorship', 'Teamwork'],
  },
  {
    type: 'work',
    title: 'Social Media Coordinator',
    company: 'KTUN Microelectronics Design & Development Community (MITAGET)',
    period: 'Mar 2024 – May 2024',
    description:
      'Social Media Management, Content Creation, Canva, Visual Design, Digital Communication, and Target Audience Analysis.',
    tags: ['Social Media', 'Content Creation', 'Canva'],
  },
  {
    type: 'education',
    title: 'Trainee',
    company: 'YGA – Empowering Women Program',
    period: 'Feb 2024 – May 2024',
    description:
      'Empathy, Leadership, Active Listening, Community Communication, Self-Awareness, and Social Impact Awareness.',
    tags: ['Leadership', 'Empathy', 'Social Impact'],
  },
  {
    type: 'education',
    title: 'Trainee',
    company: 'YetGen – 21st Century Skills Program',
    period: 'Sep 2022 – Dec 2022',
    description:
      'Effective Presentation, Teamwork, Project Development, Entrepreneurship, Social Innovation, and Ideathon Participation.',
    tags: ['Presentation', 'Entrepreneurship', 'Project Dev'],
  },
]

function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-label">
          <span className="label-line"></span>
          Experience
        </div>
        <h2 className="section-title">
          My <span className="gradient-text">journey</span>
        </h2>
        <p className="section-subtitle">
          Academic and professional experiences that shaped my career path.
        </p>

        <div className="experience__timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience__item">
              <div className="experience__marker">
                <div className="experience__marker-icon">
                  {exp.type === 'work' ? (
                    <FiBriefcase size={16} />
                  ) : (
                    <FiAward size={16} />
                  )}
                </div>
                {index < experiences.length - 1 && (
                  <div className="experience__line"></div>
                )}
              </div>

              <div className="experience__card">
                <div className="experience__card-header">
                  <div>
                    <h3 className="experience__title">{exp.title}</h3>
                    <p className="experience__company">{exp.company}</p>
                  </div>
                  <span className="experience__period">{exp.period}</span>
                </div>
                <p className="experience__description">{exp.description}</p>
                <div className="experience__tags">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="experience__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
