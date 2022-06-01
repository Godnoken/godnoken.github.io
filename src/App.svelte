<script lang="ts">
  import { onMount } from "svelte";

  import { xIn, xOut, currentIndex } from "./stores";

  import ForumCard from "./ForumCard.svelte";
  import MyLibraryCard from "./MyLibraryCard.svelte";
  import BlogCard from "./BlogCard.svelte";
  import TicTacToeCard from "./TicTacToeCard.svelte";
  import Tech from "./Tech.svelte";
  import Me from "./Me.svelte";
  import Contact from "./Contact.svelte";

  let dotElements;

  onMount(() => {
	  dotElements = document.querySelectorAll<HTMLElement>(".dot");
   	 carousel($currentIndex);
  });

  const windowWidth = window.innerWidth;

  function moveCarouselByArrows(index) {
	  if (index === 1) { $xIn = windowWidth; $xOut = -windowWidth }
	  else { $xIn = -windowWidth; $xOut = windowWidth }

    carousel(($currentIndex += index));
  }

  function moveByDots(index) {
	const newIndex = index;

	if (newIndex > $currentIndex) { $xIn = windowWidth; $xOut = -windowWidth }
	else { $xIn = -windowWidth; $xOut = windowWidth }

	carousel(($currentIndex = index));
  }

  function carousel(index) {
    if (index > 4) {
      $currentIndex = 1;
    }
    if (index < 1) {
      $currentIndex = 4;
    }

	for (let i = 0; i < dotElements.length; i++) {
		dotElements[i].classList.remove("active-dot");
	}

	dotElements[$currentIndex - 1].classList.add("active-dot");
  }
</script>

<main>
  <div class="top">
	<MyLibraryCard />
    <ForumCard />
    <TicTacToeCard  />
    <BlogCard />

    <div class="prev" on:click={() => moveCarouselByArrows(-1)}>&#10094;</div>
    <div class="next" on:click={() => moveCarouselByArrows(1)}>&#10095;</div>
	<div class="dot-container">
		<div on:click={() => moveByDots(1)} class="dot"></div>
		<div on:click={() => moveByDots(2)} class="dot"></div>
		<div on:click={() => moveByDots(3)} class="dot"></div>
		<div on:click={() => moveByDots(4)} class="dot"></div>
	</div>
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
    display: flex;
    flex-direction: column;
    background-color: #121212;
    font-family: "Montserrat Subrayada", sans-serif;
  }

  .top {
    position: relative;
    height: 50vh;
	display: flex;
	overflow: hidden;
  }

  .dot-container {
	  position: absolute;
	  left: 0;
	  right: 0;
	  bottom: 0;
	  width: 50%;
	  margin: 0 auto;
	  display: flex;
	  justify-content: center;
	  column-gap: 10px;
  }

  .dot {
	  height: 20px;
	  width: 20px;
	  border-radius: 100%;
	  background-color: white;
	  cursor: pointer;
	  transition: 1s;
  }

  :global(.active-dot) {
	background-color: rgb(102, 102, 102) !important;
  }

  .prev,
  .next {
    cursor: pointer;
    position: absolute;
    top: calc(50% - 44px);
    padding: 12px 16px 16px;
    color: white;
    font-size: 72px;
    transition: 0.6s ease;
    user-select: none;
  }

  .next {
    right: 0;
  }

  .prev:hover, .next:hover {
  background-color: white;
  color: black;
}

  .bottom {
    height: 50vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
