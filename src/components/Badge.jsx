import { motion } from 'framer-motion';
import './Badge.css';

export function Badge({ children, tooltip }) {
  return (
    <span className="badge" title={tooltip}>
      {children}
    </span>
  );
}

export function GlowBadge({ children, icon }) {
  return (
    <motion.div
      className="glow-badge-wrapper"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="glow-badge-glow"></div>
      <div className="glow-badge">
        {icon && <span className="glow-badge-icon">{icon}</span>}
        <span className="glow-badge-text">{children}</span>
      </div>
    </motion.div>
  );
}

export default Badge;
