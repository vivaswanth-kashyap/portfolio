<script lang="ts">
	interface Project {
		title: string;
		tags: string[];
		description: string;
		github: string;
	}

	let { project }: { project: Project } = $props();
</script>

<article class="project-card">
	<div class="project-header">
		<h3 class="project-title">{project.title}</h3>
		<a href={project.github} target="_blank" rel="noopener noreferrer" class="project-link" aria-label="View {project.title} on GitHub">
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
			</svg>
		</a>
	</div>
	<div class="project-tags">
		{#each project.tags as tag}
			<span class="tag">{tag}</span>
		{/each}
	</div>
	<p class="project-description">{project.description}</p>
</article>

<style>
	.project-card {
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: 8px;
		padding: 1.5rem;
		transition: background 0.2s ease, border-color 0.2s ease;
	}

	.project-card:hover {
		background: var(--bg-card-hover);
		border-color: #2a2a2a;
	}

	.project-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1rem;
		margin-bottom: 0.75rem;
	}

	.project-title {
		font-size: 1.125rem;
		font-weight: 600;
		color: var(--text);
	}

	.project-link {
		color: var(--text-muted);
		flex-shrink: 0;
		transition: color 0.2s ease;
	}

	.project-link:hover {
		color: var(--accent);
	}

	.project-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.tag {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		font-weight: 500;
		padding: 0.2rem 0.6rem;
		border-radius: 4px;
		background: var(--tag-bg);
		color: var(--tag-text);
	}

	.project-description {
		font-size: 0.9rem;
		color: var(--text-muted);
		line-height: 1.65;
	}
</style>
