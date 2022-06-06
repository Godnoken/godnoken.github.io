<script lang="ts">
  import { activeCard, windowWidth, mouseX, mouseY } from "./stores";

  export let title: string;
  export let left: string = "auto";
  export let right: string = "auto";
  export let zIndex: string = "0";
  export let color: string;

  let moveGlobe: boolean = false;

  function handleCardHover() {
    moveGlobe = !moveGlobe;
  }

  export function handleActiveCard(event) {
    $mouseX = event.x;
    $mouseY = event.y;

    if ($activeCard === "none") {
      activeCard.update((card) => (card = title));
    } else if ($activeCard === title && zIndex === "2") {
      activeCard.update((card) => (card = "none"));
    }
  }
</script>

<article
  class="bottom-card"
  on:mouseenter={handleCardHover}
  on:mouseleave={handleCardHover}
  on:click={handleActiveCard}
  style="
        --right: {right};
        --left: {left};
        --zIndex: {zIndex};
        --color: {color};
        "
>
  <p class="title">{title}</p>
  {#if $windowWidth > 950}
    <div class="hover-globes" on:mouseenter={handleActiveCard}>
      <div
        class="big-globe"
        class:move-globe={moveGlobe}
        class:pause-globe={!moveGlobe}
      />
      <div
        class="medium-globe"
        class:move-globe={moveGlobe}
        class:pause-globe={!moveGlobe}
      />
      <div
        class="small-globe"
        class:move-globe={moveGlobe}
        class:pause-globe={!moveGlobe}
      />
    </div>
  {/if}
</article>

<style>
  .bottom-card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 14px;
    border-radius: 10px;
    overflow: hidden;
    background-color: var(--secondary-color);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    cursor: pointer;
    transition: 0.6s;
  }

  .hover-globes {
    cursor: pointer;
  }

  .small-globe {
    --size: 20%;
    position: absolute;
    bottom: calc(0px - 10%);
    left: calc(var(--left) - var(--size) / 2);
    right: calc(var(--right) - var(--size) / 2);
    width: var(--size);
    height: var(--size);
    border-radius: 100%;
    background-color: rgb(var(--color) / 80%);
    z-index: var(--zIndex);
  }

  .medium-globe {
    --size: 30%;
    position: absolute;
    bottom: calc(0px - 15%);
    left: calc(var(--left) - var(--size) / 2);
    right: calc(var(--right) - var(--size) / 2);
    width: var(--size);
    height: var(--size);
    border-radius: 100%;
    background-color: rgb(var(--color) / 60%);
    z-index: var(--zIndex);
  }

  .big-globe {
    --size: 40%;
    position: absolute;
    bottom: calc(0px - 20%);
    left: calc(var(--left) - var(--size) / 2);
    right: calc(var(--right) - var(--size) / 2);
    width: var(--size);
    height: var(--size);
    border-radius: 100%;
    background-color: rgb(var(--color) / 40%);
    z-index: var(--zIndex);
  }

  .move-globe {
    animation: pulseGlobe 0.9s infinite ease-in-out;
  }

  .pause-globe {
    animation: pulseGlobe 0.9s infinite ease-in-out paused;
  }

  .title {
    font-size: 48px;
    font-weight: 1000;
    color: rgb(var(--color));
    user-select: none;
  }

  :global(.go-back) {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    justify-self: center;
    border: solid var(--accent-color) 3px;
    border-radius: 6px;
    font-size: 34px;
    color: var(--accent-color);
  }

  :global(.go-back:hover) {
    animation: moveButton 0.5s forwards;
  }

  @keyframes pulseGlobe {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  @media (max-width: 950px) {
    .bottom-card {
      height: 85%;
      margin: 0;
      align-self: center;
    }

    .title {
      font-size: 20px;
    }

    :global(.go-back) {
      width: 80%;
    }
  }
</style>
