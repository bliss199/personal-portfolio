import { motion } from 'framer-motion';
import { useState } from 'react';
import './Card.css';

export default function Card({ children, hover = false, onClick, className = '' }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!hover) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <motion.div
      className={`card ${hover ? 'card-hover' : ''} ${className}`}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      whileHover={hover ? { y: -8, scale: 1.01 } : {}}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {hover && isHovering && (
        <motion.div
          className="card-spotlight"
          style={{
            left: mousePosition.x,
            top: mousePosition.y
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
      {children}
    </motion.div>
  );
}

