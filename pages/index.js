import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { Inter } from "next/font/google";
import {
	FaGithub,
	FaLinkedin,
	FaEnvelope,
	FaBars,
	FaTimes,
} from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className="min-h-screen relative overflow-hidden">
			<Image
				src="/blob-haikei.svg"
				alt="Background"
				layout="fill"
				objectFit="cover"
				className="absolute z-0"
			/>
			<Image
				src="/circle-scatter-haikei-4.svg"
				alt="Background"
				layout="fill"
				objectFit="cover"
				className="absolute z-0 opacity-50"
			/>

			<header className="container mx-auto py-4 px-4 relative z-10 text-white">
				<nav className="navbar">
					<div className="navbar-start">
						<Link href="/">
							<h1 className="text-2xl font-bold tracking-wide flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-8 w-8 mr-2"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M15 19l-7-7 7-7"
									/>
								</svg>
								Vivaswanth Kashyap
							</h1>
						</Link>
					</div>
					<div className="navbar-end">
						<button
							className="btn btn-square btn-ghost lg:hidden"
							onClick={toggleMenu}
						>
							{isMenuOpen ? (
								<FaTimes className="text-2xl" />
							) : (
								<FaBars className="text-2xl" />
							)}
						</button>
						<ul
							className={`menu menu-horizontal bg-base-100 lg:bg-transparent absolute lg:static top-full left-0 right-0 z-20 lg:flex ${
								isMenuOpen ? "flex" : "hidden"
							}`}
						>
							<li>
								<Link href="#about">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6 mr-2"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
									About
								</Link>
							</li>
							<li>
								<Link href="#experience">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6 mr-2"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										/>
									</svg>
									Experience
								</Link>
							</li>
							<li>
								<Link href="#projects">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6 mr-2"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
										/>
									</svg>
									Projects
								</Link>
							</li>
							<li>
								<Link href="#skills">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6 mr-2"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
										/>
									</svg>
									Skills
								</Link>
							</li>
							<li>
								<Link href="#contact">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6 mr-2"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										/>
									</svg>
									Contact
								</Link>
							</li>
							<li>
								<Link href="/blog">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6 mr-2"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
										/>
									</svg>
									Blog
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</header>

			<main className="container mx-auto px-4 relative z-10">
				<section id="about" className="hero min-h-screen">
					<div className="hero-content flex-col lg:flex-row">
						<div className="avatar mb-8 lg:mb-0">
							<div className="w-64 rounded-full shadow-lg">
								<Image
									src="/836.jpg"
									alt="Vivaswanth Kashyap Madhusudhana"
									width={256}
									height={256}
								/>
							</div>
						</div>
						<div className="lg:ml-8 text-white text-center lg:text-left">
							<h2 className="text-4xl font-bold mb-4 flex items-center justify-center lg:justify-start">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-10 w-10 mr-2"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
								About Me
							</h2>
							<p className="text-lg mb-4">
								I am a passionate software engineer with experience in web
								development using modern technologies such as ReactJS, Next.js,
								Node.js, and more.
							</p>
							<p className="text-lg">
								2019203429 | vmadhusu1@stevens.edu | Jersey City, NJ
							</p>
						</div>
					</div>
				</section>

				<section id="experience" className="py-20">
					<h2 className="text-5xl font-bold mb-8 text-center flex items-center justify-center relative text-white p-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-12 w-12 mr-2"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
						Experience
						<Image
							src="/wave-haikei.svg"
							alt="Background"
							layout="fill"
							objectFit="cover"
							className="absolute z-0 opacity-50"
						/>
					</h2>
					<div className="card bg-base-100 shadow-xl mb-12 relative z-10">
						<div className="card-body">
							<h3 className="card-title text-3xl">
								Crypsis technologies Pvt.Ltd | Hyderabad, Telangana
							</h3>
							<p className="text-lg mb-4">
								Software Engineer Intern | 06/2022 - 06/2023
							</p>
							<ul className="list-disc ml-8">
								<li className="mb-2">
									Worked on a SaaS platform 'autochat', a Shopify extension
									available to store owners to track and manage their
									interactions with customers using ReactJS, and Redux.
								</li>
								<li className="mb-2">
									Built the landing page, careers and community pages of GEMINI
									Solutions web site using Next.js and, Tailwind and custom CSS.
								</li>
								<li>
									Collaborated with a team of 12 people to improve the code
									readability and writing maintainable code.
								</li>
							</ul>
						</div>
					</div>
				</section>

				<section id="projects" className="py-20">
					<h2 className="text-5xl font-bold mb-8 text-center flex items-center justify-center relative text-white p-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-12 w-12 mr-2"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
							/>
						</svg>
						Projects
						<Image
							src="/layered-waves-haikei-2.svg"
							alt="Background"
							layout="fill"
							objectFit="cover"
							className="absolute z-0 opacity-50"
						/>
					</h2>
					<div className="grid grid-cols-1 gap-12 relative z-10">
						<div className="card bg-base-100 shadow-xl">
							<div className="card-body">
								<h3 className="card-title text-3xl">
									<Link
										href="https://github.com/vivaswanth-kashyap/VeilChat"
										target="_blank"
									>
										Veil Chat
									</Link>
								</h3>
								<ul className="list-disc ml-8">
									<li className="mb-2">
										Built the frontend with React js and tailwind css
									</li>
									<li className="mb-2">
										Built the authentication and real-time chats using Firebase
									</li>
									<li className="mb-2">Used Twilio for message services</li>
									<li>
										Used AWS services like EC2 for hosting, S3 for storing
										images
									</li>
								</ul>
							</div>
						</div>
						<div className="card bg-base-100 shadow-xl">
							<div className="card-body">
								<h3 className="card-title text-3xl">
									<Link
										href="https://github.com/vivaswanth-kashyap/CS546_group36_final_project"
										target="_blank"
									>
										Stevens Stack Overflow
									</Link>
								</h3>
								<ul className="list-disc ml-8">
									<li className="mb-2">
										Built the API routes with Express js and Node.js
									</li>
									<li className="mb-2">Handled data operations with MongoDB</li>
									<li>
										Built the front end using handlebars, JavaScript, axios, and
										tailwind css
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				<section id="skills" className="py-20">
					<h2 className="text-5xl font-bold mb-8 text-center flex items-center justify-center relative text-white p-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-12 w-12 mr-2"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
							/>
						</svg>
						Skills
						<Image
							src="/blob-scene-haikei-2.svg"
							alt="Background"
							layout="fill"
							objectFit="cover"
							className="absolute z-0 opacity-50"
						/>
					</h2>
					<div className="flex flex-wrap justify-center relative z-10">
						<span className="badge badge-lg badge-primary m-2">JavaScript</span>
						<span className="badge badge-lg badge-primary m-2">ReactJS</span>
						<span className="badge badge-lg badge-primary m-2">Node.js</span>
						<span className="badge badge-lg badge-primary m-2">Express.js</span>
						<span className="badge badge-lg badge-primary m-2">NextJs</span>
						<span className="badge badge-lg badge-primary m-2">Redux</span>
						<span className="badge badge-lg badge-primary m-2">MongoDB</span>
						<span className="badge badge-lg badge-primary m-2">Apollo</span>
						<span className="badge badge-lg badge-primary m-2">GraphQL</span>
						<span className="badge badge-lg badge-primary m-2">Typescript</span>
						<span className="badge badge-lg badge-primary m-2">Handlebars</span>
						<span className="badge badge-lg badge-primary m-2">Git</span>
						<span className="badge badge-lg badge-primary m-2">HTML5</span>
						<span className="badge badge-lg badge-primary m-2">CSS</span>
						<span className="badge badge-lg badge-primary m-2">SQL</span>
						<span className="badge badge-lg badge-primary m-2">PostgreSQL</span>
						<span className="badge badge-lg badge-primary m-2">
							Tailwind CSS
						</span>
						<span className="badge badge-lg badge-primary m-2">Redis</span>
						<span className="badge badge-lg badge-primary m-2">WebSockets</span>
						<span className="badge badge-lg badge-primary m-2">Firebase</span>
						<span className="badge badge-lg badge-primary m-2">AWS EC2</span>
						<span className="badge badge-lg badge-primary m-2">AWS S3</span>
						<span className="badge badge-lg badge-primary m-2">Python</span>
						<span className="badge badge-lg badge-primary m-2">C++</span>
						<span className="badge badge-lg badge-primary m-2">PHP</span>
						<span className="badge badge-lg badge-primary m-2">Bootstrap</span>
						<span className="badge badge-lg badge-primary m-2">PEGA 8.7v</span>
					</div>
				</section>

				<section id="contact" className="py-20">
					<h2 className="text-5xl font-bold mb-8 text-center flex items-center justify-center relative text-white p-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-12 w-12 mr-2"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
						Contact
						<Image
							src="/circle-scatter-haikei-4.svg"
							alt="Background"
							layout="fill"
							objectFit="cover"
							className="absolute z-0 opacity-50"
						/>
					</h2>
					<div className="flex flex-col items-center relative z-10">
						<p className="text-lg mb-4">Email: vmadhusu1@stevens.edu</p>
						<p className="text-lg mb-8">Location: Jersey City, NJ</p>
						<div className="flex space-x-6">
							<a
								href="https://github.com/vivaswanth-kashyap"
								target="_blank"
								rel="noopener noreferrer"
								className="btn btn-circle btn-primary"
							>
								<FaGithub className="text-2xl" />
							</a>
							<a
								href="https://www.linkedin.com/in/vivaswanth-kashyap-madhusudhana/"
								target="_blank"
								rel="noopener noreferrer"
								className="btn btn-circle btn-primary"
							>
								<FaLinkedin className="text-2xl" />
							</a>
							<a
								href="mailto:vmadhusu1@stevens.edu"
								className="btn btn-circle btn-primary"
							>
								<FaEnvelope className="text-2xl" />
							</a>
						</div>
					</div>
				</section>
			</main>

			<footer className="footer footer-center p-10 bg-base-200 text-base-content relative z-10">
				<div>
					<p className="text-lg">
						&copy; 2024 Vivaswanth Kashyap Madhusudhana. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
}
