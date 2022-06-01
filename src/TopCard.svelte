<script lang="ts">
    import { fly } from "svelte/transition";
    import { sineInOut } from "svelte/easing";

    import { xIn, xOut, currentIndex } from "./stores";

    export let bgColor: string;
    export let image: string;
    export let title: string;
    export let description: string;
    export let elementIndex: number;
</script>

{#if $currentIndex === elementIndex}
<article
    in:fly={{ easing: sineInOut, duration: 1000, x: $xIn }}
    out:fly={{ easing: sineInOut, duration: 1000, x: $xOut }}
    class="top-card"
    style="
        --bgColor: {bgColor}
    "
>
    <figure class="img-container">
        <img src={image} alt="" class="img"/>
    </figure>
    <div class="content">
        <h1 class="title">{title}</h1>
        <p class="description">{@html description}</p>
        <div class="tech-stacks">
            <slot></slot>
        </div>
        <div class="link-container">
            <a href="" target="_blank" class="link">Code</a>
            <a href="" target="_blank" class="link">Live</a>
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
        background-color: var(--bgColor);
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }

    .img-container {
        height: 100%;
        width: 60%;
    }

    .img {
        height: 100%;
        width: 100%;
        object-fit: fill;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
    }

    .content {
        width: 40%;
        display: grid;
        grid-template-rows: 1fr 3fr 0.5fr 1fr;
        row-gap: 18px;
        padding: 0 32px;
        color: white;
    }

    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 32px;
    }

    .description {
        font-family: 'Montserrat', sans-serif;
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
        font-family: 'Montserrat', sans-serif;
        width: 30%;
        height: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: solid white 3px;
        border-radius: 6px;
        font-size: 22px;
        text-decoration: none;
	    color: white;
    }

    .link:hover {
        animation: moveButton 0.5s forwards;
    }

    @keyframes moveButton {
        100% {
            transform: translateY(-5px);
        }
    }
</style>