import ProjectForm from "../components/ProjectForm";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const AdminPage = () => {
    const [projects, setProjects] = useState([]);
    const [code, setCode] = useState("");
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(`${API_URL}/projects`);
                setProjects(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProjects();
    }, []);

    const handleAdminAccess = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${API_URL}/admin`, { code });
            setIsAuthorized(true);
        } catch (error) {
            alert("Invalid Access credentials");
        }
    };

    if (!isAuthorized) {
        return (
            <div className="flex items-center justify-center min-h-screen py-10 bg-indigo-950">
                <div className="max-w-xl">
                    <form
                        onSubmit={handleAdminAccess}
                        className="lg:w-96 border rounded p-5 ">
                        <input
                            type="password"
                            placeholder="Input Access Code"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                        />
                        <button
                            className="bg-blue-600 px-4 py-2 mt-2 rounded-md hover:bg-blue-800 text-white"
                            type="submit">
                            Enter
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="pt-20 min-h-screen bg-indigo-950">
                <div className="container mx-auto">
                    <h1>WELCOME TO THE ADMIN PAGE</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <ProjectForm />
                        <div>
                            <h1 className="text-3xl text-center pb-3 font-serif text-white underline">
                                Projects
                            </h1>
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
                                {projects.map((project, index) => (
                                    <Link
                                        key={index}
                                        to={`/project/${project._id}`}>
                                        <img
                                            src={`${API_URL}${project.image}`}
                                            alt={project.name}
                                            className="w-44 h-44 hover:scale-110 "
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminPage;
