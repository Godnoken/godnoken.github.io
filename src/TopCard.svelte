<script lang="ts">
  import { fly } from "svelte/transition";
  import { sineInOut } from "svelte/easing";

  import { xIn, xOut, currentIndex } from "./stores";

  export let image;
  export let title: string;
  export let description: string;
  export let codeUrl: string;
  export let liveUrl: string;
  export let elementIndex: number;
</script>

{#if $currentIndex === elementIndex}
  <article
    in:fly={{ easing: sineInOut, duration: 600, x: $xIn }}
    out:fly={{ easing: sineInOut, duration: 600, x: $xOut }}
    class="top-card"
  >
    <picture class="img-container">
      <img src={image} alt="Book library" class="img" />
    </picture>
    <div class="content">
      <h1 class="title">{title}</h1>
      <p class="description">{@html description}</p>
      <div class="tech-stacks">
        <slot />
      </div>
      <div class="link-container">
        <a href={codeUrl} target="_blank" class="link">Code</a>
        <a href={liveUrl} target="_blank" class="link">Live</a>
      </div>
    </div>
  </article>
{/if}

<style>
  .top-card {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 80%;
    height: 85%;
    display: flex;
    margin: auto;
    border-radius: 10px;
    background-color: var(--secondary-color);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
      transition: 0.6s;
  }

  .img-container {
    height: 100%;
    width: 60%;
  }

  .img {
    height: calc(100% - 3px);
    width: 100%;
    object-fit: fill;
    border-radius: 10px 0 0 10px;
    transform: translateZ(0);
  }

  .content {
    width: 40%;
    display: grid;
    grid-template-rows: 1fr 3fr 0.5fr 1fr;
    row-gap: 18px;
    padding: 0 32px;
    color: var(--accent-color);
  }

  .description {
    overflow-y: scroll;
    border-bottom: 1px solid rgba(165, 165, 165, 0.767);
    padding: 6px;
  }

  .description::-webkit-scrollbar {
    width: 2px;
    background-color: transparent;
  }

  .description::-webkit-scrollbar-thumb {
    background: var(--accent-color);
  }

  .description::-webkit-scrollbar-track-piece {
    display: none;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
  }

  .tech-stacks {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 22px;
  }

  .link-container {
    display: flex;
    justify-content: space-around;
    user-select: none;
  }

  .link {
    width: 30%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid var(--accent-color) 1px;
    border-radius: 6px;
    font-size: 22px;
    text-decoration: none;
    color: var(--accent-color);
  }

  .link:hover {
    animation: moveButton 0.5s forwards;
  }

  @keyframes -global-moveButton {
    100% {
      transform: translateY(-5px);
    }
  }

  @media (max-height: 900px) {
    .content {
      padding: 0 16px;
      row-gap: 8px;
      font-size: 12px;
      line-height: 1.1;
    }

    .title {
      font-size: 20px;
    }

    .link {
      font-size: 14px;
    }
  }

  @media (min-width: 1900px) {
    .content {
      font-size: 22px;
    }
  }

  @media (max-width: 950px) {
    .top-card {
      width: 75%;
      height: 90%;
      margin: 16px auto auto;
      flex-direction: column;
    }

    .img-container {
      height: 40%;
      width: 100%;
    }

    .img {
      border-radius: 10px 10px 0 0;
    }

    .content {
      height: 60%;
      width: 100%;
      row-gap: 12px;
      padding-top: 14px;
      line-height: 1.1;
    }
  }

  @media (max-width: 450px) {
    .img-container {
      height: 25%;
    }

    .content {
      height: 75%;
      line-height: 1;
      row-gap: 6px;
      padding: 4px 12px 0;
      font-size: 14px;
    }

    :global(svg) {
      height: 15px;
      width: 15px;
    }
  }

  @media (max-width: 300px) {
    .content {
      font-size: 12px;
    }
  }
</style>
