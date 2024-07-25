import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

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
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            className="text-gray-300 hover:text-white cursor-pointer">
                            Home
                        </Link>
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            className="text-gray-300 hover:text-white cursor-pointer">
                            About
                        </Link>
                        <Link
                            to="skills"
                            smooth={true}
                            duration={500}
                            className="text-gray-300 hover:text-white cursor-pointer">
                            Skills
                        </Link>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="text-gray-300 hover:text-white cursor-pointer">
                            Contact
                        </Link>
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
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        className=" block text-gray-300 hover:text-white cursor-pointer">
                        Home
                    </Link>
                    <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        className="block text-gray-300 hover:text-white cursor-pointer">
                        About
                    </Link>
                    <Link
                        to="skills"
                        smooth={true}
                        duration={500}
                        className=" block text-gray-300 hover:text-white cursor-pointer">
                        Skills
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="block text-gray-300 hover:text-white cursor-pointer">
                        Contact
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
