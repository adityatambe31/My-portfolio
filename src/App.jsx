import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Awards from "./components/Awards";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 relative">
      <div className="fixed top-0 left-0 h-full w-full z-[-1] bg-neutral-950">
        <div className="h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">

        </div>
      </div>
      <div className="container mx-auto px-8 relative z-10">
        <Navbar />
        <Hero />
        <About/>
        <Tech/>
        <Experience/>
        <Project/>
        <Awards/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
