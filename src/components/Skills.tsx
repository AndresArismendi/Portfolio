import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { 
      name: "JavaScript", 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#f7df1e">
          <rect width="24" height="24" rx="2" fill="#f7df1e"/>
          <path d="M6 6h2v12h-2V6zm4 0h2v12h-2V6zm4 0h2v12h-2V6z" fill="#323330"/>
          <text x="6" y="16" font-size="14" font-weight="bold" fill="#323330">JS</text>
        </svg>
      )
    },
    { name: "HTML/CSS", icon: "🎨" },
    { name: "Next.js", icon: "▲" },
    { name: "Python", icon: "🐍" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Git", icon: "📦" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
    { name: "CI/CD", icon: "🔄" },
    { name: "REST APIs", icon: "🔌" },
    { name: "Webpack", icon: "📦" },
    { name: "Tailwind CSS", icon: "🌊" },
    { name: "Material-UI", icon: "🎭" },
    { name: "C#", icon: "♯" },
    { name: "R", icon: "📊" },
    { name: "SQL", icon: "💾" },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                {typeof tech.icon === 'string' ? tech.icon : tech.icon}
              </div>
              <p className="skill-name">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 