import { writable } from 'svelte/store';
import type { Archetype } from './questions';

export const answers = writable<string[]>([]);

export const result = writable<string | null>(null);

export const riasecScores = writable<Record<Archetype, number>>({
	Realistic: 0,
	Investigative: 0,
	Artistic: 0,
	Social: 0,
	Enterprising: 0,
	Conventional: 0
});

export const theme = writable<'light' | 'dark'>('light');