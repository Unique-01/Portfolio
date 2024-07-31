import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/Admin";
import Page404 from "./pages/Page404";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<HomePage />} />
                <Route path="/myPortfolio" element={<AdminPage />} />
                <Route path="/*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
