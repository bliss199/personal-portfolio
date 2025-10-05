import { useEffect, useState } from 'react';

export function useKeyboardShortcuts() {
  const [showHelp, setShowHelp] = useState(false);
  const [pressedKey, setPressedKey] = useState(null);

  useEffect(() => {
    let timeout;

    const handleKeyDown = (e) => {
      // Ignore if user is typing in an input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
      }

      const key = e.key.toLowerCase();

      // Show help modal with ?
      if (key === '?') {
        e.preventDefault();
        setShowHelp(true);
        return;
      }

      // Handle 'g' prefix for navigation
      if (key === 'g') {
        e.preventDefault();
        setPressedKey('g');
        timeout = setTimeout(() => setPressedKey(null), 1000);
        return;
      }

      // Navigation with g prefix
      if (pressedKey === 'g') {
        e.preventDefault();
        clearTimeout(timeout);
        setPressedKey(null);

        const scrollToSection = (id) => {
          const element = document.getElementById(id);
          if (element) {
            const offset = 80;
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({ top: elementPosition, behavior: 'smooth' });
          }
        };

        switch (key) {
          case 'p':
            scrollToSection('projects');
            break;
          case 'a':
            scrollToSection('about');
            break;
          case 'e':
            scrollToSection('experience');
            break;
          case 'w':
            scrollToSection('writing');
            break;
          case 'c':
            scrollToSection('contact');
            break;
          default:
            break;
        }
      }

      // Easter egg: type "toggle" to swap accent colors
      const body = document.body;
      if (key === 't' && !body.classList.contains('typing-toggle')) {
        body.setAttribute('data-typed', 't');
      } else if (key === 'o' && body.getAttribute('data-typed') === 't') {
        body.setAttribute('data-typed', 'to');
      } else if (key === 'g' && body.getAttribute('data-typed') === 'to') {
        body.setAttribute('data-typed', 'tog');
      } else if (key === 'g' && body.getAttribute('data-typed') === 'tog') {
        body.setAttribute('data-typed', 'togg');
      } else if (key === 'l' && body.getAttribute('data-typed') === 'togg') {
        body.setAttribute('data-typed', 'toggl');
      } else if (key === 'e' && body.getAttribute('data-typed') === 'toggl') {
        // Toggle the mint-accent class
        body.classList.toggle('mint-accent');
        body.removeAttribute('data-typed');
      } else if (key !== 'g') {
        body.removeAttribute('data-typed');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (timeout) clearTimeout(timeout);
    };
  }, [pressedKey]);

  return { showHelp, setShowHelp };
}

