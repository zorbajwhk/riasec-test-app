<script lang="ts">
    import { goto } from '$app/navigation';
    import { riasecScores } from '$lib/stores';

    export let data;

    // By adding "$:", these variables will now update whenever 'data' changes.
    $: ({ id, question, archetype, totalQuestions } = data);

    function handleResponse(liked: boolean) {
        if (liked) {
            // Update the score using the imported store
            $riasecScores[archetype]++;
        }

        // Navigate to the next question or the results page
        if (id < totalQuestions) {
            goto(`/quiz/${id + 1}`);
        } else {
            goto('/results');
        }
    }
</script>

{#key id}
    <progress class="progress is-primary" value={id} max={totalQuestions}>
        {(id / totalQuestions) * 100}%
    </progress>
    <p class="has-text-centered">Activity {id} of {totalQuestions}</p>

    <div class="box">
        <p class="title is-4 has-text-centered">{question}</p>
        <div class="buttons is-centered">
            <button class="button is-danger is-large" onclick={() => handleResponse(false)}>
                Dislike
            </button>
            <button class="button is-success is-large" onclick={() => handleResponse(true)}>
                Like
            </button>
        </div>
    </div>
{/key}