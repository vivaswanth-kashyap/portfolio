import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function Blog() {
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
						<Link href="/">
							<h1 className="text-4xl font-bold tracking-wide flex items-center">
								<FaArrowLeft className="h-6 w-6 mr-2" />
								Back to Portfolio
							</h1>
						</Link>
					</div>
				</nav>
			</header>

			<main className="container mx-auto px-4 relative z-10">
				<section className="py-20">
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
								d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
							/>
						</svg>
						Blog
						<Image
							src="/layered-waves-haikei-2.svg"
							alt="Background"
							layout="fill"
							objectFit="cover"
							className="absolute z-0 opacity-50"
						/>
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
						{/* Blog post cards */}
						<div className="card bg-base-100 shadow-xl">
							<div className="card-body">
								<h3 className="card-title text-3xl">
									Building a Portfolio website with NEXTjs
								</h3>
								<p className="text-lg mb-4">
									I recently built my new portfolio website using the Next.js
									framework and wanted to share an overview of the process and
									technologies used. Next.js is a powerful React framework that
									provides a great developer experience and optimized
									performance out of the box. Here are the key steps and
									components involved in creating this portfolio site: Set up a
									new Next.js project I started by creating a new Next.js app
									using the create-next-app tool. This bootstrapped a project
									structure with pages, components, and styles directories.
									Design and build out the pages Next, I designed the various
									pages and sections I wanted to include - Home, About,
									Experience, Projects, Skills, Contact and Blog. I used a
									combination of React components, JSX, and CSS to build out the
									structure and layout of each page. Add interactivity with
									React To make the site interactive, I leveraged React state
									and event handlers. This enabled features like the responsive
									mobile menu that opens/closes when clicked. Style with
									Tailwind CSS For quickly styling the site, I used the Tailwind
									CSS framework. Tailwind provides a set of utility classes that
									make it easy to customize the look and feel without writing a
									lot of custom CSS. I'm a big fan of how productive Tailwind
									is. Optimize images To ensure fast load times, I used the
									Next.js Image component to automatically optimize and resize
									images. The Image component handles lazy loading, placeholder
									blurring, and serving appropriately sized images based on the
									device. Deploy to Vercel Finally, I deployed the portfolio to
									Vercel, the company behind Next.js. Vercel makes it seamless
									to deploy Next.js apps - it's just a matter of connecting your
									Git repository and Vercel will handle the build and
									deployment. The end result is a fast, optimized static
									website. And that's the high-level process I followed to build
									this portfolio site with Next.js! It was a fun project that
									allowed me to try out some new technologies and add a new site
									to my portfolio. I look forward to continuing to update and
									improve it over time. Feel free to explore the source code on
									my GitHub to dive into the details. And of course, don't
									hesitate to reach out if you have any questions or feedback on
									the site. Thanks for reading!
								</p>
								<div className="card-actions justify-end">
									<Link href="/blog/post1" className="btn btn-primary">
										Read More
									</Link>
								</div>
							</div>
						</div>
						{/* Add more blog post cards */}
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
