<script lang="ts">
  import { onMount } from "svelte";

  import { xIn, xOut, currentIndex, windowWidth, darkMode } from "./stores";

  import ForumCard from "./projects/ForumCard.svelte";
  import MyLibraryCard from "./projects/MyLibraryCard.svelte";
  import BlogCard from "./projects/BlogCard.svelte";
  import TicTacToeCard from "./projects/TicTacToeCard.svelte";
  import WindowsCard from "./projects/WindowsCard.svelte";
  import WeatherCard from "./projects/WeatherCard.svelte";
  import MinecraftCard from "./projects/MinecraftCard.svelte";
  import Tech from "./Tech.svelte";
  import Me from "./Me.svelte";
  import Contact from "./Contact.svelte";
  import { codewarsIcon, darkmodeIcon, emailIcon, githubIcon } from "./Icons";

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
    if (index > 7) {
      $currentIndex = 1;
    }
    if (index < 1) {
      $currentIndex = 7;
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
    <WeatherCard />
    <MinecraftCard />

    <div class="prev" on:click={() => moveCarouselByArrows(-1)}>&#10094;</div>
    <div class="next" on:click={() => moveCarouselByArrows(1)}>&#10095;</div>
    <div class="dot-container">
      <div on:click={() => moveByDots(1)} class="dot" />
      <div on:click={() => moveByDots(2)} class="dot" />
      <div on:click={() => moveByDots(3)} class="dot" />
      <div on:click={() => moveByDots(4)} class="dot" />
      <div on:click={() => moveByDots(5)} class="dot" />
      <div on:click={() => moveByDots(6)} class="dot" />
      <div on:click={() => moveByDots(7)} class="dot" />
    </div>
  </div>
  <div class="bottom">
    <Contact />
    <Me />
    <Tech />
  </div>
  <div class="icon-container">
    <figure
      class="small-icon dark-light-mode-icon icon-hover"
      on:click={handleColorTheme}
    >
      {@html darkmodeIcon}
    </figure>
    <a
      href="https://www.codewars.com/users/Godnoken"
      class="small-icon icon-hover codewars-svg"
      target="_blank"
    >
      {@html codewarsIcon}
    </a>
    <a
      href="mailto: sebastian.ojefors@gmail.com"
      class="small-icon icon-hover"
      target="_blank"
    >
      {@html emailIcon}
    </a>
    <a
      href="https://github.com/Godnoken"
      class="small-icon icon-hover"
      target="_blank"
    >
      {@html githubIcon}
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
