import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faEnvelope,
    faComment,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from "axios";
import env from "react-dotenv";

const API_URL = env.API_URL;

const Contact = () => {
    const initialFormData = {
        name: "",
        email: "",
        message: "",
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${API_URL}/contact`, formData);
            alert("Your message has been sent successfully");
            setFormData(initialFormData);
        } catch (error) {
            alert("unable to send message");
            console.log(error);
        }
    };

    return (
        <div
            className="flex items-center justify-center min-h-screen py-10"
            id="contact">
            <div className="max-w-xl w-full mt-10 mx-3">
                <h2 className="text-5xl text-white underline text-center font-serif">
                    Get In Touch
                </h2>
                <form className="space-y-4 p-5" onSubmit={handleSubmit}>
                    <div>
                        <label
                            className=" text-md font-medium text-gray-300 flex items-center"
                            htmlFor="name">
                            <FontAwesomeIcon icon={faUser} className="mr-2" />
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label
                            className="text-md font-medium text-gray-300 flex items-center"
                            htmlFor="email">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="mr-2"
                            />
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label
                            className="text-md font-medium text-gray-300 flex items-center"
                            htmlFor="message">
                            <FontAwesomeIcon
                                icon={faComment}
                                className="mr-2"
                            />
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            rows="8"
                            required></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-800 text-white p-2 rounded-md hover:bg-blue-900 transition duration-300">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
