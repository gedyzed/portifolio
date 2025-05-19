import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";


function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
     <div className={`${darkMode ? "bg-dark bg-opacity-85 text-light" : "bg-light bg-opacity-85 text-dark"} min-vh-100`}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="container py-4">
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode}/>} />
            <Route path="/projects" element={<Projects darkMode={darkMode} />} />
            <Route path="/about" element={<About darkMode={darkMode} />} />
            <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
