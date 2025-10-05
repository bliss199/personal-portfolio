import { useEffect } from 'react';

export function useCursorGlow() {
  useEffect(() => {
    let cursorGlow = document.getElementById('cursor-glow');
    
    if (!cursorGlow) {
      cursorGlow = document.createElement('div');
      cursorGlow.id = 'cursor-glow';
      cursorGlow.style.cssText = `
        position: fixed;
        width: 400px;
        height: 400px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(96, 165, 250, 0.08), transparent 70%);
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: opacity 0.3s ease;
        opacity: 0;
      `;
      document.body.appendChild(cursorGlow);
    }

    const updateCursor = (e) => {
      cursorGlow.style.left = e.clientX + 'px';
      cursorGlow.style.top = e.clientY + 'px';
      cursorGlow.style.opacity = '1';
    };

    const hideCursor = () => {
      cursorGlow.style.opacity = '0';
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseleave', hideCursor);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseleave', hideCursor);
    };
  }, []);
}

