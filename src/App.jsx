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
      <div>
        <section className="hero">
          <h2>Hello, I'm <TypingEffect text="Roshan Naik" speed={120} /></h2>
          <p className="hero-sub">I am a passionate Front End Developer crafting beautiful and responsive web experiences.</p>
          <p className="hero-desc">Currently a 2nd year BTech CSE student. I love building interactive UIs, exploring new web technologies, and turning ideas into reality. Experienced in React, JavaScript, and modern CSS. Always eager to learn and collaborate on exciting projects.</p>
        </section>
        <header>
          <h1>Roshan Naik</h1>
          <nav>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>
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
              <li>Portfolio Website – This personal website to showcase my work and skills.</li>
              <li>Music Genre Recognition – A machine learning model that predicts the genre of a song based on its audio features.</li>
            </ul>
          </section>
          <section id="skills">
            <h2>Skills</h2>
            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>C, C++</li>
              <li>Java</li>
              <li>React</li>
              <li>Git & GitHub</li>
              <li>Python (basics)</li>
              <li>Problem Solving</li>
              <li>Data Structures and Algorithms (Basics)</li>
              
            </ul>
          </section>
          <section id="contact">
            <h2>Contact</h2>
            <p>Email: roshan.kumar@email.com</p>
            <p><a href="https://github.com/rosh-an-n" target="_blank">Github Profile</a></p>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
