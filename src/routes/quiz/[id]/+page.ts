import { error } from '@sveltejs/kit';
import { activities } from '$lib/questions';

export function load({ params }) {
	const id = parseInt(params.id);

	// Check if the ID is a valid number and within the bounds of our questions array
	if (isNaN(id) || id < 1 || id > activities.length) {
		throw error(404, 'Question not found');
	}

	// The 'id' from the URL is 1-based, but our array is 0-based
	const question = activities[id - 1];

	return {
		id: id,
		question: question.text,
		archetype: question.archetype,
		totalQuestions: activities.length
	};
}