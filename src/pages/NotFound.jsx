import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCompass, FiHome, FiFolder } from 'react-icons/fi';
import Button from '../components/Button';
import './NotFound.css';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <motion.div
        className="not-found-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <FiCompass className="not-found-icon" />
        <h1 className="not-found-title">You took a wrong turn.</h1>
        <p className="not-found-text">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="not-found-actions">
          <Button
            onClick={() => navigate('/')}
            icon={<FiHome />}
          >
            Go Home
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  const offset = 80;
                  const elementPosition = projectsSection.offsetTop - offset;
                  window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                }
              }, 100);
            }}
            icon={<FiFolder />}
          >
            View Projects
          </Button>
        </div>

        <p className="not-found-code">Error 404</p>
      </motion.div>
    </div>
  );
}

