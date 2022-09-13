<script lang="ts">
  import { scale } from "svelte/transition";

  import BottomCard from "./BottomCard.svelte";
  import {
    angularIcon,
    cIcon,
    csharpIcon,
    cssIcon,
    expressIcon,
    figmaIcon,
    firebaseIcon,
    gitIcon,
    gsapIcon,
    htmlIcon,
    javascriptIcon,
    luaIcon,
    mongodbIcon,
    nodejsIcon,
    pugIcon,
    reactIcon,
    sassIcon,
    socketioIcon,
    tailwindIcon,
    typescriptIcon,
    unityIcon,
    webpackIcon,
  } from "./Icons";
  import { activeCard, windowWidth, mouseX, mouseY, darkMode } from "./stores";
  let title: string = "TECH";
  let right: string = "0px";
  let color: string = "137 240 220";
  let zIndex: string;
  let handleActiveCard;
</script>

<BottomCard
  {title}
  {right}
  {zIndex}
  color={$darkMode ? color : "128 128 128"}
  bind:handleActiveCard
/>
{#if $activeCard === title}
  <div
    class="tech-container"
    transition:scale={{ duration: 500 }}
    on:introstart={() => (zIndex = "2")}
    on:outroend={() => (zIndex = "0")}
    style="--mouseX: {$mouseX + 'px'}; --mouseY: {$mouseY +
      'px'}; --bgColor: {$darkMode ? '#182c28' : 'whitesmoke'}"
  >
    <div class="content">
      <h1 class="title">Tech I have used</h1>
      <div class="inner-content">
        <div class="base box">
          <h2 class="tech-titles">Base</h2>
          <div class="icon-container right-icons">
            <a
              href="https://en.wikipedia.org/wiki/HTML#:~:text=The%20HyperText%20Markup%20Language%20or,(HyperText%20Markup%20Language)"
              target="_blank"
              class="big-icon icon-hover">{@html htmlIcon}</a
            >
            <a
              href="https://en.wikipedia.org/wiki/CSS"
              target="_blank"
              class="big-icon icon-hover">{@html cssIcon}</a
            >
            <a
              href="https://en.wikipedia.org/wiki/JavaScript"
              target="_blank"
              class="big-icon icon-hover">{@html javascriptIcon}</a
            >
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              class="big-icon icon-hover">{@html typescriptIcon}</a
            >
            <a
              href="https://en.wikipedia.org/wiki/C_(programming_language)#:~:text=C%20is%20an%20imperative%20procedural,all%20with%20minimal%20runtime%20support."
              target="_blank"
              class="big-icon icon-hover">{@html cIcon}</a
            >
            <a
              href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)"
              target="_blank"
              class="big-icon icon-hover">{@html csharpIcon}</a
            >
            <a href="https://www.lua.org/" target="_blank" class="big-icon icon-hover">{@html luaIcon}</a>
          </div>
        </div>
        <div class="front-end box">
          <h2 class="tech-titles">Front-end</h2>
          <div class="icon-container left-icons">
            <a
              class="big-icon icon-hover"
              href="https://tailwindcss.com/"
              target="_blank">{@html tailwindIcon}</a
            >
            <a
              class="big-icon icon-hover"
              href="https://reactjs.org/"
              target="_blank">{@html reactIcon}</a
            >
            <a
              class="big-icon icon-hover"
              href="https://angular.io/"
              target="_blank">{@html angularIcon}</a
            >
            <a
              class="big-icon icon-hover"
              href="https://sass-lang.com/"
              target="_blank">{@html sassIcon}</a
            >
            <a
              class="big-icon icon-hover"
              href="https://pugjs.org/api/getting-started.html"
              target="_blank"
              >{@html pugIcon}
            </a>
          </div>
        </div>
        <div class="back-end box">
          <h2 class="tech-titles">Back-end</h2>
          <div class="icon-container right-icons">
            <a
            class="big-icon icon-hover"
              href="https://firebase.google.com/"
              target="_blank">{@html firebaseIcon}</a
            >
            <a class="big-icon icon-hover" href="https://www.mongodb.com/" target="_blank"
              >{@html mongodbIcon}</a
            >
            <a class="big-icon icon-hover" href="https://socket.io/" target="_blank"
              >{@html socketioIcon}</a
            >
            <a class="big-icon icon-hover" href="https://nodejs.org/en/" target="_blank"
              >{@html nodejsIcon}</a
            >
            <a class="big-icon icon-hover" href="https://expressjs.com/" target="_blank"
              >{@html expressIcon}</a
            >
          </div>
        </div>
        <div class="other box">
          <h2 class="tech-titles">Other</h2>
          <div class="icon-container left-icons">
            <a class="big-icon icon-hover" href="https://www.figma.com/" target="_blank"
              >{@html figmaIcon}</a
            >
            <a class="big-icon icon-hover" href="https://git-scm.com/" target="_blank"
              >{@html gitIcon}</a
            >
            <a class="big-icon icon-hover" href="https://webpack.js.org/" target="_blank"
              >{@html webpackIcon}</a
            >
            <a class="big-icon icon-hover" href="https://greensock.com/gsap/" target="_blank"
              >{@html gsapIcon}
            </a>
            <a class="big-icon icon-hover" href="https://unity.com/" target="_blank"
              >{@html unityIcon}
            </a>
          </div>
        </div>
      </div>
      {#if $windowWidth < 950}
        <button on:click={handleActiveCard} class="go-back">Go back</button>
      {/if}
    </div>

    {#each { length: 5 } as _, i}
      <div
        class="movingGlobe"
        style="--size: {i + 1}; --color: {$darkMode
          ? color
          : '180 180 180'}; --windowWidth: {$windowWidth}"
      />
    {/each}
  </div>
{/if}

<style>
  .tech-container {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100%;
    display: flex;
    background-color: var(--bgColor);
    transform-origin: var(--mouseX) var(--mouseY);
    overflow: hidden;
    z-index: 1;
    transition: 0.6s;
  }

  .content {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 1fr 5fr 1fr;
    row-gap: 18px;
    color: var(--accent-color);
    z-index: 1;
  }

  .inner-content {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }

  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 8px;
    margin: 0 10px;
    text-align: center;
    font-size: var(--medium-text);
  }

  .icon-container {
    display: flex;
    justify-content: center;
    align-self: center;
    column-gap: 12px;
    padding: 10px 24px;
    border-radius: 12px;
    background-color: var(--secondary-color);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    transition: 0.6s;
  }

  .base {
    grid-column: 2/4;
  }

  .front-end {
    grid-column: 1/3;
    grid-row: 2/3;
  }

  .back-end {
    grid-column: 2/4;
    grid-row: 3/4;
  }

  .other {
    grid-column: 1/3;
    grid-row: 4/5;
  }

  .title {
    font-size: var(--large-text);
    align-self: flex-end;
    text-align: center;
  }

  .tech-titles {
    margin: 0 14px;
  }

  .movingGlobe {
    position: absolute;
    top: calc(var(--mouseY) - 50px);
    left: calc(var(--mouseX) - 50px);
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background-color: rgb(var(--color) / 10%);
    animation: movingGlobe 2.5s forwards;
  }

  @keyframes movingGlobe {
    100% {
      transform: scale(calc(var(--size) * (var(--windowWidth) / 100)));
    }
  }

  @media (max-width: 950px) {
    .title {
      font-size: 30px;
    }
  }

  @media (max-width: 450px) {
    .title {
      font-size: 22px;
    }

    .base,
    .front-end,
    .back-end,
    .other {
      grid-column: 1/4;
    }

    .front-end,
    .other {
      text-align: start;
    }

    .back-end,
    .base {
      text-align: end;
    }

    .left-icons {
      align-self: flex-start;
    }

    .right-icons {
      align-self: flex-end;
    }
  }
</style>
