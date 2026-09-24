import { FiGithub } from 'react-icons/fi'
import './Projects.css'

const projects = [
  {
    title: 'Rotam – Travel Guide',
    description:
      'A mobile travel guide app built with Java. Features map integration and a user-friendly interface.',
    tags: ['Java', 'Android Studio', 'Maps API'],
    github: 'https://github.com/beyzaekrem/travel_app',
    color: '#6775d6',
  },
  {
    title: 'Benim Ailem',
    description:
      'A mobile app for Konya Metropolitan Municipality employees. Built with Flutter and Firebase.',
    tags: ['Flutter', 'Dart', 'Firebase'],
    github: 'https://github.com/beyzaekrem/benim_ailem',
    color: '#5a9ea6',
  },
  {
    title: 'Triage Automation System',
    description:
      'Hospital emergency room management system with triage front-end and back-end development.',
    tags: ['Flutter', 'Dart', 'Backend'],
    github: 'https://github.com/beyzaekrem/Triage-Otomasyon-Sistemi',
    color: '#c07888',
  },
  {
    title: 'Artificial Neural Networks',
    description:
      'Neural network implementations and classification projects built with Python.',
    tags: ['Python', 'Neural Networks', 'ML'],
    github: 'https://github.com/beyzaekrem/Artificial-Neural-Networks',
    color: '#a68b5a',
  },
  {
    title: 'Smart Irrigation Decision Support',
    description:
      'A smart irrigation decision support system with Python-based data analysis and modeling.',
    tags: ['Python', 'Data Science', 'IoT'],
    github: 'https://github.com/beyzaekrem/Smart-Irrigation-Decision-Support-System',
    color: '#5ea87c',
  },
  {
    title: 'Polylingo',
    description:
      'An interactive mobile language learning app built with Flutter and Dart.',
    tags: ['Flutter', 'Dart', 'Education'],
    github: 'https://github.com/beyzaekrem/polylingo',
    color: '#7c6bc4',
  },
  {
    title: 'SinerjiX Mobile',
    description:
      'Native iOS mobile application project with Objective-C development experience.',
    tags: ['Objective-C', 'iOS', 'Mobile'],
    github: 'https://github.com/beyzaekrem/sinerjiX_mobil',
    color: '#8b96ef',
  },
  {
    title: 'The Diamond Season',
    description:
      'A mobile application project built with Flutter and Dart.',
    tags: ['Flutter', 'Dart', 'Mobile'],
    github: 'https://github.com/beyzaekrem/the_diamond_season',
    color: '#5a9ea6',
  },
]

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-label">
          <span className="label-line"></span>
          Projects
        </div>
        <h2 className="section-title">
          Featured <span className="gradient-text">projects</span>
        </h2>
        <p className="section-subtitle">
          A selection of my academic and personal projects.
        </p>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="projects__card"
              style={{ '--project-accent': project.color }}
            >
              <div className="projects__card-top">
                <div className="projects__card-accent"></div>
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-desc">{project.description}</p>
              </div>

              <div className="projects__card-bottom">
                <div className="projects__card-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="projects__card-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="projects__card-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__card-link"
                    aria-label="GitHub"
                  >
                    <FiGithub size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects__more">
          <a
            href="https://github.com/beyzaekrem?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <FiGithub size={18} />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
