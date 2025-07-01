<script lang="ts">
	import { riasecScores } from '$lib/stores';
	import { resultsData, type ResultInfo } from '$lib/results';
	import type { Archetype } from '$lib/questions';
	import { browser } from '$app/environment';
	import { theme } from '$lib/stores';

	let topThree: [Archetype, number][] = [];

	if (browser) {
		riasecScores.subscribe((scores) => {
			topThree = Object.entries(scores)
				.sort(([, scoreA], [, scoreB]) => scoreB - scoreA)
				.slice(0, 3) as [Archetype, number][];
		});
	}

	function getResultInfo(archetype: Archetype): ResultInfo {
		return resultsData[archetype];
	}
</script>

<h1 class="title has-text-centered">Your Career Recommendations</h1>
<p class="subtitle has-text-centered">Based on your answers, here are the top personality types that match your interests.</p>

<div class="columns is-multiline is-centered">
	{#each topThree as [archetype, score], i}
		{@const resultInfo = getResultInfo(archetype)}
		<div class="column is-one-third">
			<div class="box has-text-centered">
				<span class="tag is-info is-large is-rounded">#{i + 1}</span>
				<h2 class="title is-4 mt-3">{archetype} - {resultInfo.title}</h2>
				<p class="content">{resultInfo.description}</p>
				<h3 class="subtitle is-5">Suggested Careers:</h3>
				<ul class="has-text-left">
					{#each resultInfo.jobs as job}
						<li>{job}</li>
					{/each}
				</ul>
				<p class="tag is-medium {$theme === 'light' ? 'is-light' : 'is-dark'}">Your Score: {score}</p>
			</div>
		</div>
	{/each}
</div>

<div class="has-text-centered mt-5">
	<a class="button is-link is-large" href="/quiz">Take the test again</a>
</div>