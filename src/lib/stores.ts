import { writable, type Writable } from 'svelte/store';
import { browser } from '$app/environment';
import type { Archetype } from './questions';

// --- Reusable Persistent Store ---
// A generic function to create a store that syncs with localStorage.
function persistentStore<T>(key: string, initialValue: T): Writable<T> {
	// Get the stored value from localStorage on the client, or use the initial value.
	const storedValue = browser ? window.localStorage.getItem(key) : null;
	const data = storedValue ? JSON.parse(storedValue) : initialValue;

	// Create a writable store with the retrieved data.
	const store = writable<T>(data);

	// Subscribe to changes and update localStorage, only on the client side.
	if (browser) {
		store.subscribe((currentValue) => {
			window.localStorage.setItem(key, JSON.stringify(currentValue));
		});
	}

	return store;
}

// --- Your Original Stores ---
export const answers = writable<string[]>([]);
export const result = writable<string | null>(null);

// --- Your Stores with Persistence ---
const initialScores: Record<Archetype, number> = {
	Realistic: 0,
	Investigative: 0,
	Artistic: 0,
	Social: 0,
	Enterprising: 0,
	Conventional: 0
};

// Use the persistentStore function for riasecScores and theme.
export const riasecScores = persistentStore('riasecScores', initialScores);
export const theme = persistentStore<'light' | 'dark'>('theme', 'light');

// --- Helper Function ---
// Function to reset the scores when starting a new quiz.
export function resetScores() {
	riasecScores.set(initialScores);
}