<script lang="ts">
    import { fly } from "svelte/transition";
    import { sineInOut } from "svelte/easing";

    import { xIn, xOut, currentIndex } from "./stores";

    export let bgColor: string;
    export let image: string;
    export let title: string;
    export let description: string;
    export let codeUrl: string;
    export let liveUrl: string;
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
        border-radius: 10px 0 0 10px;
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
        border: solid white 3px;
        border-radius: 6px;
        font-size: 22px;
        text-decoration: none;
	    color: white;
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
            border: 1px solid white;
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

        .link {
            border: 1px solid white;
        }
    }

    @media (max-width: 450px) {
        .top-card {
            
        }

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