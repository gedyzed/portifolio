import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';
import TestimonialCard from './components/TestimonialCard';
import AboutSection from './components/AboutSection';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'} min-vh-100 p-2 px-5`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home />
      <ProjectCard />
      <SkillCard />
      <TestimonialCard  />
      <AboutSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
