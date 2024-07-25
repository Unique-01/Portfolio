import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
    return (
        <div className="bg-indigo-950 min-h-screen">
            <Navbar />
            <div className="container mx-auto">
                <Home />
                <About />
                <Skills />
            </div>
        </div>
    );
}

export default App;
