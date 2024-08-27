import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaCalendarAlt, FaTag } from "react-icons/fa";

const blogPosts = [
	{
		id: 1,
		title: "Building a Portfolio website with Next.js",
		excerpt:
			"I recently built my new portfolio website using the Next.js framework and wanted to share an overview of the process and technologies used.",
		date: "2024-04-21",
		tags: ["Next.js", "Web Development", "Portfolio"],
		slug: "building-portfolio-with-nextjs",
	},
	{
		id: 2,
		title: "The thought behind the design of JS Prodigy",
		excerpt:
			"I shall discuss about the design decisions and tradeoffs I made while building the JS Prodigy application",
		date: "2024-08-27",
		tags: ["JS Prodigy", "design", "architecture", "Web Development"],
		slug: "designing-js-prodigy",
	},
	// Add more blog posts as needed
];

export default function Blog() {
	const [activeFilter, setActiveFilter] = useState("All");

	const filteredPosts =
		activeFilter === "All"
			? blogPosts
			: blogPosts.filter((post) => post.tags.includes(activeFilter));

	const allTags = [...new Set(blogPosts.flatMap((post) => post.tags))];

	return (
		<div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 min-h-screen text-white">
			<header className="fixed w-full bg-opacity-90 bg-gray-900 z-50">
				<nav className="container mx-auto py-4 px-6 flex justify-between items-center">
					<Link href="/" className="text-2xl font-bold flex items-center">
						<FaArrowLeft className="mr-2" />
						Back to Portfolio
					</Link>
				</nav>
			</header>

			<main className="pt-20">
				<section className="py-20">
					<div className="container mx-auto px-6">
						<motion.h1
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className="text-5xl font-bold mb-12 text-center"
						>
							Blog Posts
						</motion.h1>

						<div className="mb-8 flex flex-wrap justify-center gap-4">
							<button
								onClick={() => setActiveFilter("All")}
								className={`px-4 py-2 rounded-full ${
									activeFilter === "All" ? "bg-blue-500" : "bg-gray-700"
								}`}
							>
								All
							</button>
							{allTags.map((tag) => (
								<button
									key={tag}
									onClick={() => setActiveFilter(tag)}
									className={`px-4 py-2 rounded-full ${
										activeFilter === tag ? "bg-blue-500" : "bg-gray-700"
									}`}
								>
									{tag}
								</button>
							))}
						</div>

						<div className="grid md:grid-cols-2 gap-8">
							{filteredPosts.map((post, index) => (
								<motion.div
									key={post.id}
									initial={{ opacity: 0, y: 50 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm"
								>
									<h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
									<p className="mb-4">{post.excerpt}</p>
									<div className="flex items-center mb-4 text-sm text-gray-400">
										<FaCalendarAlt className="mr-2" />
										<span>{post.date}</span>
									</div>
									<div className="flex flex-wrap gap-2 mb-4">
										{post.tags.map((tag) => (
											<span
												key={tag}
												className="flex items-center bg-blue-500 bg-opacity-50 px-2 py-1 rounded-full text-sm"
											>
												<FaTag className="mr-1" />
												{tag}
											</span>
										))}
									</div>
									<Link
										href={`/blog/${post.slug}`}
										className="text-blue-400 hover:text-blue-300 transition-colors"
									>
										Read More →
									</Link>
								</motion.div>
							))}
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
