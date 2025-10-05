import { motion } from 'framer-motion';
import Card from './Card';
import { useScrollAnimation, fadeUp, fadeRight, staggerContainer } from '../hooks/useScrollAnimation';
import './Experience.css';

const experiences = [
  {
    title: 'Systems Programming Coursework',
    place: 'Simon Fraser University',
    dates: 'Fall 2024',
    description: 'Implemented low-level system components including memory allocators, shell utilities, and concurrent programs. Learned to debug with GDB and profile with Valgrind.',
    impact: 'Gained deep understanding of OS internals and performance optimization.'
  },
  {
    title: 'Data Structures & Algorithms',
    place: 'Simon Fraser University',
    dates: 'Spring 2024',
    description: 'Built implementations of core data structures and algorithms from scratch. Analyzed time complexity and optimized solutions for competitive programming problems.',
    impact: 'Developed strong problem-solving skills and algorithmic thinking.'
  },
  {
    title: 'Teaching Assistant (Peer Mentor)',
    place: 'SFU Computing Science',
    dates: '2023 - Present',
    description: 'Mentored first-year students in programming fundamentals. Held weekly office hours and provided code review feedback.',
    impact: 'Helped 30+ students improve their debugging skills and coding confidence.'
  }
];

export default function Experience() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="experience section" id="experience" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          Experience
        </motion.h2>
        
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          
          <div className="experience-timeline">
            {experiences.map((exp) => (
              <motion.div
                key={exp.title}
                variants={fadeRight}
              >
                <Card className="experience-card">
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-title">{exp.title}</h3>
                      <p className="experience-place">{exp.place}</p>
                    </div>
                    <span className="experience-dates">{exp.dates}</span>
                  </div>
                  <p className="experience-description">{exp.description}</p>
                  <p className="experience-impact">
                    <strong>Impact:</strong> {exp.impact}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

