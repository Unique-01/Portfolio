import { useEffect, useState } from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

const ProjectForm = () => {
    const { projectId } = useParams();
    const initialFormInput = {
        name: "",
        description: "",
        link: "",
    };
    const navigate = useNavigate()

    const [formInput, setFormInput] = useState(initialFormInput);
    const [currentImage, setCurrentImage] = useState(null);
    const [image, setImage] = useState(null);

    useEffect(() => {
        if (projectId) {
            const fetchProject = async () => {
                try {
                    const response = await axios.get(
                        `${API_URL}/projects/${projectId}`
                    );

                    setFormInput({
                        name: response.data.name,
                        description: response.data.description,
                        link: response.data.link,
                    });
                    setCurrentImage(response.data.image);
                } catch (error) {
                    console.error(error);
                }
            };
            fetchProject();
        }
    }, [projectId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInput({ ...formInput, [name]: value });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", formInput.name);
        formData.append("description", formInput.description);
        formData.append("link", formInput.link);
        formData.append("image", image);

        try {
            if (projectId) {
                await axios.patch(
                    `${API_URL}/projects/${projectId}`,
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
                alert("Project updated successfully");
                navigate("/admin")
            } else {
                await axios.post(`${API_URL}/projects`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
                alert("Project uploaded successfully");
                setFormInput(initialFormInput);
                e.target.value = null;
            }
        } catch (error) {
            alert("Error uploading project");
            console.log(error);
        }
    };
    return (
        <>
            <div
                className={
                    projectId ? "pt-20 bg-indigo-950 min-h-screen flex items-center justify-center" : "max-w-xl"
                }>
                <div>
                <h2 className=" text-3xl font-serif underline text-center text-white">
                    {projectId ? "Update Project" : "Add Projects"}
                </h2>
                <form className="space-y-4 p-10 shadow-2xl  rounded-md" onSubmit={handleSubmit}>
                    <div>
                        <label
                            className=" text-md font-medium text-gray-300 flex items-center"
                            htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formInput.name}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label
                            className="text-md font-medium text-gray-300 flex items-center"
                            htmlFor="email">
                            Description
                        </label>
                        <input
                            type="text"
                            id="description"
                            name="description"
                            value={formInput.description}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label
                            className="text-md font-medium text-gray-300 flex items-center"
                            htmlFor="email">
                            Link
                        </label>
                        <input
                            type="text"
                            id="link"
                            name="link"
                            value={formInput.link}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    {currentImage && (
                        <>
                            <label
                                className="text-md font-medium text-gray-300 flex items-center"
                                htmlFor="currentImage">
                                Current Image
                            </label>
                            <img
                                src={`${API_URL}${currentImage}`}
                                alt="."
                                name="currentImage"
                                className="w-52"
                            />
                        </>
                    )}
                    <div>
                        <label
                            className="text-md font-medium text-gray-300 flex items-center"
                            htmlFor="image">
                            Image
                        </label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            onChange={handleImageChange}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-800 text-white p-2 rounded-md hover:bg-blue-900 transition duration-300">
                        Submit
                    </button>
                </form>
                </div>
            </div>
        </>
    );
};

export default ProjectForm;
