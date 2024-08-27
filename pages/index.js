import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import {
	SiJavascript,
	SiReact,
	SiNodedotjs,
	SiExpress,
	SiNextdotjs,
	SiRedux,
	SiMongodb,
	SiRedis,
	SiApollographql,
	SiGraphql,
	SiTypescript,
	SiAmazons3,
	SiTailwindcss,
	SiHandlebarsdotjs,
	SiGit,
	SiHtml5,
	SiCss3,
	SiPostgresql,
	SiPython,
	SiCplusplus,
	SiPhp,
	SiNetlify,
	SiDaisyui,
	SiFlask,
	SiLinux,
	SiAmazonaws,
	SiAmazonec2,
	SiSocketdotio,
	SiFirebase,
} from "react-icons/si";

const AwsIcon = ({ className }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="1em"
		viewBox="-.1 1.1 304.9 179.8"
		width="1em"
		className={className}
	>
		<path
			d="m86.4 66.4c0 3.7.4 6.7 1.1 8.9.8 2.2 1.8 4.6 3.2 7.2.5.8.7 1.6.7 2.3 0 1-.6 2-1.9 3l-6.3 4.2c-.9.6-1.8.9-2.6.9-1 0-2-.5-3-1.4-1.4-1.5-2.6-3.1-3.6-4.7-1-1.7-2-3.6-3.1-5.9-7.8 9.2-17.6 13.8-29.4 13.8-8.4 0-15.1-2.4-20-7.2s-7.4-11.2-7.4-19.2c0-8.5 3-15.4 9.1-20.6s14.2-7.8 24.5-7.8c3.4 0 6.9.3 10.6.8s7.5 1.3 11.5 2.2v-7.3c0-7.6-1.6-12.9-4.7-16-3.2-3.1-8.6-4.6-16.3-4.6-3.5 0-7.1.4-10.8 1.3s-7.3 2-10.8 3.4c-1.6.7-2.8 1.1-3.5 1.3s-1.2.3-1.6.3c-1.4 0-2.1-1-2.1-3.1v-4.9c0-1.6.2-2.8.7-3.5s1.4-1.4 2.8-2.1c3.5-1.8 7.7-3.3 12.6-4.5 4.9-1.3 10.1-1.9 15.6-1.9 11.9 0 20.6 2.7 26.2 8.1 5.5 5.4 8.3 13.6 8.3 24.6v32.4zm-40.6 15.2c3.3 0 6.7-.6 10.3-1.8s6.8-3.4 9.5-6.4c1.6-1.9 2.8-4 3.4-6.4s1-5.3 1-8.7v-4.2c-2.9-.7-6-1.3-9.2-1.7s-6.3-.6-9.4-.6c-6.7 0-11.6 1.3-14.9 4s-4.9 6.5-4.9 11.5c0 4.7 1.2 8.2 3.7 10.6 2.4 2.5 5.9 3.7 10.5 3.7zm80.3 10.8c-1.8 0-3-.3-3.8-1-.8-.6-1.5-2-2.1-3.9l-23.5-77.3c-.6-2-.9-3.3-.9-4 0-1.6.8-2.5 2.4-2.5h9.8c1.9 0 3.2.3 3.9 1 .8.6 1.4 2 2 3.9l16.8 66.2 15.6-66.2c.5-2 1.1-3.3 1.9-3.9s2.2-1 4-1h8c1.9 0 3.2.3 4 1 .8.6 1.5 2 1.9 3.9l15.8 67 17.3-67c.6-2 1.3-3.3 2-3.9.8-.6 2.1-1 3.9-1h9.3c1.6 0 2.5.8 2.5 2.5 0 .5-.1 1-.2 1.6s-.3 1.4-.7 2.5l-24.1 77.3c-.6 2-1.3 3.3-2.1 3.9s-2.1 1-3.8 1h-8.6c-1.9 0-3.2-.3-4-1s-1.5-2-1.9-4l-15.5-64.5-15.4 64.4c-.5 2-1.1 3.3-1.9 4s-2.2 1-4 1zm128.5 2.7c-5.2 0-10.4-.6-15.4-1.8s-8.9-2.5-11.5-4c-1.6-.9-2.7-1.9-3.1-2.8s-.6-1.9-.6-2.8v-5.1c0-2.1.8-3.1 2.3-3.1.6 0 1.2.1 1.8.3s1.5.6 2.5 1c3.4 1.5 7.1 2.7 11 3.5 4 .8 7.9 1.2 11.9 1.2 6.3 0 11.2-1.1 14.6-3.3s5.2-5.4 5.2-9.5c0-2.8-.9-5.1-2.7-7s-5.2-3.6-10.1-5.2l-14.5-4.5c-7.3-2.3-12.7-5.7-16-10.2-3.3-4.4-5-9.3-5-14.5 0-4.2.9-7.9 2.7-11.1s4.2-6 7.2-8.2c3-2.3 6.4-4 10.4-5.2s8.2-1.7 12.6-1.7c2.2 0 4.5.1 6.7.4 2.3.3 4.4.7 6.5 1.1 2 .5 3.9 1 5.7 1.6s3.2 1.2 4.2 1.8c1.4.8 2.4 1.6 3 2.5.6.8.9 1.9.9 3.3v4.7c0 2.1-.8 3.2-2.3 3.2-.8 0-2.1-.4-3.8-1.2-5.7-2.6-12.1-3.9-19.2-3.9-5.7 0-10.2.9-13.3 2.8s-4.7 4.8-4.7 8.9c0 2.8 1 5.2 3 7.1s5.7 3.8 11 5.5l14.2 4.5c7.2 2.3 12.4 5.5 15.5 9.6s4.6 8.8 4.6 14c0 4.3-.9 8.2-2.6 11.6-1.8 3.4-4.2 6.4-7.3 8.8-3.1 2.5-6.8 4.3-11.1 5.6-4.5 1.4-9.2 2.1-14.3 2.1z"
			fill="currentColor"
		/>
		<g clipRule="evenodd" fill="currentColor" fillRule="evenodd">
			<path d="m273.5 143.7c-32.9 24.3-80.7 37.2-121.8 37.2-57.6 0-109.5-21.3-148.7-56.7-3.1-2.8-.3-6.6 3.4-4.4 42.4 24.6 94.7 39.5 148.8 39.5 36.5 0 76.6-7.6 113.5-23.2 5.5-2.5 10.2 3.6 4.8 7.6z" />
			<path d="m287.2 128.1c-4.2-5.4-27.8-2.6-38.5-1.3-3.2.4-3.7-2.4-.8-4.5 18.8-13.2 49.7-9.4 53.3-5 3.6 4.5-1 35.4-18.6 50.2-2.7 2.3-5.3 1.1-4.1-1.9 4-9.9 12.9-32.2 8.7-37.5z" />
		</g>
	</svg>
);
export default function Home() {
	const [activeSection, setActiveSection] = useState("about");

	useEffect(() => {
		const handleScroll = () => {
			const sections = ["about", "experience", "projects", "skills", "contact"];
			const currentSection = sections.find((section) => {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					return rect.top <= 100 && rect.bottom >= 100;
				}
				return false;
			});
			if (currentSection) setActiveSection(currentSection);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const skills = [
		{ Icon: SiJavascript, name: "JavaScript" },
		{ Icon: SiReact, name: "ReactJS" },
		{ Icon: SiNodedotjs, name: "Node.js" },
		{ Icon: SiExpress, name: "Express.js" },
		{ Icon: SiNextdotjs, name: "Next.js" },
		{ Icon: SiRedux, name: "Redux" },
		{ Icon: SiMongodb, name: "MongoDB" },
		{ Icon: SiRedis, name: "Redis" },
		{ Icon: SiApollographql, name: "Apollo" },
		{ Icon: SiGraphql, name: "GraphQL" },
		{ Icon: SiTypescript, name: "TypeScript" },
		{ Icon: SiAmazons3, name: "AWS S3" },
		{ Icon: SiTailwindcss, name: "Tailwind CSS" },
		{ Icon: SiHandlebarsdotjs, name: "Handlebars" },
		{ Icon: SiGit, name: "Git" },
		{ Icon: SiHtml5, name: "HTML5" },
		{ Icon: SiCss3, name: "CSS" },
		{ Icon: SiPostgresql, name: "PostgreSQL" },
		{ Icon: SiPython, name: "Python" },
		{ Icon: SiCplusplus, name: "C++" },
		{ Icon: SiPhp, name: "PHP" },
		{ Icon: SiNetlify, name: "Netlify" },
		{ Icon: SiDaisyui, name: "DaisyUI" },
		{ Icon: SiFlask, name: "Flask" },
		{ Icon: SiLinux, name: "Linux" },
		{ Icon: SiAmazonaws, name: "AWS" },
		{ Icon: SiAmazonec2, name: "EC2" },
		{ Icon: SiSocketdotio, name: "Web Sockets" },
		{ Icon: SiFirebase, name: "Firebase" },
	];

	return (
		<div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 min-h-screen text-white">
			<header className="fixed w-full bg-opacity-90 bg-gray-900 z-50">
				<nav className="container mx-auto py-4 px-6 flex justify-between items-center">
					<Link href="/" className="text-2xl font-bold">
						VK
					</Link>
					<ul className="flex space-x-6">
						{["About", "Experience", "Projects", "Skills", "Contact"].map(
							(item) => (
								<li key={item}>
									<Link
										href={`#${item.toLowerCase()}`}
										className={`hover:text-blue-400 transition-colors ${
											activeSection === item.toLowerCase()
												? "text-blue-400"
												: ""
										}`}
									>
										{item}
									</Link>
								</li>
							)
						)}
					</ul>
				</nav>
			</header>

			<main className="pt-20">
				<section
					id="about"
					className="min-h-screen flex items-center justify-center"
				>
					<div className="container mx-auto px-6 py-20">
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className="text-center"
						>
							<Image
								src="/profile.jpg"
								alt="Vivaswanth Kashyap Madhusudhana"
								width={200}
								height={200}
								className="rounded-full mx-auto mb-8 border-4 border-blue-500"
							/>
							<h1 className="text-5xl font-bold mb-4">
								Vivaswanth Kashyap Madhusudhana
							</h1>
							<p className="text-xl mb-8">
								Full-Stack JavaScript Developer | AI Enthusiast | Founder of JS
								Prodigy
							</p>
							<div className="flex justify-center space-x-4 mb-8">
								<a
									href="https://github.com/vivaswanth-kashyap"
									target="_blank"
									rel="noopener noreferrer"
									className="text-3xl hover:text-blue-400 transition-colors"
								>
									<FaGithub />
								</a>
								<a
									href="https://www.linkedin.com/in/vivaswanth-kashyap-madhusudhana/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-3xl hover:text-blue-400 transition-colors"
								>
									<FaLinkedin />
								</a>
								<a
									href="mailto:vmadhusu1@stevens.edu"
									className="text-3xl hover:text-blue-400 transition-colors"
								>
									<FaEnvelope />
								</a>
							</div>
							<p className="text-lg">
								Passionate about building scalable web applications and
								exploring the frontiers of AI and machine learning.
							</p>
						</motion.div>
					</div>
				</section>

				{/* Add the Experience, Projects, Skills, and Contact sections here */}
				{/* ... */}
				<section id="experience" className="py-20">
					<div className="container mx-auto px-6">
						<h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
						<div className="space-y-12">
							{[
								{
									title: "Founder & Lead Developer",
									company: "JS Prodigy",
									period: "06/2024 - Present",
									description:
										"Launched a comprehensive e-learning platform for full-stack JavaScript development. Architected a multi-component system using Next.js, Node.js, and Flask.",
								},
								{
									title: "Graduate Student Tutor",
									company: "Stevens Institute of Technology",
									period: "04/2024 - Present",
									description:
										"Provide academic support for Web Programming-1 course, covering MongoDB, ExpressJS, and frontend JavaScript technologies.",
								},
								{
									title: "Software Engineer Intern",
									company: "Crypsis technologies Pvt.Ltd",
									period: "06/2022 - 06/2023",
									description:
										"Contributed to 'autochat', a SaaS platform and Shopify extension, using ReactJS and Redux. Developed website pages for GEMINI Solutions.",
								},
							].map((job, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, x: -50 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5 }}
									className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm"
								>
									<h3 className="text-2xl font-semibold">{job.title}</h3>
									<p className="text-blue-400">{job.company}</p>
									<p className="text-sm text-gray-400 mb-4">{job.period}</p>
									<p>{job.description}</p>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				<section id="projects" className="py-20 bg-gray-900">
					<div className="container mx-auto px-6">
						<h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
						<div className="grid md:grid-cols-3 gap-8">
							{[
								{
									title: "JS Prodigy",
									description:
										"A comprehensive e-learning platform for full-stack JavaScript development.",
									link: "https://jsprodigy.com",
									tech: ["Next.js", "Express.js", "Firebase", "Flask", "AWS"],
								},
								{
									title: "Veil Chat",
									description:
										"Secure messaging application with real-time chat functionality.",
									link: "https://github.com/vivaswanth-kashyap/VeilChat",
									tech: ["React", "Firebase", "MongoDB", "AWS S3"],
								},
								{
									title: "Stevens Stack Overflow",
									description:
										"A Q&A platform for Stevens Institute of Technology students.",
									link: "https://github.com/vivaswanth-kashyap/CS546_group36_final_project",
									tech: ["Express.js", "MongoDB", "Handlebars"],
								},
							].map((project, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5 }}
									className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm flex flex-col h-full"
								>
									<h3 className="text-2xl font-semibold mb-4">
										{project.title}
									</h3>
									<p className="mb-4 flex-grow">{project.description}</p>
									<div className="flex flex-wrap gap-2 mb-4">
										{project.tech.map((tech, i) => (
											<span
												key={i}
												className="bg-blue-500 bg-opacity-50 px-2 py-1 rounded-full text-sm"
											>
												{tech}
											</span>
										))}
									</div>
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-400 hover:text-blue-300 transition-colors"
									>
										View Project →
									</a>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				<section id="skills" className="py-20">
					<div className="container mx-auto px-6">
						<h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
						<div className="flex flex-wrap justify-center gap-8">
							{skills.map((skill, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, scale: 0.5 }}
									whileInView={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.5 }}
									className="text-center"
								>
									{skill.Icon && (
										<skill.Icon className="text-6xl mb-2 mx-auto" />
									)}
									<p>{skill.name}</p>
								</motion.div>
							))}
						</div>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.8 }}
							className="mt-12 text-center"
						></motion.div>
					</div>
				</section>

				<section id="contact" className="py-20 bg-gray-900">
					<div className="container mx-auto px-6">
						<h2 className="text-4xl font-bold mb-12 text-center">
							Get in Touch
						</h2>
						<div className="max-w-md mx-auto">
							<p className="text-center mb-8">
								I'm always open to new opportunities and collaborations. Feel
								free to reach out!
							</p>
							<div className="flex justify-center space-x-6">
								<a
									href="https://github.com/vivaswanth-kashyap"
									target="_blank"
									rel="noopener noreferrer"
									className="text-4xl hover:text-blue-400 transition-colors"
								>
									<FaGithub />
								</a>
								<a
									href="https://www.linkedin.com/in/vivaswanth-kashyap-madhusudhana/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-4xl hover:text-blue-400 transition-colors"
								>
									<FaLinkedin />
								</a>
								<a
									href="mailto:vmadhusu1@stevens.edu"
									className="text-4xl hover:text-blue-400 transition-colors"
								>
									<FaEnvelope />
								</a>
							</div>
						</div>
					</div>
				</section>
			</main>

			<footer className="bg-gray-900 py-6">
				<div className="container mx-auto px-6 text-center">
					<p>
						&copy; 2024 Vivaswanth Kashyap Madhusudhana. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
}
