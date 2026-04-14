<script lang="ts">
	interface SkillCategory {
		category: string;
		items: string[];
	}

	let { skill }: { skill: SkillCategory } = $props();
</script>

<div class="skill-group">
	<h3 class="skill-category">{skill.category}</h3>
	<div class="skill-items">
		{#each skill.items as item}
			<span class="skill-item">{item}</span>
		{/each}
	</div>
</div>

<style>
	.skill-group {
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: 8px;
		padding: 1.25rem;
	}

	.skill-category {
		font-family: var(--font-mono);
		font-size: 0.8rem;
		font-weight: 500;
		color: var(--accent);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: 0.75rem;
	}

	.skill-items {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.skill-item {
		font-size: 0.875rem;
		padding: 0.3rem 0.75rem;
		border-radius: 4px;
		background: var(--tag-bg);
		color: var(--text-muted);
		transition: color 0.2s ease;
	}

	.skill-item:hover {
		color: var(--text);
	}
</style>
