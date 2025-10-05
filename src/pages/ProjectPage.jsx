import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiGithub, FiExternalLink, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import Button from '../components/Button';
import { Badge } from '../components/Badge';
import { projects } from '../data/projects';
import './ProjectPage.css';

export default function ProjectPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('problem');
  
  const project = projects.find(p => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="project-not-found">
        <h1>Project not found</h1>
        <Button onClick={() => navigate('/')}>Go Home</Button>
      </div>
    );
  }

  const sections = [
    { id: 'problem', label: 'Problem' },
    { id: 'approach', label: 'Approach' },
    { id: 'outcome', label: 'Outcome' },
    { id: 'wins', label: 'Wins & Lessons' },
    { id: 'improvements', label: 'Improvements' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="project-page">
      {/* Header */}
      <motion.header
        className="project-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            icon={<FiArrowLeft />}
          >
            Back to Home
          </Button>
          
          <div className="project-header-content">
            <h1 className="project-page-title">{project.title}</h1>
            <p className="project-page-summary">{project.summary}</p>
            
            <div className="project-meta">
              <div className="meta-item">
                <span className="meta-label">Role</span>
                <span className="meta-value">{project.role}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Timeframe</span>
                <span className="meta-value">{project.timeframe}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Stack</span>
                <div className="meta-stack">
                  {project.stack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="project-header-links">
              {project.links.code && (
                <Button
                  href={project.links.code}
                  target="_blank"
                  icon={<FiGithub />}
                >
                  View Code
                </Button>
              )}
              {project.links.demo && (
                <Button
                  variant="secondary"
                  href={project.links.demo}
                  target="_blank"
                  icon={<FiExternalLink />}
                >
                  Live Demo
                </Button>
              )}
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="project-content-wrapper">
        <div className="container">
          <div className="project-layout">
            {/* Table of Contents - Desktop */}
            <aside className="project-toc">
              <h3 className="toc-title">Contents</h3>
              <nav className="toc-nav">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`toc-link ${activeSection === section.id ? 'toc-link-active' : ''}`}
                  >
                    {section.label}
                  </button>
                ))}
              </nav>
            </aside>

            {/* Content */}
            <article className="project-article">
              <section id="problem" className="content-section">
                <h2>Problem</h2>
                <p>{project.problem}</p>
              </section>

              <section id="approach" className="content-section">
                <h2>Approach</h2>
                <p>{project.approach}</p>
              </section>

              <section id="outcome" className="content-section">
                <h2>Outcome</h2>
                <p>{project.outcome}</p>
              </section>

              {/* Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="project-gallery">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="gallery-item">
                      <div 
                        className="gallery-placeholder"
                        style={{ 
                          background: `linear-gradient(135deg, ${project.color}20, ${project.color}05)` 
                        }}
                      >
                        <span className="gallery-placeholder-text">
                          {image.caption}
                        </span>
                      </div>
                      <p className="gallery-caption">{image.caption}</p>
                    </div>
                  ))}
                </div>
              )}

              <section id="wins" className="content-section">
                <h2>Wins & Lessons</h2>
                
                <div className="lists-container">
                  <div className="list-section">
                    <h3 className="list-title">
                      <FiCheckCircle /> Wins
                    </h3>
                    <ul className="wins-list">
                      {project.wins.map((win, index) => (
                        <li key={index}>{win}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="list-section">
                    <h3 className="list-title">
                      <FiAlertCircle /> Lessons
                    </h3>
                    <ul className="lessons-list">
                      {project.lessons.map((lesson, index) => (
                        <li key={index}>{lesson}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <section id="improvements" className="content-section">
                <h2>What I'd Improve</h2>
                <p>{project.improvements}</p>
              </section>

              {/* Footer Links */}
              <div className="project-footer-links">
                <h3>Links</h3>
                <div className="footer-links-grid">
                  {project.links.code && (
                    <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="footer-link">
                      <FiGithub />
                      <div>
                        <strong>Source Code</strong>
                        <p>View on GitHub</p>
                      </div>
                    </a>
                  )}
                  {project.links.demo && (
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="footer-link">
                      <FiExternalLink />
                      <div>
                        <strong>Live Demo</strong>
                        <p>Try it yourself</p>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

