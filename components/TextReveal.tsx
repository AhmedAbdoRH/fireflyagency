import React from 'react';

interface Props {
  text: string;
  className?: string;
  delay?: number;
}

const TextReveal: React.FC<Props> = ({ text = "", className = "", delay = 0 }) => {
  const words = text.split(" ");

  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em] overflow-hidden align-bottom">
          {word.split("").map((char, charIndex) => (
            <span
              key={charIndex}
              className="inline-block opacity-0 translate-y-full"
              style={{
                animation: `revealChar 0.6s cubic-bezier(0.2, 0.65, 0.3, 0.9) forwards`,
                animationDelay: `${delay + (wordIndex * 100) + (charIndex * 30)}ms`
              }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
};

export default TextReveal;