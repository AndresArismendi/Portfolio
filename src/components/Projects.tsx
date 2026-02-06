import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Chilean Stock Analysis and Scraping",
      description: "A web application for scraping and analyzing Chilean stock market data. Built with R and Shiny, it provides interactive visualizations and price analysis by company and time period.",
      technologies: ["R", "Shiny"],
      image: "📊",
      github: "https://github.com/AndresArismendi/ShinyAppScrappingChileanStock",
      live: "https://xumwa2-andr0s-arismendi.shinyapps.io/andres_arismendi-aidasofia_adrian-shiny/",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "TypeScript", "Socket.io", "MongoDB", "Express"],
      image: "📋",
      github: "https://github.com",
      live: "https://example.com",
      featured: true
    },
    {

      id: 3,
      title: "Civic Test 2025 - 128 Questions",
      description: "A web application for studying the 128 questions for the USA citizenship test in 2025.",
      technologies: ["React", "CSS3"],
      image: "📝",
      github: "https://github.com/AndresArismendi/USA_128_Civics_Questions_2025",
      live: "https://mycivics128.com/",
      featured: false

    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with modern web technologies and elegant animations.",
      technologies: ["React", "TypeScript", "Framer Motion", "CSS3"],
      image: "💼",
      github: "https://github.com/AndresArismendi/Portfolio",
      live: "https://www.AndresArismendi.com",
      featured: false
    },
    {
      id: 5,
      title: "Chat Application",
      description: "Real-time chat application with user.",
      technologies: ["React", "Socket.io", "Node.js"],
      image: "💬",
      github: "https://github.com/AndresArismendi/ChatSocketIO",
      featured: false
    },
    {
      id: 6,
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current weather conditions and forecasts using OpenWeatherMap API with beautiful visualizations.",
      technologies: ["React", "Chart.js", "OpenWeatherMap API", "CSS3"],
      image: "🌤️",
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    }

  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-image">
                <div className="project-icon">{project.image}</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="technology-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    <span>GitHub</span>
                  </a>
                  <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Interested in seeing more of my work?</p>
          <a href="https://github.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 