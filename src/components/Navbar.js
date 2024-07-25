import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <nav className="fixed w-full p-4 shadow-lg bg-indigo-950">
                <div className=" container mx-auto flex justify-between items-center ">
                    <div className="text-white text-xl">Unic</div>
                    <div className="hidden md:flex space-x-4 ">
                        <a href="#home" className="text-gray-300 hover:text-white">
                            Home
                        </a>
                        <a href="#about" className="text-gray-300 hover:text-white">
                            About
                        </a>
                        <a href=" " className="text-gray-300 hover:text-white">
                            Services
                        </a>
                        <a href=" " className="text-gray-300 hover:text-white">
                            Contact
                        </a>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className={`text-white focus:outline-none ${
                                isOpen ? "hidden" : "block"
                            } `}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                        <button
                            onClick={toggleMenu}
                            className={`text-white focus:outline-none ${
                                isOpen ? "block" : "hidden"
                            } `}>
                            <FontAwesomeIcon icon={faX} />
                        </button>
                    </div>
                </div>
                <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
                    <a
                        href="#home"
                        className="block text-gray-300 hover:text-white px-4 py-2">
                        Home
                    </a>
                    <a
                        href="#about"
                        className="block text-gray-300 hover:text-white px-4 py-2">
                        About
                    </a>
                    <a
                        href=" "
                        className="block text-gray-300 hover:text-white px-4 py-2">
                        Services
                    </a>
                    <a
                        href=" "
                        className="block text-gray-300 hover:text-white px-4 py-2">
                        Contact
                    </a>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
