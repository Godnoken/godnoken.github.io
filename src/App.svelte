<script lang="ts">
  import { onMount } from "svelte";

  import { xIn, xOut, currentIndex, windowWidth } from "./stores";

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

  function moveCarouselByArrows(index) {
    if (index === 1) {
      $xIn = $windowWidth;
      $xOut = -$windowWidth;
    } else {
      $xIn = -$windowWidth;
      $xOut = $windowWidth;
    }

    carousel(($currentIndex += index));
  }

  function moveByDots(index) {
    const newIndex = index;

    if (newIndex > $currentIndex) {
      $xIn = $windowWidth;
      $xOut = -$windowWidth;
    } else {
      $xIn = -$windowWidth;
      $xOut = $windowWidth;
    }

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

<svelte:window bind:innerWidth={$windowWidth} />

<main>
  <div class="top">
    <MyLibraryCard />
    <ForumCard />
    <TicTacToeCard />
    <BlogCard />

    <div class="prev" on:click={() => moveCarouselByArrows(-1)}>&#10094;</div>
    <div class="next" on:click={() => moveCarouselByArrows(1)}>&#10095;</div>
    <div class="dot-container">
      <div on:click={() => moveByDots(1)} class="dot" />
      <div on:click={() => moveByDots(2)} class="dot" />
      <div on:click={() => moveByDots(3)} class="dot" />
      <div on:click={() => moveByDots(4)} class="dot" />
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
    position: fixed;
    height: 100%;
    width: 100vw;
    display: flex;
    flex-direction: column;
    background-color: #222222;
    font-family: "Montserrat", sans-serif;
  }

  .top {
    position: relative;
    height: 50vh;
    display: flex;
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
    height: 18px;
    width: 18px;
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

  .prev:hover,
  .next:hover {
    background-color: white;
    color: black;
  }

  .bottom {
    height: 50vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  :global(svg) {
    height: 30px;
    width: 30px;
  }

  @media (max-width: 950px) {
    .top {
      height: 75vh;
    }

    .bottom {
      height: 25vh;
      margin: 10px 10px;
      grid-template-rows: 1fr 1fr 1fr;
      grid-template-columns: auto;
    }
  }

  @media (max-width: 1300px) and (max-height: 900px) {
    :global(svg) {
      height: 20px;
      width: 20px;
    }
  }

  @media (max-width: 450px) {
    .next, .prev {
      padding: 0 4px 4px 2px;
      font-size: 48px;
    }
  }
</style>
