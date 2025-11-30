import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I'm a passionate software engineer with 5+ years of experience in developing 
              scalable web applications and innovative software solutions. My journey in 
              technology began with a curiosity for how things work, which evolved into 
              a career building products that make a difference.
            </p>
            <p className="about-description">
              I specialize in modern web technologies including React, TypeScript, and 
              Node.js, with a strong foundation in cloud architecture and DevOps practices. 
              My approach combines technical expertise with creative problem-solving to 
              deliver exceptional user experiences.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">5+</span>
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
                  <a href="https://github.com" className="profile-link">GitHub</a>
                  <a href="https://linkedin.com" className="profile-link">LinkedIn</a>
                  <a href="mailto:alex@example.com" className="profile-link">Email</a>
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