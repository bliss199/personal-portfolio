import { motion } from 'framer-motion';
import { FiMapPin, FiBook, FiCalendar, FiCode, FiGithub, FiFileText } from 'react-icons/fi';
import Card from './Card';
import { useScrollAnimation, fadeUp, fadeLeft, fadeRight, staggerContainer } from '../hooks/useScrollAnimation';
import './About.css';

export default function About() {
  const { ref, isInView } = useScrollAnimation();

  const facts = [
    { icon: <FiMapPin />, label: 'Location', value: 'Vancouver, Canada' },
    { icon: <FiBook />, label: 'Degree', value: 'BSc Computing Science' },
    { icon: <FiCalendar />, label: 'Expected Graduation', value: '2026' },
    { icon: <FiCode />, label: 'Interests', value: 'Systems, CV, Automation' }
  ];

  const links = [
    { icon: <FiGithub />, label: 'GitHub', href: 'https://github.com/bliss199' },
    { icon: <FiFileText />, label: 'Resume', href: '/Towhid_Murad_Resume.pdf', target: '_blank' }
  ];

  return (
    <section className="about section" id="about" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          About
        </motion.h2>
        
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          
          <div className="about-grid">
            {/* Bio */}
            <motion.div 
              className="about-bio"
              variants={fadeRight}
            >
              <p className="bio-text">
                Hey, I'm Towhid. I'm studying Computing Science at SFU and I enjoy building 
                useful tools and learning in public. 
              </p>
              <p className="bio-text">
                I care about writing clear code and shipping things that people can actually use. 
                Whether it's a mobile app concept, a route optimization tool, or an algorithm visualizer, 
                I focus on making something practical and learning from the process.
              </p>
              <p className="bio-text">
                When I'm not coding, I'm exploring new ideas in systems programming, computer vision, 
                and practical automation. I believe in building things that solve real problems, 
                even if they're small.
              </p>
            </motion.div>

            {/* Facts Card */}
            <motion.div 
              className="about-sidebar"
              variants={fadeLeft}
            >
              <Card className="facts-card">
                <div className="avatar-container">
                  <div className="avatar-placeholder">
                    <span className="avatar-initial">TM</span>
                  </div>
                </div>

                <div className="facts-list">
                  {facts.map((fact, index) => (
                    <motion.div
                      key={fact.label}
                      className="fact-item"
                      variants={fadeUp}
                    >
                      <div className="fact-icon">{fact.icon}</div>
                      <div className="fact-content">
                        <div className="fact-label">{fact.label}</div>
                        <div className="fact-value">{fact.value}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="facts-links">
                  {links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.target}
                      rel="noopener noreferrer"
                      className="fact-link"
                    >
                      {link.icon}
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

