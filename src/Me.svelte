<script lang="ts">
  import { scale } from "svelte/transition";

  import BottomCard from "./BottomCard.svelte";
  import { activeCard } from "./stores";
  let title: string = "Me";
  let left: string = "50%";
  let color: string = "255 0 34"
  let zIndex: string;
</script>

<BottomCard {title} {left} {zIndex} {color}/>
{#if $activeCard === title}
  <div
    class="me-container"
    transition:scale={{ duration: 500 }}
    on:introstart={() => (zIndex = "2")}
    on:outroend={() => (zIndex = "0")}
  >
  {#each {length: 4} as _, i}
    <div class="movingGlobe" style="--size: {i + 1}; --color: {color}"></div>
  {/each}
  </div>
{/if}

<style>
  .me-container {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background-color: #72001c;
    transform-origin: 50% 100%;
    overflow: hidden;
    z-index: 1;
  }

  .movingGlobe {
    position: absolute;
    bottom: 0;
    left: calc(50% - 50px);
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background-color: rgb(var(--color) / 10%);
    animation: movingGlobe 2.5s forwards;
  }

  @keyframes movingGlobe {
        100% {
            transform: scale(calc(var(--size) * 10));
        }
    }
</style>
