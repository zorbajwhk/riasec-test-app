<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { theme } from '$lib/stores';

	function googleTranslateElementInit() {
		new (window as any).google.translate.TranslateElement(
			{ pageLanguage: 'en' },
			'google_translate_element'
		);
	}

	function toggleTheme() {
		theme.update((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
	}

	$:
		if (browser) {
			document.body.className = $theme;
		}

	onMount(() => {
		if (browser && !(window as any).google) {
			const script = document.createElement('script');
			script.type = 'text/javascript';
			script.src =
				'//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
			script.async = true;

			(window as any).googleTranslateElementInit = googleTranslateElementInit;

			document.body.appendChild(script);
		}

		const navbarBurger = document.querySelector('.navbar-burger');
		if (navbarBurger) {
			navbarBurger.addEventListener('click', () => {
				navbarBurger.classList.toggle('is-active');
				const target = navbarBurger.dataset.target;
				if (target) {
					document.getElementById(target)?.classList.toggle('is-active');
				}
			});
		}
	});
</script>

<header>
	<nav class="navbar is-light" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<a class="navbar-item is-size-4 has-text-weight-bold" href="/">
				RIASEC Test App
			</a>
			<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>

		<div id="navbarBasicExample" class="navbar-menu">
			<div class="navbar-start">
				<a class="navbar-item" href="/quiz">
					Take the Test
				</a>
				<a class="navbar-item" href="/results">
					View Results
				</a>
			</div>

			<div class="navbar-end">
				<div class="navbar-item">
					<button class="button {$theme === 'light' ? 'is-light' : 'is-dark'}" on:click={toggleTheme}>
						{$theme === 'light' ? 'Dark Mode' : 'Light Mode'}
					</button>
				</div>
				<div class="navbar-item">
					<div id="google_translate_element" />
				</div>
			</div>
		</div>
	</nav>
</header>

<main class="section" id="main-content">
	<div class="container">
		<slot />
	</div>
</main>

<footer class="footer {$theme === 'light' ? 'has-background-light' : 'has-background-dark'}">
	<div class="content has-text-centered">
		<p>
			Made with ❤️ by <a href="https://github.com/zorbajwhk">Zorba Jobs Wong</a>
		</p>
		<p>
			&copy; {new Date().getFullYear()} RIASEC Test App. All rights reserved.
		</p>
	</div>
</footer>

<style>
	:global(body) {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	#google_translate_element {
		display: flex;
		align-items: center;
	}

	:global(.goog-te-gadget-simple) {
		border: 1px solid #ccc !important;
		border-radius: 4px;
		background-color: white;
		padding: 5px;
	}

	:global(.goog-te-gadget-icon) {
		display: none !important;
	}

	:global(.goog-te-menu-value span) {
		font-weight: 500;
		color: #555 !important;
	}

	#main-content {
		height: 100vh;
	}

	.footer {
		padding: 1rem 1.5rem;
	}
</style>