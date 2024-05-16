"use effect"
import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import Image from 'next/image'
import { FaGithub } from "react-icons/fa";


export function ProjectsSection() {
    const textRef = useRef(null);
    // const isTextInView = useInView(textRef, { once: true });

    const projects = [
        {
            title: "Cloud-Based Microservice for Automotive Parts Company",
            description:
                "Implemented a scalable microservice with CRUD operations to manage fragments of files in formats such as txt, JSON, PNG, JPEG, WebP, and GIF. Key AWS technologies including Cognito, ECR, ECS, S3, and DynamoDB were leveraged for efficient integration. Utilized Docker and Docker Compose, along with a robust CI/CD pipeline, to facilitate the project's transition through local, development, and production phases. Achieved secure deployment in a domain environment with HTTPS support. Developed unit tests, achieving an 80% coverage of the project. Tools like JEST and HURL were employed to ensure code reliability and quality across all stages of development.",
            image: "/cloudImageProject.png",
            link: "https://youtu.be/oiVnywvvH7E",
        },
        {
            title: "Chronicle App (Social App Journal)",
            description:
                "Developed with MERN stack (MongoDB, Express.js, React, Node.js) along with the NEXT framework for robust development in both the backend and frontend. Additionally, I managed data within the application using Redux. Implemented a user-centered UI/UX design in Figma, incorporating features such as travel journal creation, destination ratings, forums, and meetups. Maintained a detailed project schedule with milestones and acceptance criteria, monitoring progress on GitHub.",
            image: "/chroniclePhotoProject.png",
            link: "https://chronicle-web-app-eight.vercel.app/",
        },
        {
            title: "Music App Using Angular",
            description:
			"This project utilizes Angular to create a music application that integrates with the Spotify API for seamless access to music data. It implements CRUD operations to efficiently manage user data and interactions. With the Spotify API integration, users can explore new music releases, search for songs or artists, and enjoy personalized playlists. Additionally, the application features user authentication and JWT password security for a secure and personalized experience.",
			image: "/seneca-musicNew.png",
            link: "https://project-henna-six.vercel.app/login",
        },
    ];

    return (
        <LazyMotion features={domAnimation}>
            <section id="project" className="section">
                <HeadingDivider title="Latest projects" />
                <div className="my-5 flex flex-wrap justify-center">
                    {projects.map((project, index) => (
                        <div key={index} className="m-4 max-w-xs bg-white rounded-lg shadow-md">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <div className="flex justify-center">
                                    <Image
                                        src={project.image}
                                        width={500}
                                        height={500}
                                        alt={project.title}
                                        className="rounded-t-lg"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-bold mb-2 text-black">{project.title}</h3>
                                    <p
                                        ref={textRef}
                                        tabIndex="0"
                                        className={`font-light text-lg text-black`}
                                    >
                                        {project.description}
                                    </p>
                                    <div className="flex justify-center">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" 
										className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-md transition duration-300 hover:bg-blue-600" style={{backgroundColor: "rgb(49 130 206 / var(--tw-bg-opacity))"}}>Go to the Project</a>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <a href="https://github.com/jdcastel" target="_blank" rel="noopener noreferrer" 
                    className="flex gap-2 items-center mt-4 px-4 py-2 bg-gray-500 text-white rounded-md transition duration-300 hover:bg-gray-600">More Projects on my Github <FaGithub size={32}/></a>
                </div>
            </section>
        </LazyMotion>
		    );
}
