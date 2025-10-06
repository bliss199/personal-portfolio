import { motion } from 'framer-motion';
import './EyeSpyAnimation.css';

const snellenLetters = ['E', 'F', 'P', 'T', 'O', 'Z', 'L', 'P', 'E', 'D', 'F', 'C', 'Z', 'P'];

export default function EyeSpyAnimation() {
  return (
    <div className="eyespy-animation">
      {/* Phone Frame */}
      <div className="phone-frame">
        {/* Screen Content */}
        <div className="phone-screen">
          {/* Eye Icon */}
          <motion.div 
            className="eye-icon"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path
                d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <circle cx="12" cy="12" r="3" fill="currentColor" />
            </svg>
          </motion.div>

          {/* Snellen Chart Letters */}
          <div className="snellen-chart">
            {snellenLetters.map((letter, index) => (
              <motion.div
                key={index}
                className="snellen-letter"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.8 + (index * 0.1),
                  ease: "easeOut"
                }}
                style={{
                  fontSize: `${Math.max(12, 24 - index * 1.5)}px`,
                  fontWeight: index < 6 ? 'bold' : 'normal'
                }}
              >
                {letter}
              </motion.div>
            ))}
          </div>

          {/* Depth Map Visualization */}
          <motion.div 
            className="depth-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <div className="depth-grid" />
          </motion.div>

          {/* Tech Labels */}
          <motion.div 
            className="tech-labels"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.5 }}
          >
            <span className="tech-label">TrueDepth</span>
            <span className="tech-label">Speech</span>
            <span className="tech-label">React Native</span>
          </motion.div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="animation-bg" />
    </div>
  );
}
