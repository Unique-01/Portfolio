import ProjectCard from "./ProjectCard";
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const Projects = () => {
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
            <div
                className="flex items-center justify-center min-h-screen py-10"
                id="projects">
                <div className="p-10 text-center">
                    <h1 className="underline text-white text-5xl font-serif mb-10">
                        Projects
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                image={project.image}
                                name={project.name}
                                description={project.description}
                                link={project.link}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;
