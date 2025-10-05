import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import TextReveal from './TextReveal';
import { GlowBadge } from './Badge';
import TypingText from './TypingText';
import { FiDownload, FiArrowRight, FiZap } from 'react-icons/fi';
import './Hero.css';

const projectPreviews = [
  {
    name: 'VisionCheck',
    color: '#60A5FA',
    description: 'Mobile eye health screening'
  },
  {
    name: 'RouteSaver',
    color: '#34D399',
    description: 'Smart route optimization'
  },
  {
    name: 'Pathfinder',
    color: '#F59E0B',
    description: 'Algorithm visualizer'
  }
];

export default function Hero() {
  const [currentPreview, setCurrentPreview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPreview((prev) => (prev + 1) % projectPreviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero section" id="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left Content */}
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <GlowBadge icon={<FiZap />}>
              Ready to Build
            </GlowBadge>
            
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Towhid Murad<span className="title-dot">.</span>
            </motion.h1>
            
            <TypingText 
              text="Computing Science & Engineering Student"
              className="hero-typing"
            />
            
            <p className="hero-intro">
              I'm a fourth-year CS student at Simon Fraser University. I like building small systems 
              that solve real problems, then shipping them.
            </p>
            
            <div className="hero-tech-pills">
              <span className="tech-pill">React</span>
              <span className="tech-pill">TypeScript</span>
              <span className="tech-pill">Python</span>
              <span className="tech-pill">Node.js</span>
            </div>
            
            <div className="hero-buttons">
              <Button 
                icon={<FiArrowRight />}
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </Button>
              <Button
                variant="secondary"
                href="/Towhid_Murad_Resume.pdf"
                target="_blank"
                icon={<FiDownload />}
              >
                Download Resume
              </Button>
            </div>
          </motion.div>

          {/* Right Preview Panel - Desktop Only */}
          <motion.div
            className="hero-preview"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="preview-card"
              whileHover={{ rotateY: 5, rotateX: 5 }}
              transition={{ duration: 0.3 }}
            >
              {projectPreviews.map((project, index) => (
                <motion.div
                  key={project.name}
                  className="preview-item"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: currentPreview === index ? 1 : 0,
                    y: currentPreview === index ? 0 : 20
                  }}
                  transition={{ duration: 0.5 }}
                  style={{
                    position: currentPreview === index ? 'relative' : 'absolute',
                    inset: currentPreview === index ? 'auto' : 0
                  }}
                >
                  <div 
                    className="preview-visual"
                    style={{ background: `linear-gradient(135deg, ${project.color}20, ${project.color}05)` }}
                  >
                    <div 
                      className="preview-accent"
                      style={{ background: project.color }}
                    />
                  </div>
                  <div className="preview-info">
                    <h3 className="preview-name">{project.name}</h3>
                    <p className="preview-desc">{project.description}</p>
                  </div>
                </motion.div>
              ))}
              
              {/* Preview Indicators */}
              <div className="preview-indicators">
                {projectPreviews.map((_, index) => (
                  <button
                    key={index}
                    className={`preview-dot ${currentPreview === index ? 'preview-dot-active' : ''}`}
                    onClick={() => setCurrentPreview(index)}
                    aria-label={`View project ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          className="scroll-line"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </motion.div>
    </section>
  );
}

