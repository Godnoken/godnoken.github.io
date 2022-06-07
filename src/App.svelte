<script lang="ts">
  import { onMount } from "svelte";

  import { xIn, xOut, currentIndex, windowWidth, darkMode } from "./stores";

  import ForumCard from "./ForumCard.svelte";
  import MyLibraryCard from "./MyLibraryCard.svelte";
  import BlogCard from "./BlogCard.svelte";
  import TicTacToeCard from "./TicTacToeCard.svelte";
  import WindowsCard from "./WindowsCard.svelte";
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
    if (index > 5) {
      $currentIndex = 1;
    }
    if (index < 1) {
      $currentIndex = 5;
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
    <WindowsCard />

    <div class="prev" on:click={() => moveCarouselByArrows(-1)}>&#10094;</div>
    <div class="next" on:click={() => moveCarouselByArrows(1)}>&#10095;</div>
    <div class="dot-container">
      <div on:click={() => moveByDots(1)} class="dot" />
      <div on:click={() => moveByDots(2)} class="dot" />
      <div on:click={() => moveByDots(3)} class="dot" />
      <div on:click={() => moveByDots(4)} class="dot" />
      <div on:click={() => moveByDots(5)} class="dot" />
    </div>
  </div>
  <div class="bottom">
    <Contact />
    <Me />
    <Tech />
  </div>
  <div class="icon-container">
    <svg
    on:click={handleColorTheme}
    class="small-icon dark-light-mode-icon icon-hover svg-color"
    viewBox="0 0 24 24"
  >
    <path
      d="M7,17H4C2.38,17 0.96,15.74 0.76,14.14L0.26,11.15C0.15,10.3 0.39,9.5 0.91,8.92C1.43,8.34 2.19,8 3,8H9C9.83,8 10.58,8.35 11.06,8.96C11.17,9.11 11.27,9.27 11.35,9.45C11.78,9.36 12.22,9.36 12.64,9.45C12.72,9.27 12.82,9.11 12.94,8.96C13.41,8.35 14.16,8 15,8H21C21.81,8 22.57,8.34 23.09,8.92C23.6,9.5 23.84,10.3 23.74,11.11L23.23,14.18C23.04,15.74 21.61,17 20,17H17C15.44,17 13.92,15.81 13.54,14.3L12.64,11.59C12.26,11.31 11.73,11.31 11.35,11.59L10.43,14.37C10.07,15.82 8.56,17 7,17Z"
    />
  </svg>
    <a
      href="https://www.codewars.com/users/Godnoken"
      title="Codewars"
      target="_blank"
    >
      <svg
        class="codewars-svg small-icon icon-hover"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        ><path
          d="M1 .1a1 1 0 0 0-1 1.1v21.6a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V1.2a1 1 0 0 0-1-1zM10.9 2a.9.9 0 0 1 .8.5.8.8 0 0 1 1.3.5.6.6 0 0 1 .3 0c.3 0 .6.2.6.5a1.3 1.3 0 0 1 .6-.5 1.3 1.3 0 0 1 1.8.7 1.1 1.1 0 0 1 .3-.2 1.1 1.1 0 0 1 1.5.4 1 1 0 0 1 0 .5 1 1 0 0 1 1.4 1.2.9.9 0 0 1 .9 1.5.8.8 0 0 1 .1 1.3.6.6 0 0 1 .2.2.6.6 0 0 1 0 .7 1.3 1.3 0 0 1 .5.2 1.3 1.3 0 0 1 .3 1.8 1.1 1.1 0 0 1 .3.2 1.1 1.1 0 0 1 .4 1.5 1 1 0 0 1-.4.3 1 1 0 0 1 .2 1.4 1 1 0 0 1-.6.4.9.9 0 0 1-.8 1.5.8.8 0 0 1-1 .8.6.6 0 0 1-.2.3.6.6 0 0 1-.4.3 1.3 1.3 0 0 1 0 .4 1.3 1.3 0 0 1-1.4 1.2 1.1 1.1 0 0 1 0 .4 1.1 1.1 0 0 1-1 1 1.1 1.1 0 0 1-.5 0 1 1 0 0 1-1.7.5.9.9 0 0 1-1.7.1.8.8 0 0 1-1.3-.5.6.6 0 0 1-.3 0 .6.6 0 0 1-.6-.5 1.3 1.3 0 0 1-.6.5 1.3 1.3 0 0 1-1.8-.7 1.1 1.1 0 0 1-.3.2 1.1 1.1 0 0 1-1.4-.4 1 1 0 0 1-.2-.5 1 1 0 0 1-1.3-1.2A.9.9 0 0 1 4 17a.8.8 0 0 1-.1-1.3.6.6 0 0 1-.2-.3.6.6 0 0 1 0-.6 1.3 1.3 0 0 1-.5-.2 1.3 1.3 0 0 1-.3-1.8 1.1 1.1 0 0 1-.3-.2 1.1 1.1 0 0 1-.3-1.5 1 1 0 0 1 .3-.3A1 1 0 0 1 3 9a.9.9 0 0 1 .8-1.5.8.8 0 0 1 1-.8.6.6 0 0 1 .2-.3.6.6 0 0 1 .4-.3 1.3 1.3 0 0 1 0-.4 1.3 1.3 0 0 1 1.4-1.2 1.1 1.1 0 0 1 0-.4 1.1 1.1 0 0 1 1-1 1 1 0 0 1 .6 0 1 1 0 0 1 1.7-.5.9.9 0 0 1 .8-.6zM3.7 7.5zm13.8 12.1zm-3.7-16zm-2.3-.1a.9.9 0 0 1-.7.3.9.9 0 0 1-.6-.3 1 1 0 0 1-1 .8 1 1 0 0 1-.3-.1 1.1 1.1 0 0 1-1.1 1 1.3 1.3 0 0 1 .1.8 1.3 1.3 0 0 1-.7 1 1.1 1.1 0 0 1 .3.8 1.1 1.1 0 0 1-.2.7c.3.1.5.5.5.9a1 1 0 0 1 0 .3 1 1 0 0 1 .7 1 .7.7 0 0 1 .2 0c.3 0 .6.3.7.6a.7.7 0 0 1 .4 0c.3 0 .5.2.6.4a.4.4 0 0 1 .4 0 1.4 1.4 0 0 1 .3-.6.4.4 0 0 1-.1-.1.4.4 0 0 1 0-.4.7.7 0 0 1-.4-1.2.7.7 0 0 1-.3-.3.7.7 0 0 1 .4-1 1 1 0 0 1-.3-.3 1 1 0 0 1 .6-1.3 1 1 0 0 1 .5-1.3A1 1 0 0 1 12 5a1.1 1.1 0 0 1 .6-1 .6.6 0 0 1 0-.2.8.8 0 0 1-.5 0 .8.8 0 0 1-.6-.3zM16 5a1.3 1.3 0 0 1-.6.5 1.3 1.3 0 0 1-1.2-.2 1.1 1.1 0 0 1-.6.7 1.1 1.1 0 0 1-.6 0 1 1 0 0 1-.6 1 1 1 0 0 1-.3 0 1 1 0 0 1-.5 1.2 1 1 0 0 1 0 .1.7.7 0 0 1 0 .1.7.7 0 0 1-.2 1 .7.7 0 0 1 .3.2.7.7 0 0 1-.1.8.4.4 0 0 1 .1.2 1.4 1.4 0 0 1 .7 0 .4.4 0 0 1 .4-.3.7.7 0 0 1 .8-.8.7.7 0 0 1 .1-.5.7.7 0 0 1 1-.2 1 1 0 0 1 .2-.3 1 1 0 0 1 1.2-.3 1 1 0 0 1 .2.1 1 1 0 0 1 1.4-.3 1 1 0 0 1 .4.4c.4-.2.8-.2 1.2 0a1.1 1.1 0 0 1 .2.2.6.6 0 0 1 .1-.1.8.8 0 0 1-.3-.3.8.8 0 0 1 0-.8.9.9 0 0 1-.5-.5.9.9 0 0 1-.1-.6 1 1 0 0 1-1.1-.5 1 1 0 0 1-.1-.4A1.1 1.1 0 0 1 16 5zM5.2 7.4a.8.8 0 0 1 0 .4.8.8 0 0 1-.8.4v.7a.9.9 0 0 1-.6.4c.3.3.4.8.2 1.2a1 1 0 0 1-.3.3 1.1 1.1 0 0 1 .3 1.4 1.3 1.3 0 0 1 .7.3 1.3 1.3 0 0 1 .6 1.2c.2-.1.5 0 .8.1a1.1 1.1 0 0 1 .4.5 1 1 0 0 1 1 0 1 1 0 0 1 .3.3 1 1 0 0 1 1.3-.2.7.7 0 0 1 .1 0 .7.7 0 0 1 .9-.4.7.7 0 0 1 .1-.4.7.7 0 0 1 .8-.2.4.4 0 0 1 .2-.4 1.4 1.4 0 0 1-.4-.5.4.4 0 0 1-.2 0 .4.4 0 0 1-.3-.2.7.7 0 0 1-1.2-.2.7.7 0 0 1-.4.1.7.7 0 0 1-.8-.7 1 1 0 0 1-.3 0 1 1 0 0 1-.9-1.1 1 1 0 0 1-1-1 1 1 0 0 1 .2-.6 1.1 1.1 0 0 1-.6-1 1.1 1.1 0 0 1 0-.4zm11.2 2.1a1 1 0 0 1-1.2.2 1 1 0 0 1-.2 0 .7.7 0 0 1-.9.4.7.7 0 0 1 0 .4.7.7 0 0 1-.8.3.4.4 0 0 1-.1.2 1.4 1.4 0 0 1 .2.6.4.4 0 0 1 .2 0 .4.4 0 0 1 .4.2.7.7 0 0 1 1 .2.7.7 0 0 1 .6-.1c.4 0 .7.3.7.7a1 1 0 0 1 .3 0 1 1 0 0 1 .9.9 1 1 0 0 1 0 .2c.5 0 1 .5 1 1a1 1 0 0 1-.2.6 1.1 1.1 0 0 1 .6 1 1.1 1.1 0 0 1 0 .4.8.8 0 0 1 .2-.4.8.8 0 0 1 .7-.4.9.9 0 0 1 0-.7.9.9 0 0 1 .6-.4 1 1 0 0 1-.1-1.2 1 1 0 0 1 .2-.3 1.1 1.1 0 0 1-.3-1.4 1.3 1.3 0 0 1-.7-.3 1.3 1.3 0 0 1-.5-1.2 1 1 0 0 1-.9-.1 1.1 1.1 0 0 1-.4-.5 1 1 0 0 1-1 0 1 1 0 0 1-.3-.3zm-.1 3.1zm-2.9-.2a1.4 1.4 0 0 1-.3.6.4.4 0 0 1 .1.1.4.4 0 0 1 0 .4.7.7 0 0 1 .4 1.2.7.7 0 0 1 .3.3.7.7 0 0 1-.3 1 1 1 0 0 1 .2.2 1 1 0 0 1-.4 1.3 1 1 0 0 1-.2 0 1 1 0 0 1-.5 1.4 1 1 0 0 1-.5.1 1.1 1.1 0 0 1-.7 1.1.6.6 0 0 1 .1.2.8.8 0 0 1 .5 0 .8.8 0 0 1 .7.3.9.9 0 0 1 .6-.3.9.9 0 0 1 .6.3 1 1 0 0 1 1-.8 1 1 0 0 1 .4.1 1.1 1.1 0 0 1 1-1 1.3 1.3 0 0 1-.1-.8c0-.4.3-.8.7-1a1.1 1.1 0 0 1-.3-.8 1.1 1.1 0 0 1 .2-.7 1 1 0 0 1-.4-1.2 1 1 0 0 1-.8-1 .7.7 0 0 1-.2 0 .7.7 0 0 1-.7-.6.7.7 0 0 1-.4 0 .7.7 0 0 1-.6-.4.4.4 0 0 1-.2 0 .4.4 0 0 1-.2 0zm-1 .9a1.4 1.4 0 0 1-.3 0h-.3a.4.4 0 0 1 0 .3.4.4 0 0 1-.4.2.7.7 0 0 1-.8.8.7.7 0 0 1-.1.5.7.7 0 0 1-1 .2 1 1 0 0 1-.2.3 1 1 0 0 1-1.2.3 1 1 0 0 1-.2-.1 1 1 0 0 1-1.4.3 1 1 0 0 1-.4-.4c-.3.2-.8.2-1.2 0a1.1 1.1 0 0 1-.2-.2.7.7 0 0 1 0 .1.8.8 0 0 1 .2.3.8.8 0 0 1 0 .8.9.9 0 0 1 .6.5.9.9 0 0 1 0 .6 1 1 0 0 1 1.2.5 1 1 0 0 1 0 .4 1.1 1.1 0 0 1 1.5.4 1.3 1.3 0 0 1 .6-.5c.4-.1.9 0 1.2.2a1.1 1.1 0 0 1 .6-.7 1.1 1.1 0 0 1 .7 0 1 1 0 0 1 .5-1 1 1 0 0 1 .3 0 1 1 0 0 1 .5-1.3 1 1 0 0 1 .1 0 .7.7 0 0 1 0-.1.7.7 0 0 1 0-1 .7.7 0 0 1-.2-.2.7.7 0 0 1 .2-.8.4.4 0 0 1-.2-.2.4.4 0 0 1 0-.2z"
        /></svg
      >
    </a>
    <a
      href="mailto: sebastian.ojefors@gmail.com"
      title="Email"
      target="_blank"
    >
      <svg class="small-icon icon-hover svg-color" viewBox="0 0 24 24">
        <path
          d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
        />
      </svg>
    </a>
    <a href="https://github.com/Godnoken" title="Github" target="_blank">
      <svg
      class="small-icon icon-hover svg-color"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 128"
        ><g
          ><path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M64 5a60 60 0 0 0-19 118c3 0 4-2 4-3v-11c-17 3-20-7-20-7-3-7-7-9-7-9-6-4 0-4 0-4 6 0 10 6 10 6 5 9 14 7 17 5l4-8c-13-1-28-7-28-30 0-6 3-12 7-16-1-1-3-8 0-16 0 0 5-1 17 6a58 58 0 0 1 30 0c12-7 17-6 17-6 3 8 1 15 0 16 4 4 7 10 7 16 0 24-15 29-28 30 2 2 4 6 4 11v17c0 1 1 3 4 3A60 60 0 0 0 64 5z"
          /><path
            d="M26 92h-1v-1h1v1zm3 3-1-1v-1h1v2zm2 3-1-1v-1l1 1v1zm4 3h-2v-1h1l1 1zm4 2-1 1-1-1 1-1 1 1zm5 1-1 1-2-1 2-1 1 1zm5-1-2 1-1-1 1-1 2 1zm0 0"
          /></g
        ></svg
      >
    </a>
  </div>
</main>

<style lang="scss">
  $dark-primary-color: #323232;
  $dark-secondary-color: #363636;
  $dark-accent-color: white;

  $light-primary-color: #dddddd;
  $light-secondary-color: #f1f1f1;
  $light-accent-color: black;

  :root {
    --primary-color: #{$light-primary-color};
    --secondary-color: #{$light-secondary-color};
    --accent-color: #{$light-accent-color};

    --small-text: clamp(12px, 1.1 * (1vw + 1vh) / 2, 32px);
    --medium-text: clamp(12px, 1.8 * (1vw + 1vh) / 2, 72px);
    --large-text: clamp(14px, 3 * (1vw + 1vh) / 2, 100px);

    --small-icon: clamp(15px, 3 * (1vw + 1vh) / 2, 100px);
    --big-icon: clamp(15px, 5 * (1vw + 1vh) / 2, 140px);
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
    height: var(--medium-text);
    width: var(--medium-text);
    border-radius: 100%;
    background-color: white;
    cursor: pointer;
    transition: 1s;
  }

  :global(.active-dot) {
    background-color: rgb(102, 102, 102) !important;
  }

  :global(a) {
    color: gray;
  }

  .prev,
  .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    padding: 12px 16px 16px;
    color: var(--accent-color);
    font-size: var(--big-icon);
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

  .icon-container {
    position: absolute;
    right: 4px;
    top: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    row-gap: 4px;
    padding: 5px;
    border-radius: 12px;
    z-index: 2;
    background-color: var(--secondary-color);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }

  .dark-light-mode-icon {
    border-bottom: 2px solid rgba(165, 165, 165, 0.76);
    cursor: pointer;
  }

  .codewars-svg {
    fill: var(--accent-color);
    margin-top: 6px;
    border-radius: 100%;
  }

  :global(.svg-color) {
    fill: var(--accent-color);
    stroke: var(--accent-color);
  }

  :global(.big-icon) {
    height: var(--big-icon);
    width: var(--big-icon);
    cursor: pointer;
  }

  :global(.small-icon) {
    height: var(--small-icon);
    width: var(--small-icon);
  }

  :global(.icon-hover:hover) {
    transition: opacity 0.5s;
    opacity: 0.5;
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

  @media (max-width: 450px) {
    .next,
    .prev {
      padding: 0 5px 5px;
      font-size: 48px;
    }
  }
</style>
