import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/Admin";
import Page404 from "./pages/Page404";
import ProjectForm from "./components/ProjectForm";
import Projects from "./components/Projects";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<HomePage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/project/:projectId/" element={<ProjectForm />} />
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
