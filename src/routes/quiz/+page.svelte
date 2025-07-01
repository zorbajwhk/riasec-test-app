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
	<h1 class="title">RIASEC Test</h1>
	<p class="subtitle">
		You will be shown 72 activities. For each one, indicate whether you would like or dislike doing
		it.
	</p>
	<p>This will help you identify careers that match your interests.</p>
	<button class="button is-primary is-large mt-5" onclick={startQuiz}>Start the Test</button>
</div>