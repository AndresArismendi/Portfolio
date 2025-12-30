import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [activeFile, setActiveFile] = useState('Main.cs');

  return (
    <section id="home" className="hero ide-frame">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title"> 
              <span className="greeting">Hello, I'm</span>
              <span className="name">Andres Arismendi</span>
              <span className="title">Computer Engineer</span>
              <span className="title">MSc in Computer Science</span>
            </h1>
            <p className="hero-description">
              Passionate about creating elegant solutions and building innovative applications. 
              Specialized in full-stack development with a focus on user experience and scalable architecture.
            </p>
            
            <div className="hero-social-icons">
              <a href="https://github.com/AndresArismendi" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/Andres-Arismendi" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.81 0-9.728h3.554v1.375c.428-.66 1.194-1.602 2.905-1.602 2.122 0 3.714 1.388 3.714 4.373v5.582zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.705 0-.955.77-1.708 1.963-1.708 1.192 0 1.917.753 1.917 1.708 0 .947-.768 1.705-1.965 1.705zm1.946 11.597H3.392V9.021h3.891v11.431zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </a>
              <a href="/Andres Arismendi Ferrada Resume.pdf" download className="social-icon" title="Download CV">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-8-6z"/>
                  <path d="M12 19v-6m-3 3h6M12 9V3"/>
                </svg>
              </a>
              <a href="mailto:andres.c.arismendi@gmail.com" className="social-icon" title="Send Email">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <a href="https://www.hackerrank.com/andres_arismendi" target="_blank" rel="noopener noreferrer" className="social-icon" title="HackerRank" >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="47.4067 26.001 417.2 460" width="24" height="24" fill="white">
                  <path d="M454.843 141.001c-13.019-22.417-172.832-115-198.859-115-26.019 0-185.895 92.351-198.84 115-12.947 22.649-13.019 207.358 0 230.009 13.018 22.639 172.839 114.989 198.84 114.989 26 0 185.841-92.466 198.851-114.999 13.007-22.533 13.016-207.583.008-229.999zM309.862 398.15c-3.559 0-36.756-32.137-34.141-34.762.781-.78 5.625-1.328 15.768-1.644 0-23.564.53-61.622.844-77.553.038-1.814-.395-3.081-.395-5.256h-71.812c0 6.379-.412 32.523 1.232 65.479.205 4.078-1.42 5.353-5.158 5.335-9.102-.025-18.211-.099-27.321-.071-3.683.009-5.274-1.374-5.157-5.488.826-30.043 2.66-75.488-.134-191.07v-2.849c-8.688-.314-14.717-.862-15.508-1.652-2.624-2.624 31.032-34.76 34.581-34.76 3.558 0 36.989 32.145 34.383 34.76-.782.781-7.098 1.338-15.067 1.652v2.84c-2.174 23.135-1.823 71.506-2.362 94.686h72.107c0-4.089.351-31.212-1.077-75.145-.091-3.047.853-4.646 3.781-4.672 9.945-.072 19.9-.117 29.855-.055 3.108.019 4.105 1.546 4.043 4.834-3.28 171.861-.594 159.867-.594 188.975 7.97.315 15.112.864 15.895 1.655 2.588 2.615-30.205 34.761-33.763 34.761z" fill="white"/>
                </svg>
              </a>
            </div>
              <br />
              <br />
            <div className="hero-buttons">
              
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="ide-window">
              <div className="ide-header">
                <div className="ide-tabs">
                  <div className="ide-tab">AndresArismendi.sln</div>
                </div>
                <div className="ide-controls">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
              </div>

              <div className="ide-body">
                <aside className="ide-sidebar">
                  <ul className="file-list">
                    <li
                      className={`file ${activeFile === 'Main.cs' ? 'active' : ''}`}
                      onClick={() => setActiveFile('Main.cs')}
                    >
                      Main.cs
                    </li>
                    <li
                      className={`file ${activeFile === 'Controller.cs' ? 'active' : ''}`}
                      onClick={() => setActiveFile('Controller.cs')}
                    >
                      Controller.cs
                    </li>
                    <li
                      className={`file ${activeFile === 'Readme.md' ? 'active' : ''}`}
                      onClick={() => setActiveFile('Readme.md')}
                    >
                      Readme.md
                    </li>
                  </ul>
                </aside>

                <div className="ide-editor">
                  {activeFile === 'Main.cs' ? (
                    <div className="code-animation">
                      <div className="code-line">
                        <span className="code-keyword">var</span> engineer = <span className="code-keyword">new</span> SoftwareEngineer
                      <div className="code-line">{'{'}</div>
                        NameDev =
                        <span className="code-string"> "Andres Arismendi"</span>,
                      </div>
                      <div className="code-line">
                        Skills = <span className="code-keyword">new List</span><span className="code-variable">{'<'}string{'>'}</span>
                      </div>
                      <div className="code-line">{'{'}</div>
                      <div className="code-line indent">
                        <span className="code-string">"C#"</span>,
                      </div>
                      <div className="code-line indent">
                        <span className="code-string">"JavaScript"</span>,
                      </div>
                      <div className="code-line indent">
                        <span className="code-string">"TypeScript"</span>,
                      </div>
                      <div className="code-line indent">
                        <span className="code-string">"React"</span>,
                      </div>
                      <div className="code-line indent">
                        <span className="code-string">"Python"</span>,
                      </div>
                      <div className="code-line indent">
                        <span className="code-string">"SQL"</span>,
                      </div>
                      <div className="code-line indent">
                        <span className="code-string">"R"</span>
                      </div>
                      <div className="code-line">{'},'}</div>
                      Motto = <span className="code-string">"I turn coffee ☕ into code<br></br>(and sometimes bugs 🐛)."
                      </span>
                      <div className="code-line">{'};'}</div>

                      engineer.<span className="code-variable">Introduce();</span>
                    </div>
                  ) : activeFile === 'Controller.cs' ? (
                    <div className="code-animation">
                      <div className="code-line"><span className="code-keyword">using</span> System;</div>
                      <div className="code-line"><span className="code-keyword">using</span> System.Collections.Generic;</div>
                      <div className="code-line"><span className="code-keyword">using</span> System.Linq;</div>
                      <div className="code-line"><span className="code-keyword">public class</span> SoftwareEngineer</div>

                        <div className="code-line indent">
                        <div className="code-line">{'{'}</div>
                        <div className="code-line"><span className="code-keyword">public string</span> NameDev {'{'} <span className="code-keyword">get</span>; <span className="code-keyword">set</span>; {'}'} </div>
                        <div className="code-line"><span className="code-keyword">public List<span className="code-variable">{'<'}string{'>'}</span></span> Skills {'{'} <span className="code-keyword">get</span>; <span className="code-keyword">set</span>; {'}'} </div>
                        <div className="code-line"><span className="code-keyword">public string</span> Motto {'{'} <span className="code-keyword">get</span>; <span className="code-keyword">set</span>; {'}'} </div>
                        <div className="code-line"><span className="code-keyword">public void</span> Introduce()</div>
                        <div className="code-line">{'{'}</div>
                            <div className="code-line indent"></div>
                                <div className="code-line indent"><span className="code-console">Console</span><span className="code-writeline">.WriteLine</span>(<span className="code-string">$"👋 Hello, I'm </span>
                                <div className="code-line indent">{'{'}NameDev{'}'}<span className="code-string">!"</span>);</div></div>
                                <div className="code-line indent"><span className="code-console">Console</span><span className="code-writeline">.WriteLine</span>(<span className="code-string">"💻 Skills:"</span>);</div>
                                <div className="code-line indent"><span className="code-for">foreach</span> (<span className="code-keyword">var</span> <span className="code-variable">skill</span> <span className="code-for">in</span> Skills)</div>
                                <div className="code-line indent">{'{'}
                                <div className="code-line indent"><span className="code-console">Console</span><span className="code-writeline">.WriteLine</span>(<span className="code-string">$" - </span>{'{'}skill{'}'}<span className="code-string">"</span>);</div></div>
                                <div className="code-line indent">{'}'}</div>
                                <div className="code-line indent"><span className="code-console">Console</span><span className="code-writeline">.WriteLine</span>();</div>
                                <div className="code-line indent"><span className="code-console">Console</span><span className="code-writeline">.WriteLine</span>(<span className="code-string">$"🧠 Motto: </span>
                                <div className="code-line indent">{'{'}Motto{'}'}<span className="code-string">"</span>);</div></div>
                                <div className="code-line indent">{'}'}</div>
                              </div>
                              <div className="code-line indent">{'}'}</div>                      
                          <div className="code-line">{'}'}</div>                    
                      </div>
                  ) : ( 
                    <div className="code-animation">
                      <div className="code-line"><span className="code-coment"># Readme</span></div>
                      <div className="code-line">This is a demo file. Click other </div>
                        <div className="code-line">files to view code.</div>
                    </div>
                  )
                  }
                
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      
    </section>
  );
};

export default Hero; 