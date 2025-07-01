<script lang="ts">
	import { activities, type Archetype } from '$lib/questions';
	import { riasecScores } from '$lib/stores';
	import { goto } from '$app/navigation';

	let currentIndex = $state(0);
	const localScores = $state<Record<Archetype, number>>({
		Realistic: 0,
		Investigative: 0,
		Artistic: 0,
		Social: 0,
		Enterprising: 0,
		Conventional: 0
	});

	let isFinished = $derived(currentIndex >= activities.length);

	function handleResponse(liked: boolean) {
		if (isFinished) return;

		if (liked) {
			const activity = activities[currentIndex];
			localScores[activity.archetype]++;
		}
		currentIndex++;

		// When the last question is answered, update the shared store
		if (currentIndex >= activities.length) {
			riasecScores.set(localScores);
		}
	}

	function viewResults() {
		goto('/results');
	}
</script>

<h1 class="title has-text-centered">RIASEC Test</h1>
<p class="subtitle has-text-centered">For each activity, click "Like" if you would enjoy doing it, or "Dislike" if you would not.</p>

{#if !isFinished}
	<progress class="progress is-primary" value={currentIndex + 1} max={activities.length}>
		{((currentIndex + 1) / activities.length) * 100}%
	</progress>
	<p class="has-text-centered">Activity {currentIndex + 1} of {activities.length}</p>

	<div class="box">
		<p class="title is-4 has-text-centered">{activities[currentIndex].text}</p>
		<div class="buttons is-centered">
			<button class="button is-danger is-large" on:click={() => handleResponse(false)}>Dislike</button>
			<button class="button is-success is-large" on:click={() => handleResponse(true)}>Like</button>
		</div>
	</div>
{:else}
	<div class="box has-text-centered">
		<h2 class="title is-3">Test Complete!</h2>
		<p class="subtitle">You've answered all the questions. Click the button below to see your results.</p>
		<button class="button is-primary is-large" on:click={viewResults}>Click to see what career to pursue</button>
	</div>
{/if}