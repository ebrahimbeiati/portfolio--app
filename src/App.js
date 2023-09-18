import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from './components/Skills';
import Projects from './components/Projects.jsx'
import Contact from "./components/Contact";
// import {Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
 