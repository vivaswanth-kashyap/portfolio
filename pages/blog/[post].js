import React from "react";
import Image from "next/image";
import { FaArrowLeft, FaGithub, FaCalendarAlt, FaTag } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

// Going to update it soon with blog posts served from an API
const blogPosts = {
	"building-portfolio-with-nextjs": {
		title: "Building a Portfolio Website with Next.js",
		date: "2024-08-15",
		tags: ["Next.js", "Web Development", "Portfolio", "Netlify"],
		content: `
      <p class="lead">
        I recently built my new portfolio website using the Next.js framework and wanted to share an overview of the process and technologies used. Next.js is a powerful React framework that provides a great developer experience and optimized performance out of the box.
      </p>

      <p>Here are the key steps and components involved in creating this portfolio site:</p>

      <ol>
        <li>
          <h2 class="text-3xl font-bold mt-8 mb-4">Set up a new Next.js project</h2>
          <p>I started by creating a new Next.js app using the create-next-app tool. This bootstrapped a project structure with pages, components, and styles directories.</p>
        </li>

        <li>
          <h2 class="text-3xl font-bold mt-8 mb-4">Design and build out the pages</h2>
          <p>Next, I designed the various pages and sections I wanted to include - Home, About, Experience, Projects, Skills, Contact and Blog. I used a combination of React components, JSX, and CSS to build out the structure and layout of each page.</p>
        </li>

        <li>
          <h2 class="text-3xl font-bold mt-8 mb-4">Add interactivity with React</h2>
          <p>To make the site interactive, I leveraged React state and event handlers. This enabled features like the responsive mobile menu that opens/closes when clicked.</p>
        </li>

        <li>
          <h2 class="text-3xl font-bold mt-8 mb-4">Style with Tailwind CSS</h2>
          <p>For quickly styling the site, I used the Tailwind CSS framework. Tailwind provides a set of utility classes that make it easy to customize the look and feel without writing a lot of custom CSS. I'm a big fan of how productive Tailwind is.</p>
        </li>

        <li>
          <h2 class="text-3xl font-bold mt-8 mb-4">Optimize images</h2>
          <p>To ensure fast load times, I used the Next.js Image component to automatically optimize and resize images. The Image component handles lazy loading, placeholder blurring, and serving appropriately sized images based on the device.</p>
        </li>

        <li>
          <h2 class="text-3xl font-bold mt-8 mb-4">Deploy to Netlify</h2>
          <p>Finally, I deployed the portfolio to Netlify. I chose Netlify for its simplicity and powerful features, although there wasn't a particular reason for choosing it over other platforms like Vercel. Netlify makes it easy to deploy Next.js apps - it's just a matter of connecting your Git repository, and Netlify will handle the build and deployment process. The result is a fast, optimized static website that's easy to update and maintain.</p>
        </li>
      </ol>

      <p>And that's the high-level process I followed to build this portfolio site with Next.js! It was a fun project that allowed me to try out some new technologies and add a new site to my portfolio. I look forward to continuing to update and improve it over time.</p>

      <p>One thing I particularly enjoyed about using Netlify was how seamless the deployment process was. Every time I push changes to my GitHub repository, Netlify automatically rebuilds and redeploys the site. This continuous deployment setup makes it incredibly easy to keep my portfolio up-to-date.</p>

      <p>Feel free to explore the source code on my GitHub to dive into the details. And of course, don't hesitate to reach out if you have any questions or feedback on the site. Thanks for reading!</p>
    `,
		githubLink: "https://github.com/vivaswanth-kashyap/portfolio",
	},
	"designing-js-prodigy": {
		title: "Designing JS Prodigy",
		date: "2024-08-27",
		tags: ["JavaScript", "E-Learning", "Web Development"],
		content: `
      <div class="flex flex-col items-center justify-center space-y-8">
        <h2 class="text-4xl font-bold text-center">Coming Soon</h2>
        <p class="text-xl text-center">
          We're working hard on creating an exciting post about the design process behind JS Prodigy.
          Stay tuned for an in-depth look at how we're building the future of JavaScript learning!
        </p>
        <div class="w-24 h-24 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    `,
		githubLink: "https://github.com/vivaswanth-kashyap/js-prodigy",
	},
};

function Post() {
	const router = useRouter();
	const { post } = router.query;
	const blogPost = blogPosts[post];

	if (!blogPost) {
		return <div>Loading...</div>; // Or handle 404
	}

	return (
		<div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 min-h-screen text-white">
			<header className="fixed w-full bg-opacity-90 bg-gray-900 z-50">
				<nav className="container mx-auto py-4 px-6 flex justify-between items-center">
					<Link href="/blog" className="text-2xl font-bold flex items-center">
						<FaArrowLeft className="mr-2" />
						Back to All Blogs
					</Link>
				</nav>
			</header>

			<main className="pt-20 container mx-auto px-4 py-12">
				<article className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm prose prose-invert lg:prose-xl max-w-none">
					<h1 className="text-5xl font-bold mb-8">{blogPost.title}</h1>

					<div className="flex items-center mb-6 text-sm text-gray-400">
						<FaCalendarAlt className="mr-2" />
						<span>{blogPost.date}</span>
					</div>

					<div className="flex flex-wrap gap-2 mb-8">
						{blogPost.tags.map((tag) => (
							<span
								key={tag}
								className="flex items-center bg-blue-500 bg-opacity-50 px-2 py-1 rounded-full text-sm"
							>
								<FaTag className="mr-1" />
								{tag}
							</span>
						))}
					</div>

					<div dangerouslySetInnerHTML={{ __html: blogPost.content }} />

					<Link
						href={blogPost.githubLink}
						className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mt-8"
					>
						<FaGithub className="mr-2" />
						View source code on GitHub
					</Link>
				</article>
			</main>

			<footer className="bg-gray-900 py-6 mt-12">
				<div className="container mx-auto px-6 text-center">
					<p>
						&copy; 2024 Vivaswanth Kashyap Madhusudhana. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
}

export default Post;
