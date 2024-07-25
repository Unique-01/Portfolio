import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
    return (
        <div className="bg-indigo-950 min-h-screen">
            <Navbar />
            <div className="container mx-auto">
                <Home />
                <About/>
            </div>
        </div>
    );
}

export default App;
