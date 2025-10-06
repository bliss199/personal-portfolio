import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiSend, FiCheck } from 'react-icons/fi';
import Button from './Button';
import Card from './Card';
import { useScrollAnimation, fadeUp, fadeLeft, fadeRight } from '../hooks/useScrollAnimation';
import './Contact.css';

export default function Contact() {
  const { ref, isInView } = useScrollAnimation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('tmfahim2123@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="contact section" id="contact" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          Get In Touch
        </motion.h2>
        
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          
          <div className="contact-grid">
            {/* Contact Info */}
            <motion.div 
              className="contact-info"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeRight}
            >
              <p className="contact-intro">
                I'm always open to discussing new projects, opportunities, or just chatting 
                about technology and ideas. Feel free to reach out!
              </p>
              
              <div className="contact-methods">
                <Card className="contact-method-card">
                  <div className="contact-method-icon">
                    <FiMail />
                  </div>
                  <div className="contact-method-content">
                    <h3>Email</h3>
                    <button onClick={copyEmail} className="email-button">
                      tmfahim2123@gmail.com
                      {copied && <span className="copied-indicator">Copied!</span>}
                    </button>
                  </div>
                </Card>

                <a 
                  href="mailto:tmfahim2123@gmail.com?subject=Hey Towhid"
                  className="mailto-link"
                >
                  Or open your email client →
                </a>
              </div>

              <p className="contact-note">
                <strong>I read everything.</strong> I typically respond within 24-48 hours.
              </p>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeLeft}
            >
              <Card className="contact-form-card">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    disabled={status === 'submitting'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={status === 'submitting'}
                  />
                </div>

                {/* Honeypot field for spam prevention */}
                <input
                  type="text"
                  name="website"
                  style={{ display: 'none' }}
                  tabIndex="-1"
                  autoComplete="off"
                />

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Your message..."
                    disabled={status === 'submitting'}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={status === 'submitting' || status === 'success'}
                  icon={status === 'success' ? <FiCheck /> : <FiSend />}
                >
                  {status === 'submitting' ? 'Sending...' : 
                   status === 'success' ? 'Sent!' : 'Send Message'}
                </Button>

                {status === 'success' && (
                  <motion.p
                    className="form-success"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Thanks, I'll get back to you soon!
                  </motion.p>
                )}

                {status === 'error' && (
                  <motion.p
                    className="form-error"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Something went wrong. Please use the{' '}
                    <a href="mailto:tmfahim2123@gmail.com?subject=Hey Towhid">
                      email link
                    </a>{' '}
                    instead.
                  </motion.p>
                )}
              </form>
            </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

