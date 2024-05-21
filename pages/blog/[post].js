import React from "react";
import Image from "next/image";
import { FaArrowLeft, FaGithub } from "react-icons/fa";
import Link from "next/link";

function Post(props) {
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

			<header className="container mx-auto py-8 px-4 relative z-10 text-white">
				<nav className="navbar">
					<div className="navbar-start">
						<Link href="/blog">
							<h2 className="text-xl font-bold tracking-wide flex items-center">
								<FaArrowLeft className="h-5 w-5 mr-2" />
								Back to All Blogs
							</h2>
						</Link>
					</div>
				</nav>
			</header>

			<main className="container mx-auto px-4 py-12 relative z-10 bg-base-100 my-6 rounded shadow-md">
				<article className="prose lg:prose-xl max-w-none">
					<h1 className="text-5xl font-bold mb-8">
						Building a Portfolio Website with Next.js
					</h1>

					<p className="lead">
						I recently built my new portfolio website using the Next.js
						framework and wanted to share an overview of the process and
						technologies used. Next.js is a powerful React framework that
						provides a great developer experience and optimized performance out
						of the box.
					</p>

					<p>
						Here are the key steps and components involved in creating this
						portfolio site:
					</p>

					<ol>
						<li>
							<h2 className="text-3xl font-bold mt-8 mb-4">
								Set up a new Next.js project
							</h2>
							<p>
								I started by creating a new Next.js app using the
								create-next-app tool. This bootstrapped a project structure with
								pages, components, and styles directories.
							</p>
						</li>

						<li>
							<h2 className="text-3xl font-bold mt-8 mb-4">
								Design and build out the pages
							</h2>
							<p>
								Next, I designed the various pages and sections I wanted to
								include - Home, About, Experience, Projects, Skills, Contact and
								Blog. I used a combination of React components, JSX, and CSS to
								build out the structure and layout of each page.
							</p>
						</li>

						<li>
							<h2 className="text-3xl font-bold mt-8 mb-4">
								Add interactivity with React
							</h2>
							<p>
								To make the site interactive, I leveraged React state and event
								handlers. This enabled features like the responsive mobile menu
								that opens/closes when clicked.
							</p>
						</li>

						<li>
							<h2 className="text-3xl font-bold mt-8 mb-4">
								Style with Tailwind CSS
							</h2>
							<p>
								For quickly styling the site, I used the Tailwind CSS framework.
								Tailwind provides a set of utility classes that make it easy to
								customize the look and feel without writing a lot of custom CSS.
								I'm a big fan of how productive Tailwind is.
							</p>
						</li>

						<li>
							<h2 className="text-3xl font-bold mt-8 mb-4">Optimize images</h2>
							<p>
								To ensure fast load times, I used the Next.js Image component to
								automatically optimize and resize images. The Image component
								handles lazy loading, placeholder blurring, and serving
								appropriately sized images based on the device.
							</p>
						</li>

						<li>
							<h2 className="text-3xl font-bold mt-8 mb-4">Deploy to Vercel</h2>
							<p>
								Finally, I deployed the portfolio to Vercel, the company behind
								Next.js. Vercel makes it seamless to deploy Next.js apps - it's
								just a matter of connecting your Git repository and Vercel will
								handle the build and deployment. The end result is a fast,
								optimized static website.
							</p>
						</li>
					</ol>

					<p>
						And that's the high-level process I followed to build this portfolio
						site with Next.js! It was a fun project that allowed me to try out
						some new technologies and add a new site to my portfolio. I look
						forward to continuing to update and improve it over time.
					</p>

					<p>
						Feel free to explore the source code on my GitHub to dive into the
						details. And of course, don't hesitate to reach out if you have any
						questions or feedback on the site. Thanks for reading!
					</p>

					<Link
						href="https://github.com/vivaswanth-kashyap/portfolio"
						className="text-sm text-blue-400"
					>
						<FaGithub className="text-2xl mt-6 text-white" />
						Look at the repository
					</Link>
				</article>
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

export default Post;
