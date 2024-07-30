import SkillsCard from "./SkillsCard";

const skills = [
    { name: "Tailwind", image: "/assets/skills/tailwind.svg" },
    { name: "Bootstrap", image: "/assets/skills/bootstrap.png" },
    { name: "JavaScript", image: "/assets/skills/js.png" },
    { name: "React", image: "/assets/skills/react.png" },
    { name: "Node.js", image: "/assets/skills/nodeJs.svg" },
    { name: "Express Js", image: "/assets/skills/expressJs.svg" },
    { name: "Python", image: "/assets/skills/python.svg" },
    { name: "Django", image: "/assets/skills/django.svg" },
    { name: "Flask", image: "/assets/skills/flask.svg" },
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
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-center py-5">
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
