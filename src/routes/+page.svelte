<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import SkillGroup from '$lib/components/SkillGroup.svelte';

	let mobileMenuOpen = $state(false);

	const navLinks = [
		{ label: 'About', href: '#about' },
		{ label: 'Experience', href: '#experience' },
		{ label: 'Projects', href: '#projects' },
		{ label: 'Skills', href: '#skills' },
		{ label: 'Contact', href: '#contact' }
	];

	const projects = [
		{
			title: 'Tchat',
			tags: ['Go', 'Cobra', 'Bubbletea', 'SQLite', 'WebSockets'],
			description:
				'A CLI and TUI hybrid messaging application built entirely in Go. Client built with Cobra, Bubbletea, Bubbles, and LipGloss for a fully terminal-native experience. Server built with Gin, PostgreSQL, Redis, and WebSockets for real-time messaging. JWT authentication, piped input/output support, and SQLite for local state.',
			github: 'https://github.com/vivaswanth-kashyap/tchat'
		},
		{
			title: 'Real-time Community Platform',
			tags: ['Go', 'Node.js', 'Neo4j', 'RabbitMQ', 'WebSockets', 'MongoDB'],
			description:
				'Community platform with a follower graph built on Neo4j, hashtag and mention extraction via RabbitMQ message queues, and a real-time feed using Socket.IO and MongoDB. Designed for concurrent user handling with efficient WebSocket connection management.',
			github: 'https://github.com/vivaswanth-kashyap/community'
		},
		{
			title: 'Video Forge',
			tags: ['Go', 'FFmpeg', 'Gin', 'Concurrency'],
			description:
				"High-performance video processing toolkit leveraging Go's concurrency primitives for parallel FFmpeg pipeline execution. Built to explore Go's goroutine model under real CPU-bound workloads. REST API for job submission and async processing.",
			github: 'https://github.com/vivaswanth-kashyap/video-processor'
		},
		{
			title: 'JS Prodigy',
			tags: ['Next.js', 'Node.js', 'Flask', 'AWS', 'OpenAI', 'Vimeo API'],
			description:
				'Full-stack e-learning platform for JavaScript development. Multi-component architecture: Next.js frontend, Express backend, Flask ML service for automated doubt-solving via OpenAI API. Vimeo API for video streaming, AWS S3 for file storage, deployed on EC2 and Netlify.',
			github: 'https://github.com/vivaswanth-kashyap/JSProdigy'
		}
	];

	const skills = [
		{ category: 'Languages', items: ['Go', 'TypeScript', 'JavaScript', 'Python', 'C++', 'SQL'] },
		{
			category: 'Backend',
			items: ['Node.js', 'Express.js', 'Gin', 'REST', 'GraphQL', 'WebSockets']
		},
		{
			category: 'Frontend',
			items: ['React', 'Next.js', 'Svelte', 'Redux', 'Tailwind CSS']
		},
		{ category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Neo4j'] },
		{ category: 'Infrastructure', items: ['AWS', 'Docker', 'Git', 'Linux'] },
		{ category: 'Messaging', items: ['RabbitMQ', 'WebSockets'] }
	];

	function closeMenu() {
		mobileMenuOpen = false;
	}

	$effect(() => {
		const sections = document.querySelectorAll('.fade-in');
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible');
					}
				}
			},
			{ threshold: 0.1 }
		);

		for (const section of sections) {
			observer.observe(section);
		}

		return () => observer.disconnect();
	});
</script>

<!-- Nav -->
<nav class="nav">
	<div class="nav-inner">
		<a href="/" class="nav-logo">VKM</a>
		<button
			class="menu-toggle"
			onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
			aria-label="Toggle menu"
			aria-expanded={mobileMenuOpen}
		>
			<span class="menu-bar" class:open={mobileMenuOpen}></span>
			<span class="menu-bar" class:open={mobileMenuOpen}></span>
			<span class="menu-bar" class:open={mobileMenuOpen}></span>
		</button>
		<div class="nav-links" class:show={mobileMenuOpen}>
			{#each navLinks as link}
				<a href={link.href} onclick={closeMenu}>{link.label}</a>
			{/each}
		</div>
	</div>
</nav>

<main>
	<!-- Hero -->
	<section class="hero">
		<div class="container">
			<p class="hero-greeting">Hi, I'm</p>
			<h1 class="hero-name">Vivaswanth Kashyap Madhusudhana</h1>
			<p class="hero-headline">Backend Engineer · Distributed Systems · Go</p>
			<p class="hero-sub">
				I build systems that are honest — well-tested, clearly documented, and built with explicit
				tradeoffs rather than defaults.
			</p>
			<div class="hero-links">
				<a
					href="https://github.com/vivaswanth-kashyap"
					target="_blank"
					rel="noopener noreferrer"
					class="hero-link"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path
							d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
						/>
					</svg>
					GitHub
				</a>
				<a
					href="https://linkedin.com/in/vivaswanth-kashyap-madhusudhana"
					target="_blank"
					rel="noopener noreferrer"
					class="hero-link"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path
							d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
						/>
						<rect x="2" y="9" width="4" height="12" />
						<circle cx="4" cy="4" r="2" />
					</svg>
					LinkedIn
				</a>
				<a href="mailto:vivaswanth3@gmail.com" class="hero-link">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<rect x="2" y="4" width="20" height="16" rx="2" />
						<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
					</svg>
					Email
				</a>
			</div>
		</div>
	</section>

	<!-- About -->
	<section id="about" class="section fade-in">
		<div class="container">
			<h2 class="section-title">About</h2>
			<div class="about-content">
				<p>
					Software engineer with an MS in Computer Science from Stevens Institute of Technology,
					focused on backend systems and infrastructure. I build with Go and JavaScript primarily —
					from CLI and TUI tools to distributed systems with message queues, graph databases, and
					real-time communication.
				</p>
				<p>
					My projects are deliberate explorations. I pick a hard problem, go deep on the technology
					required to solve it, and build until I understand it well enough to make real design
					decisions. That has produced work across Neo4j, RabbitMQ, WebSockets, Redis, AWS, and
					FFmpeg among others.
				</p>
			</div>
		</div>
	</section>

	<!-- Experience -->
	<section id="experience" class="section fade-in">
		<div class="container">
			<h2 class="section-title">Experience</h2>
			<div class="timeline">
				<div class="timeline-item">
					<div class="timeline-marker"></div>
					<div class="timeline-content">
						<div class="timeline-header">
							<h3>Graduate Student Tutor</h3>
							<span class="timeline-date">Apr 2024 – May 2025</span>
						</div>
						<p class="timeline-company">Stevens Institute of Technology · Hoboken, NJ</p>
						<p class="timeline-description">
							Tutored Web Programming covering MongoDB, Express.js, Handlebars, and Jest for unit
							testing. Supported 20+ students, improving average grades by one letter grade.
						</p>
					</div>
				</div>
				<div class="timeline-item">
					<div class="timeline-marker"></div>
					<div class="timeline-content">
						<div class="timeline-header">
							<h3>Software Engineer Intern</h3>
							<span class="timeline-date">Jun 2022 – Jun 2023</span>
						</div>
						<p class="timeline-company">Devathon (Crypsis Technologies) · Hyderabad, India</p>
						<p class="timeline-description">
							Developed features for the Autochat SaaS platform using React, Redux, and Firebase. Led
							design and development of the GEMINI Solutions landing and community pages in Next.js
							and Tailwind CSS, delivering from Figma mockups across a 12-member Agile team.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Projects -->
	<section id="projects" class="section fade-in">
		<div class="container">
			<h2 class="section-title">Projects</h2>
			<div class="projects-grid">
				{#each projects as project}
					<ProjectCard {project} />
				{/each}
			</div>
		</div>
	</section>

	<!-- Skills -->
	<section id="skills" class="section fade-in">
		<div class="container">
			<h2 class="section-title">Skills</h2>
			<div class="skills-grid">
				{#each skills as skill}
					<SkillGroup {skill} />
				{/each}
			</div>
		</div>
	</section>

	<!-- Contact -->
	<section id="contact" class="section fade-in">
		<div class="container">
			<h2 class="section-title">Get in touch</h2>
			<div class="contact-content">
				<p>
					Open to new opportunities, collaborations, and interesting engineering conversations.
				</p>
				<a href="mailto:vivaswanth3@gmail.com" class="contact-email"> vivaswanth3@gmail.com </a>
			</div>
		</div>
	</section>
</main>

<!-- Footer -->
<footer class="footer">
	<div class="container">
		<p>&copy; 2026 Vivaswanth Kashyap Madhusudhana</p>
	</div>
</footer>

<style>
	/* Nav */
	.nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		background: rgba(10, 10, 10, 0.85);
		backdrop-filter: blur(12px);
		border-bottom: 1px solid var(--border);
	}

	.nav-inner {
		max-width: 1100px;
		margin: 0 auto;
		padding: 0 2rem;
		height: 4rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.nav-logo {
		font-family: var(--font-mono);
		font-size: 1.1rem;
		font-weight: 600;
		color: var(--text);
		letter-spacing: 0.05em;
	}

	.nav-logo:hover {
		color: var(--accent);
	}

	.nav-links {
		display: flex;
		gap: 2rem;
	}

	.nav-links a {
		font-size: 0.875rem;
		color: var(--text-muted);
		transition: color 0.2s ease;
	}

	.nav-links a:hover {
		color: var(--text);
	}

	.menu-toggle {
		display: none;
		flex-direction: column;
		gap: 5px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 4px;
	}

	.menu-bar {
		display: block;
		width: 24px;
		height: 2px;
		background: var(--text);
		border-radius: 1px;
		transition: transform 0.3s ease, opacity 0.3s ease;
	}

	.menu-bar.open:nth-child(1) {
		transform: translateY(7px) rotate(45deg);
	}

	.menu-bar.open:nth-child(2) {
		opacity: 0;
	}

	.menu-bar.open:nth-child(3) {
		transform: translateY(-7px) rotate(-45deg);
	}

	/* Container */
	.container {
		max-width: 1100px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	/* Hero */
	.hero {
		min-height: 100vh;
		display: flex;
		align-items: center;
		padding-top: 4rem;
	}

	.hero-greeting {
		font-family: var(--font-mono);
		font-size: 0.95rem;
		color: var(--accent);
		margin-bottom: 1rem;
	}

	.hero-name {
		font-size: clamp(2rem, 5vw, 3.5rem);
		font-weight: 700;
		line-height: 1.15;
		color: var(--text);
		margin-bottom: 0.75rem;
	}

	.hero-headline {
		font-family: var(--font-mono);
		font-size: clamp(0.9rem, 2vw, 1.1rem);
		color: var(--text-muted);
		margin-bottom: 1.5rem;
	}

	.hero-sub {
		font-size: 1.05rem;
		color: var(--text-muted);
		max-width: 600px;
		line-height: 1.7;
		margin-bottom: 2rem;
	}

	.hero-links {
		display: flex;
		gap: 1.25rem;
		flex-wrap: wrap;
	}

	.hero-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		color: var(--text-muted);
		padding: 0.5rem 1rem;
		border: 1px solid var(--border);
		border-radius: 6px;
		transition: color 0.2s ease, border-color 0.2s ease;
	}

	.hero-link:hover {
		color: var(--accent);
		border-color: var(--accent);
	}

	/* Sections */
	.section {
		padding: 6rem 0;
	}

	.section-title {
		font-size: 1.75rem;
		font-weight: 700;
		margin-bottom: 2.5rem;
		color: var(--text);
		position: relative;
		padding-bottom: 0.75rem;
	}

	.section-title::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 3rem;
		height: 2px;
		background: var(--accent);
	}

	/* About */
	.about-content {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		max-width: 700px;
	}

	.about-content p {
		font-size: 1rem;
		color: var(--text-muted);
		line-height: 1.8;
	}

	/* Timeline */
	.timeline {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
		position: relative;
		padding-left: 2rem;
	}

	.timeline::before {
		content: '';
		position: absolute;
		left: 5px;
		top: 8px;
		bottom: 8px;
		width: 1px;
		background: var(--border);
	}

	.timeline-item {
		position: relative;
	}

	.timeline-marker {
		position: absolute;
		left: -2rem;
		top: 8px;
		width: 11px;
		height: 11px;
		border-radius: 50%;
		background: var(--bg);
		border: 2px solid var(--accent);
	}

	.timeline-content {
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: 8px;
		padding: 1.5rem;
	}

	.timeline-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1rem;
		margin-bottom: 0.25rem;
		flex-wrap: wrap;
	}

	.timeline-header h3 {
		font-size: 1.1rem;
		font-weight: 600;
		color: var(--text);
	}

	.timeline-date {
		font-family: var(--font-mono);
		font-size: 0.8rem;
		color: var(--text-muted);
		white-space: nowrap;
	}

	.timeline-company {
		font-size: 0.9rem;
		color: var(--accent);
		margin-bottom: 0.75rem;
	}

	.timeline-description {
		font-size: 0.9rem;
		color: var(--text-muted);
		line-height: 1.7;
	}

	/* Projects */
	.projects-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.25rem;
	}

	/* Skills */
	.skills-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.25rem;
	}

	/* Contact */
	.contact-content {
		max-width: 500px;
	}

	.contact-content p {
		font-size: 1.05rem;
		color: var(--text-muted);
		margin-bottom: 1.5rem;
		line-height: 1.7;
	}

	.contact-email {
		display: inline-block;
		font-family: var(--font-mono);
		font-size: 1.1rem;
		color: var(--accent);
		padding: 0.75rem 1.5rem;
		border: 1px solid var(--accent);
		border-radius: 6px;
		transition: background 0.2s ease, color 0.2s ease;
	}

	.contact-email:hover {
		background: var(--accent);
		color: var(--bg);
	}

	/* Footer */
	.footer {
		border-top: 1px solid var(--border);
		padding: 2rem 0;
		text-align: center;
	}

	.footer p {
		font-size: 0.85rem;
		color: var(--text-muted);
	}

	/* Mobile */
	@media (max-width: 768px) {
		.menu-toggle {
			display: flex;
		}

		.nav-links {
			display: none;
			position: absolute;
			top: 4rem;
			left: 0;
			right: 0;
			background: rgba(10, 10, 10, 0.95);
			backdrop-filter: blur(12px);
			flex-direction: column;
			padding: 1.5rem 2rem;
			gap: 1.25rem;
			border-bottom: 1px solid var(--border);
		}

		.nav-links.show {
			display: flex;
		}

		.projects-grid {
			grid-template-columns: 1fr;
		}

		.skills-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.timeline-header {
			flex-direction: column;
			gap: 0.25rem;
		}
	}

	@media (max-width: 480px) {
		.skills-grid {
			grid-template-columns: 1fr;
		}

		.hero-links {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
