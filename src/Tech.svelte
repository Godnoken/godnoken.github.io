<script lang="ts">
  import { scale } from "svelte/transition";

  import BottomCard from "./BottomCard.svelte";
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
  color={$darkMode ? color : "0 0 0"}
  bind:handleActiveCard
/>
{#if $activeCard === title}
  <div
    class="tech-container"
    transition:scale={{ duration: 500 }}
    on:introstart={() => (zIndex = "2")}
    on:outroend={() => (zIndex = "0")}
    style="--mouseX: {$mouseX + 'px'}; --mouseY: {$mouseY + 'px'}; --bgColor: {$darkMode ? "#182c28" : "whitesmoke"}"
  >
    <div class="content">
      <h1 class="title">Tech I have used</h1>
      {#if $windowWidth < 950}
        <button on:click={handleActiveCard} class="go-back">Go back</button>
      {/if}
    </div>

    {#each { length: 5 } as _, i}
      <div
        class="movingGlobe"
        style="--size: {i + 1}; --color: {$darkMode ? color : "0 0 0"}; --windowWidth: {$windowWidth}"
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
  }

  .content {
    height: 80%;
    width: 65%;
    display: flex;
    justify-content: center;
    margin: auto;
    color: var(--accent-color);
    z-index: 1;
  }

  .title {
    font-size: 48px;
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
</style>