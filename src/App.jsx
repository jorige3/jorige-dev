import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Resume from "./components/Resume";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <main className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white transition-colors duration-300 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
