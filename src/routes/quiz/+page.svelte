<script lang="ts">
	import { goto } from '$app/navigation';
	import { resetScores } from '$lib/stores';

	function startQuiz() {
		// Reset scores to start a new test
		resetScores();
		// Navigate to the first question
		goto('/quiz/1');
	}
</script>

<div class="box has-text-centered">
	<h1 class="title is-2">Discover Your Career Archetype</h1>
	<p class="subtitle is-4">
		Welcome to the RIASEC Test App! This quiz is designed to help you understand your career interests
		and identify potential career paths that align with your personality.
	</p>
	<p class="block">
		The RIASEC model categorizes individuals into six personality types:
		<span class="has-text-weight-bold">Realistic, Investigative, Artistic, Social, Enterprising, and Conventional</span>.
		By answering a series of questions about activities you enjoy, we'll help you discover your top
		archetypes and provide tailored career recommendations.
	</p>
	<p class="block">
		Ready to explore your career potential? Click the button below to start the quiz!
	</p>
	<button class="button is-primary is-large mt-5" onclick={startQuiz}>Start the Test</button>
</div>