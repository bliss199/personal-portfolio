import { motion } from 'framer-motion';
import { useState } from 'react';
import './Button.css';

export default function Button({ 
  children, 
  variant = 'primary', 
  href, 
  onClick, 
  disabled = false,
  icon,
  target,
  download,
  className = ''
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const buttonContent = (
    <>
      {!disabled && variant === 'primary' && (
        <motion.span
          className="button-glow"
          style={{
            left: mousePosition.x,
            top: mousePosition.y
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      )}
      {icon && <span className="button-icon">{icon}</span>}
      <span>{children}</span>
    </>
  );

  const baseClass = `button button-${variant} ${disabled ? 'button-disabled' : ''} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClass}
        target={target}
        download={download}
        onMouseMove={handleMouseMove}
        whileHover={!disabled ? { scale: 1.05, y: -2 } : {}}
        whileTap={!disabled ? { scale: 0.98 } : {}}
        onClick={disabled ? (e) => e.preventDefault() : onClick}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={baseClass}
      onClick={onClick}
      disabled={disabled}
      onMouseMove={handleMouseMove}
      whileHover={!disabled ? { scale: 1.05, y: -2 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
    >
      {buttonContent}
    </motion.button>
  );
}

