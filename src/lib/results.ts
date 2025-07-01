import type { Archetype } from './questions';

export interface ResultInfo {
	title: string;
	description: string;
	jobs: string[];
}

export const resultsData: Record<Archetype, ResultInfo> = {
	Realistic: {
		title: 'The Doers',
		description:
			'You enjoy practical, hands-on problems and solutions. You like working with tools, machines, and your physical skill. You are often practical, mechanical, and realistic.',
		jobs: [
			'Electrician',
			'Mechanical Engineer',
			'Chef',
			'Carpenter',
			'Pilot',
			'Firefighter',
			'Surgical Technologist',
			'Forester'
		]
	},
	Investigative: {
		title: 'The Thinkers',
		description:
			'You are drawn to complex problems and enjoy working with ideas and theories. You are analytical, intellectual, and enjoy science, math, or research.',
		jobs: [
			'Biologist',
			'Data Analyst',
			'Research Scientist',
			'Medical Doctor',
			'Computer Programmer',
			'Psychologist',
			'Veterinarian',
			'University Professor'
		]
	},
	Artistic: {
		title: 'The Creators',
		description:
			'You are creative, expressive, and intuitive. You thrive in unstructured environments where you can use your imagination and produce something unique.',
		jobs: [
			'Graphic Designer',
			'Writer / Editor',
			'Architect',

			'Fashion Designer',
			'Musician',
			'Actor',
			'Photographer',
			'Art Director'
		]
	},
	Social: {
		title: 'The Helpers',
		description:
			'You are people-oriented, empathetic, and supportive. You enjoy teaching, counseling, caring for, and helping others in a cooperative environment.',
		jobs: [
			'Teacher',
			'Nurse',
			'Social Worker',
			'Therapist',
			'HR Manager',
			'Customer Success Specialist',
			'Non-profit Director',
			'Librarian'
		]
	},
	Enterprising: {
		title: 'The Persuaders',
		description:
			'You are ambitious, outgoing, and persuasive. You enjoy leadership roles, sales, influencing others, and taking on business challenges.',
		jobs: [
			'Marketing Manager',
			'Sales Executive',
			'Lawyer',
			'Real Estate Agent',
			'Entrepreneur',
			'Politician',
			'Event Planner',
			'Public Relations Specialist'
		]
	},
	Conventional: {
		title: 'The Organizers',
		description:
			'You thrive in structured, orderly environments. You are dependable, detail-oriented, and enjoy working with data, records, and following set procedures.',
		jobs: [
			'Accountant',
			'Office Manager',
			'Financial Analyst',
			'Data Entry Specialist',
			'Bookkeeper',
			'Compliance Officer',
			'Web Developer (Backend)',
			'Logistics Manager'
		]
	}
};