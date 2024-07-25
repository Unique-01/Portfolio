import SkillsCard from "./SkillsCard";

const skills = [
    { name: "Tailwind", image: "/assets/tailwind.svg" },
    { name: "Bootstrap", image: "/assets/bootstrap.png" },
    { name: "JavaScript", image: "/assets/js.png" },
    { name: "React", image: "/assets/react.png" },
    { name: "Node.js", image: "/assets/nodeJs.svg" },
    { name: "Express Js", image: "/assets/expressJs.svg" },
    { name: "Python", image: "/assets/python.svg" },
    { name: "Django", image: "/assets/django.svg" },
    { name: "Flask", image: "/assets/flask.svg" },
];

const Skills = () => {
    return (
        <>
            <div
                className="flex items-center justify-center min-h-screen py-10"
                id="skills">
                <div>
                    <h1 className="text-5xl text-white underline text-center font-serif">
                        Skills
                    </h1>
                    <div className="flex flex-wrap justify-center py-5">
                        {skills.map((skill, index) => (
                            <SkillsCard
                                key={index}
                                image={skill.image}
                                name={skill.name}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skills;
