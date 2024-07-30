import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
    return (
        <div className="bg-indigo-950 min-h-screen">
            <Navbar />
            <div className="container mx-auto">
                <Home />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div>
        </div>
    );
}

export default App;
