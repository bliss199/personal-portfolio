import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiGithub, FiExternalLink, FiFileText } from 'react-icons/fi';
import Card from './Card';
import { Badge } from './Badge';
import Button from './Button';
import { projects } from '../data/projects';
import { useScrollAnimation, fadeUp, scaleUp, staggerContainer } from '../hooks/useScrollAnimation';
import './Projects.css';

export default function Projects() {
  const { ref, isInView } = useScrollAnimation();
  const navigate = useNavigate();

  return (
    <section className="projects section" id="projects" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          Projects
        </motion.h2>
        
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          
          <div className="projects-grid">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={scaleUp}
              >
                <Card 
                  hover={true} 
                  className="project-card"
                  onClick={() => navigate(project.links.caseStudy)}
                >
                  <div className="project-image-container">
                    <div 
                      className="project-image-placeholder"
                      style={{ 
                        background: `linear-gradient(135deg, ${project.color}30, ${project.color}10)`
                      }}
                    >
                      <div 
                        className="project-accent"
                        style={{ background: project.color }}
                      />
                      <span className="project-title-overlay">{project.title}</span>
                    </div>
                  </div>

                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-pitch">{project.pitch}</p>

                    <div className="project-stack">
                      {project.stack.map((tech) => (
                        <Badge key={tech} tooltip={tech}>
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="project-links">
                      <Button
                        variant="ghost"
                        href={project.links.code}
                        target="_blank"
                        icon={<FiGithub />}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Code
                      </Button>
                      {project.links.demo ? (
                        <Button
                          variant="ghost"
                          href={project.links.demo}
                          target="_blank"
                          icon={<FiExternalLink />}
                          onClick={(e) => e.stopPropagation()}
                        >
                          Live Demo
                        </Button>
                      ) : (
                        <Button
                          variant="ghost"
                          disabled={true}
                          icon={<FiExternalLink />}
                        >
                          Demo Video Soon
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        icon={<FiFileText />}
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(project.links.caseStudy);
                        }}
                      >
                        Case Study
                      </Button>
                    </div>
                  </div>

                  <div className="project-hover-indicator">
                    <span>Read case study</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

