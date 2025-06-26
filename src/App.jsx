import { useEffect, useState } from 'react';
import './App.css';

function TypingEffect({ text, speed = 120 }) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return <span className="typing-effect">{displayed}</span>;
}

function App() {
  return (
    <>
      {/* Decorative background blobs */}
      <div className="bg-blobs">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
      </div>
      <div>        <header>
          
          <h1>Roshan Naik</h1>
          <nav>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>
        <section className="hero">
          <h2>
            Hello, I'm <TypingEffect text="Roshan Naik" speed={90} />
          </h2>
          <p className="hero-sub">I am a passionate Front End Developer crafting beautiful and responsive web experiences.</p>
          <p className="hero-desc">Currently a 2nd year BTech CSE student. I love building interactive UIs, exploring new web technologies, and turning ideas into reality. Experienced in React, JavaScript, and modern CSS. Always eager to learn and collaborate on exciting projects.</p>
        </section>
        <main>
          <section id="about">
            <h2>About Me</h2>
            <p>
              I am a 2nd year BTech Computer Science Engineering student passionate about software engineering and web development. I love building projects and learning new technologies to solve real-world problems.
            </p>
          </section>
          <section id="projects">
            <h2>Projects</h2>
            <ul>
              <li>Todo App – A simple task manager built with HTML, CSS, and JavaScript.</li>
              <li>Portfolio Website – This personal website to showcase my work and skills.</li>
              <li>Weather Forecast App – Get real-time weather updates using a public API.</li>
              <li>Music Genre Recognition – A machine learning model that predicts the genre of a song based on its audio features.</li>
            </ul>
          </section>
          <section id="skills">
            <h2>Skills</h2>
            <ul className="skills-list">
              <li><span role="img" aria-label="HTML">🔵</span> HTML, CSS, JavaScript</li>
              <li><span role="img" aria-label="C">🟣</span> C, C++</li>
              <li><span role="img" aria-label="Java">☕</span> Java</li>
              <li><span role="img" aria-label="React">⚛️</span> React</li>
              <li><span role="img" aria-label="Git">🔗</span> Git & GitHub</li>
              <li><span role="img" aria-label="Python">🐍</span> Python (basics)</li>
              <li><span role="img" aria-label="Problem Solving">🧠</span> Problem Solving</li>
              <li><span role="img" aria-label="DSA">📚</span> Data Structures and Algorithms (Basics)</li>
            </ul>
          </section>
          <section id="contact">
            <h2>Contact</h2>
            <p><span role="img" aria-label="email">📧</span> Email: <a href="mailto:roshan.kumar@email.com">roshan.kumar@email.com</a></p>
            <p><a href="https://github.com/rosh-an-n" target="_blank" rel="noopener noreferrer">Github Profile</a></p>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
