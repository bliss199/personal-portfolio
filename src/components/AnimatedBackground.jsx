import { motion } from 'framer-motion';
import './AnimatedBackground.css';

export default function AnimatedBackground() {
  const shapes = [
    { size: 350, x: '15%', y: '25%', delay: 0, duration: 20 },
    { size: 360, x: '75%', y: '15%', delay: 1, duration: 22 },
    { size: 370, x: '50%', y: '50%', delay: 2, duration: 25 },
    { size: 380, x: '85%', y: '70%', delay: 3, duration: 23 },
    { size: 390, x: '25%', y: '75%', delay: 4, duration: 21 },
    { size: 400, x: '60%', y: '35%', delay: 5, duration: 24 }
  ];

  return (
    <div className="animated-background">
      <div className="gradient-overlay" />
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="floating-shape"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  );
}

