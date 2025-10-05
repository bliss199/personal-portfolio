import { motion } from 'framer-motion';
import Card from './Card';
import { useScrollAnimation, fadeUp, staggerContainer } from '../hooks/useScrollAnimation';
import './Skills.css';

const skillGroups = [
  {
    title: 'Languages',
    skills: ['C', 'Python', 'TypeScript', 'JavaScript', 'Java'],
    description: 'Comfortable with low-level systems work in C and high-level application development in Python and TypeScript.'
  },
  {
    title: 'Core Areas',
    skills: ['Systems Programming', 'Algorithms', 'Data Structures', 'Web Development'],
    description: 'Strong foundation in computer science fundamentals with practical experience building full-stack applications.'
  },
  {
    title: 'Tools & Technologies',
    skills: ['Git', 'Docker', 'Linux', 'VS Code', 'React', 'Node.js'],
    description: 'Comfortable writing small scripts and debugging with logs. Experienced with modern development workflows.'
  }
];

export default function Skills() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="skills section" id="skills" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          Skills & Tools
        </motion.h2>
        
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <motion.div
                key={group.title}
                variants={fadeUp}
              >
                <Card className="skill-card">
                  <h3 className="skill-group-title">{group.title}</h3>
                  <div className="skill-tags">
                    {group.skills.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <p className="skill-description">{group.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

