const API_URL = process.env.REACT_APP_API_URL;
const ProjectCard = ({ image, name, description, link }) => {
    return (
        <div className="relative w-64 h-64 md:w-52 md:h-52 lg:w-72 lg:h-72 overflow-hidden rounded-lg shadow-lg group">
            <img
                src={`${API_URL}${image}`}
                alt={name}
                className="w-full h-full object-cover group-hover:opacity-30 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-indigo-800 bg-opacity-0 group-hover:bg-opacity-75 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {name}
                </h3>
                <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {description}
                </p>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border p-2 bg-gray-300 hover:bg-white font-bold rounded-md">
                    View Project
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
