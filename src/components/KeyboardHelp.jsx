import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import './KeyboardHelp.css';

export default function KeyboardHelp({ show, onClose }) {
  if (!show) return null;

  const shortcuts = [
    { keys: ['g', 'p'], description: 'Go to Projects' },
    { keys: ['g', 'a'], description: 'Go to About' },
    { keys: ['g', 'e'], description: 'Go to Experience' },
    { keys: ['g', 'w'], description: 'Go to Writing' },
    { keys: ['g', 'c'], description: 'Go to Contact' },
    { keys: ['?'], description: 'Show this help' },
    { keys: ['t', 'o', 'g', 'g', 'l', 'e'], description: 'Easter egg 🎨' }
  ];

  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            className="keyboard-help-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="keyboard-help-modal"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="keyboard-help-header">
              <h2>Keyboard Shortcuts</h2>
              <button onClick={onClose} className="keyboard-help-close" aria-label="Close">
                <FiX />
              </button>
            </div>
            
            <div className="keyboard-help-content">
              {shortcuts.map((shortcut, index) => (
                <div key={index} className="shortcut-item">
                  <div className="shortcut-keys">
                    {shortcut.keys.map((key, i) => (
                      <span key={i}>
                        <kbd className="keyboard-key">{key}</kbd>
                        {i < shortcut.keys.length - 1 && <span className="key-separator">then</span>}
                      </span>
                    ))}
                  </div>
                  <span className="shortcut-description">{shortcut.description}</span>
                </div>
              ))}
            </div>

            <div className="keyboard-help-footer">
              <p>Press <kbd className="keyboard-key">Esc</kbd> to close</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

