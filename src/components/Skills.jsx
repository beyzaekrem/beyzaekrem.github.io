import {
  FiSmartphone,
  FiDatabase,
  FiTool,
  FiCode,
  FiLayout,
  FiCpu,
} from 'react-icons/fi'
import './Skills.css'

const skillCategories = [
  {
    icon: <FiCode size={24} />,
    title: 'Programming Languages',
    skills: ['Java', 'Python', 'JavaScript', 'Dart', 'C'],
    color: '#6775d6',
  },
  {
    icon: <FiSmartphone size={24} />,
    title: 'Mobile Development',
    skills: ['Android Studio', 'Flutter', 'React Native'],
    color: '#5a9ea6',
  },
  {
    icon: <FiDatabase size={24} />,
    title: 'Database & Backend',
    skills: ['Firebase', 'SQLite', 'REST API', 'SQL'],
    color: '#a68b5a',
  },
  {
    icon: <FiLayout size={24} />,
    title: 'Desktop & UI',
    skills: ['PyQt5', 'Figma', 'UI/UX Design'],
    color: '#c07888',
  },
  {
    icon: <FiTool size={24} />,
    title: 'Tools',
    skills: ['Git & GitHub', 'VS Code', 'Excel'],
    color: '#7c6bc4',
  },
  {
    icon: <FiCpu size={24} />,
    title: 'Currently Learning',
    skills: ['Data Science', 'Artificial Intelligence', 'Neural Networks'],
    color: '#5ea87c',
  },
]

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-label">
          <span className="label-line"></span>
          Skills
        </div>
        <h2 className="section-title">
          Technical <span className="gradient-text">expertise</span>
        </h2>
        <p className="section-subtitle">
          Technical skills I've built through continuous learning and hands-on projects.
        </p>

        <div className="skills__grid">
          {skillCategories.map((cat, index) => (
            <div
              key={index}
              className="skills__card"
              style={{ '--card-accent': cat.color }}
            >
              <div className="skills__card-icon">{cat.icon}</div>
              <h3 className="skills__card-title">{cat.title}</h3>
              <div className="skills__tags">
                {cat.skills.map((skill, i) => (
                  <span key={i} className="skills__tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
