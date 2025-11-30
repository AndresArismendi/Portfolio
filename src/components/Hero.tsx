import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="greeting">Hello, I'm</span>
              <span className="name">Andres Arismendi</span>
              <span className="title">Software Engineer</span>
            </h1>
            <p className="hero-description">
              Passionate about creating elegant solutions and building innovative applications. 
              Specialized in full-stack development with a focus on user experience and scalable architecture.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="code-animation">
              <div className="code-line">
                <span className="code-keyword">const</span> 
                <span className="code-variable">developer</span> = 
                <span className="code-string">'Andres Arismendi'</span>;
              </div>
              <div className="code-line">
                <span className="code-keyword">const</span> 
                <span className="code-variable">skills</span> = [
              </div>
              <div className="code-line indent">
                <span className="code-string">'React'</span>,
              </div>
              <div className="code-line indent">
                <span className="code-string">'TypeScript'</span>,
              </div>
              <div className="code-line indent">
                <span className="code-string">'Node.js'</span>,
              </div>
              <div className="code-line indent">
                <span className="code-string">'Python'</span>
              </div>
              <div className="code-line">];</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 