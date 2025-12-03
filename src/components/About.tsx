import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              <b>Experienced Software Engineer</b> and Team Leader with 8+ years of experience designing scalable software systems, leading
              cross-functional teams, and delivering data-driven solutions. Strong background in automation, predictive analytics, and
              business-aligned technology strategies. Recognized for driving innovation, enhancing operational efficiency, and mentoring
              technical teams.
            </p>
            <p className="about-description">
              I specialize in modern web technologies including C#, Javascript, R, React, TypeScript, and 
              more, with a strong foundation in cloud architecture and DevOps practices. 
              My approach combines technical expertise with creative problem-solving to 
              deliver exceptional user experiences.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">8+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="profile-card">
              <div className="profile-avatar">
                <div className="avatar-placeholder">AC</div>
              </div>
              <div className="profile-info">
                <h3>Andres Arismendi</h3>
                <p>Software Engineer</p>
                <div className="profile-links">
                  <a href="https://github.com/AndresArismendi" className="profile-link">GitHub</a>
                  <a href="https://linkedin.com/in/andres-arismendi" className="profile-link">LinkedIn</a>
                  <a href="mailto:andres.c.arismendi" className="profile-link">Email</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 