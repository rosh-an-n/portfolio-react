import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

function TypingEffect({ text, minSpeed = 60, maxSpeed = 180 }) {
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed(text.slice(0, index + 1));
        setIndex(index + 1);
      }, Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, minSpeed, maxSpeed]);

  useEffect(() => {
    setDisplayed('');
    setIndex(0);
  }, [text]);

  return (
    <span className="typing-effect">
      <AnimatePresence initial={false}>
        {displayed.split('').map((char, i) => (
          <span
            key={text + i}
            style={{
              display: 'inline-block',
              opacity: 1,
              transform: 'translateY(0)',
              transition: 'opacity 0.18s, transform 0.18s',
            }}
          >
            {char}
          </span>
        ))}
      </AnimatePresence>
    </span>
  );
}

export default TypingEffect; 