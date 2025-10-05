import { motion } from 'framer-motion';
import Card from './Card';
import { FiClock } from 'react-icons/fi';
import { useScrollAnimation, fadeUp, scaleUp, staggerContainer } from '../hooks/useScrollAnimation';
import './Writing.css';

const posts = [
  {
    title: 'What I Learned Building Pathfinder',
    description: 'Reflections on implementing A* search, priority queues, and visual feedback for educational tools.',
    readTime: '5 min',
    date: 'Coming soon',
    link: '#'
  }
];

export default function Writing() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="writing section" id="writing" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          Writing
        </motion.h2>
        
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          
          <div className="writing-grid">
            {/* Placeholder Card */}
            <motion.div
              variants={scaleUp}
            >
              <Card className="writing-card placeholder-card">
                <div className="placeholder-content">
                  <h3 className="placeholder-title">Notes Coming Soon</h3>
                  <p className="placeholder-text">
                    I'm working on sharing my learnings about systems programming, algorithm implementation, 
                    and practical development workflows. Check back soon!
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Sample Post */}
            {posts.map((post) => (
              <motion.div
                key={post.title}
                variants={scaleUp}
              >
                <Card hover={true} className="writing-card">
                  <div className="writing-meta">
                    <span className="writing-date">{post.date}</span>
                    <span className="writing-read-time">
                      <FiClock /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="writing-title">{post.title}</h3>
                  <p className="writing-description">{post.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

