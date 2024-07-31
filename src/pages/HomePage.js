import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const HomePage = () => {
    return (
        <>
            <div className="bg-indigo-950 min-h-screen">
                <div className="container mx-auto">
                    <Home />
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                </div>
            </div>
        </>
    );
};

export default HomePage;
