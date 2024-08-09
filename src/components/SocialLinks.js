import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/saheed-abdulazeez/",
            style: "rounded-tr-md bg-blue-700",
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} className="" />
                </>
            ),
            href: "https://github.com/unique-01",
            style: "bg-black",
        },
        {
            id: 3,
            child: (
                <>
                    Whatsapp <FaWhatsapp size={30} />
                </>
            ),
            href: "https://wa.link/vilm30",
            style: "bg-green-500",
        },
        {
            id: 4,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: "mailto:azeezsaheed2003@gmail.com",
            style: "bg-red-500",
        },

        {
            id: 5,
            child: (
                <>
                    Twitter
                    <FaTwitter size={30} />
                </>
            ),
            href: "https://x.com/unicweb3",
            style: "rounded-br-md bg-blue-500",
        },
    ];

    return (
        <div className=" lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {links.map(({ id, child, href, style, download }) => (
                    <li
                        key={id}
                        className={`flex justify-between items-center w-36 h-12 px-3 ml-[-100px] md:hover:ml-[-10px] hover:rounded-md duration-300  ${style}`}>
                        <a
                            href={href}
                            className="flex justify-between items-center w-full text-white"
                            target="_blank"
                            rel="noreferrer">
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialLinks;
