<script lang="ts">
  import { onMount } from "svelte";

  import { xIn, xOut, currentIndex, windowWidth, darkMode } from "./stores";

  import ForumCard from "./ForumCard.svelte";
  import MyLibraryCard from "./MyLibraryCard.svelte";
  import BlogCard from "./BlogCard.svelte";
  import TicTacToeCard from "./TicTacToeCard.svelte";
  import Tech from "./Tech.svelte";
  import Me from "./Me.svelte";
  import Contact from "./Contact.svelte";

  let dotElements;

  onMount(() => {
    readColorThemeOnLoad();
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

  function readColorThemeOnLoad(): void {
    if (
      localStorage["theme"] === "darkMode" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("darkMode");
      $darkMode = true;
    } else {
      document.documentElement.classList.remove("darkMode");
      $darkMode = false;
    }
  }

  function handleColorTheme(): void {
    const html = document.documentElement;

    if (html.classList.contains("darkMode")) {
      html.classList.toggle("darkMode");
      window.localStorage.setItem("theme", "lightMode");
      $darkMode = false;
    } else {
      html.classList.toggle("darkMode");
      window.localStorage.setItem("theme", "darkMode");
      $darkMode = true;
    }
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
  <svg
    on:click={handleColorTheme}
    class="dark-light-mode-icon"
    viewBox="0 0 24 24"
  >
    <path
      d="M7,17H4C2.38,17 0.96,15.74 0.76,14.14L0.26,11.15C0.15,10.3 0.39,9.5 0.91,8.92C1.43,8.34 2.19,8 3,8H9C9.83,8 10.58,8.35 11.06,8.96C11.17,9.11 11.27,9.27 11.35,9.45C11.78,9.36 12.22,9.36 12.64,9.45C12.72,9.27 12.82,9.11 12.94,8.96C13.41,8.35 14.16,8 15,8H21C21.81,8 22.57,8.34 23.09,8.92C23.6,9.5 23.84,10.3 23.74,11.11L23.23,14.18C23.04,15.74 21.61,17 20,17H17C15.44,17 13.92,15.81 13.54,14.3L12.64,11.59C12.26,11.31 11.73,11.31 11.35,11.59L10.43,14.37C10.07,15.82 8.56,17 7,17Z"
    />
  </svg>
</main>

<style lang="scss">
  $dark-primary-color: #323232;
  $dark-secondary-color: #171717;
  $dark-accent-color: white;

  $light-primary-color: #bbbbbb;
  $light-secondary-color: #cfcfcf;
  $light-accent-color: black;

  :root {
    --primary-color: #{$light-primary-color};
    --secondary-color: #{$light-secondary-color};
    --accent-color: #{$light-accent-color};
  }

  :global(.darkMode) {
    --primary-color: #{$dark-primary-color};
    --secondary-color: #{$dark-secondary-color};
    --accent-color: #{$dark-accent-color};
  }

  main {
    position: fixed;
    height: 100%;
    width: 100vw;
    display: flex;
    flex-direction: column;
    background-color: var(--primary-color);
    font-family: "Montserrat", sans-serif;
    transition: 0.6s;
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
    color: var(--accent-color);
    font-size: 72px;
    transition: 0.6s ease;
    user-select: none;
  }

  .next {
    right: 0;
  }

  .bottom {
    height: 50vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .dark-light-mode-icon {
    position: absolute;
    top: 6px;
    right: 6px;
    fill: var(--accent-color);
    cursor: pointer;
  }

  :global(svg) {
    height: 30px;
    width: 30px;
  }

  @media (hover: hover) {
    .prev:hover,
    .next:hover {
      background-color: var(--secondary-color);
    }
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
    .next,
    .prev {
      padding: 0 4px 4px 2px;
      font-size: 48px;
    }
  }
</style>
