import ProjectForm from "../components/ProjectForm";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const AdminPage = () => {
    const [projects, setProjects] = useState([]);

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

    return (
        <>
            <div className="pt-20 min-h-screen bg-indigo-950">
                <div className="container mx-auto">
                    <h1>WELCOME TO THE ADMIN PAGE</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <ProjectForm />
                        <div>
                            <h1 className="text-3xl text-center pb-3 font-serif text-white underline">Projects</h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
                            {projects.map((project, index) => (
                                <Link key={index} to={`/project/${project._id}`}>
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
