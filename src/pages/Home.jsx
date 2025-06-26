import TypingEffect from '../TypingEffect';

function Home() {
  return (
    <section className="hero">
      <h2>
        Hello, I'm <TypingEffect text="Roshan Naik" speed={90} />
      </h2>
      <p className="hero-sub">I am a passionate Front End Developer crafting beautiful and responsive web experiences.</p>
      <p className="hero-desc">Currently a 2nd year BTech CSE student. I love building interactive UIs, exploring new web technologies, and turning ideas into reality. Experienced in React, JavaScript, and modern CSS. Always eager to learn and collaborate on exciting projects.</p>
    </section>
  );
}

export default Home; 