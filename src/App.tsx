import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects'; 
import Contact from './components/Contact';
import { trackPageView } from './utils/analytics';

function App() {
  useEffect(() => {
    // Track initial page view
    trackPageView('/');
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;