<script lang="ts">
  import { scale } from "svelte/transition";

  import BottomCard from "./BottomCard.svelte";
  import { activeCard, windowWidth, mouseX, mouseY, darkMode } from "./stores";
  let title: string = "ME";
  let left: string = "50%";
  let color: string = "240 121 115";
  let zIndex: string;
  let handleActiveCard;
</script>

<BottomCard
  {title}
  {left}
  {zIndex}
  color={$darkMode ? color : "128 128 128"}
  bind:handleActiveCard
/>
{#if $activeCard === title}
  <div
    class="me-container"
    transition:scale={{ duration: 500 }}
    on:introstart={() => (zIndex = "2")}
    on:outroend={() => (zIndex = "0")}
    style="--mouseX: {$mouseX + 'px'}; --mouseY: {$mouseY + 'px'}; --bgColor: {$darkMode ? "#4b2624" : "whitesmoke"}"
  >
    <div class="content">
      <h1 class="title">Sebastian Öjefors</h1>
      <div class="inner-content">
        <p>Software developer. Gamer. The lad you want to have a beer with. Family guy. Globetrotter. Occasional fitness addict</p>
        <p>I'm from the great north, the land of vikings & fika. Hence 'Globetrotter' - I won't have an issue with relocating</p>
        <p>Strong believer in that anyone can accomplish anything with the right motivation. Offer me a good organization with good leaders and I will make your time more than worth it</p>
        <p>My greatest strength and weakness is attention to detail. To perfect, or not to perfect - that is the question</p>
        <p>I <u>LOVE</u> being creative with my work. You'll never see any of my projects looking like copies of eachother</p>
        <p>If you want a cheery, positive, close-to-laugh guy with strong work ethics and an unhealthy love for tech, I'm the one</p>
      </div>
      {#if $windowWidth < 950}
        <button on:click={handleActiveCard} class="go-back">Go back</button>
      {/if}
    </div>

    {#each { length: 5 } as _, i}
      <div
        class="movingGlobe"
        style="--size: {i + 1}; --color: {$darkMode ? color : "180 180 180"}; --windowWidth: {$windowWidth}"
      />
    {/each}
  </div>
{/if}

<style>
  .me-container {
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
    transition: background-color 0.6s;
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
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-self: center;
    row-gap: 40px;
    border-radius: 10px;
    padding: 10px 140px;
    font-size: var(--medium-text);
    overflow-y: auto;
  }

  p {
    margin: auto 0;
  }

  .title {
    font-size: var(--large-text);
    align-self: flex-end;
    text-align: center;
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

  .inner-content::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
  }

  .inner-content::-webkit-scrollbar-thumb {
    background: var(--accent-color);
  }

  .inner-content::-webkit-scrollbar-track-piece {
    display: none;
  }

  @keyframes movingGlobe {
    100% {
      transform: scale(calc(var(--size) * (var(--windowWidth) / 100)));
    }
  }

  @media (min-width: 2600px) {
    .inner-content {
      padding: 10px 400px;
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

    .inner-content {
      padding: 10px 30px;
      font-size: 18px;
    }
  }
</style>
