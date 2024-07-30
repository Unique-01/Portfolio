// App.jsx or any other component
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    const projects = [
        {
            image: "/assets/program.svg",
            name: "Project 1",
            description: "This is a description for Project 1.",
            link: "https://example.com/project1",
        },
        {
            image: "/assets/program.svg",
            name: "Project 1",
            description: "This is a description for Project 1.",
            link: "https://example.com/project1",
        },
        {
            image: "/assets/program.svg",
            name: "Project 1",
            description: "This is a description for Project 1.",
            link: "https://example.com/project1",
        },
        {
            image: "/assets/program.svg",
            name: "Project 1",
            description: "This is a description for Project 1.",
            link: "https://example.com/project1",
        },
        {
            image: "/assets/program.svg",
            name: "Project 1",
            description: "This is a description for Project 1.",
            link: "https://example.com/project1",
        },
        {
            image: "/assets/skills/python.svg",
            name: "Project 2",
            description:
                "This is a description for Project 2.This is a description for Project 2.This is a description for Project 2.This is a description for Project 2.This is a description for Project 2.",
            link: "https://example.com/project2",
        },
    ];

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
