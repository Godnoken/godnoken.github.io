<script lang="ts">
	import Tech from "./Tech.svelte";
	import Me from "./Me.svelte";
	import Contact from "./Contact.svelte";
</script>

<main>
	<div class="top">

	</div>
	<div class="bottom">
		<Contact />
		<Me />
		<Tech />
	</div>
</main>

<style>
	main {
		height: 100vh;
		width: 100vw;
		display: grid;
		grid-template-rows: 1fr 1fr;
		background-color: #3E3E3E;
		font-family: 'Montserrat Subrayada', sans-serif;
	}

	.top {

	}

	.bottom {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>