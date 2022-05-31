<script lang="ts">
    import { activeCard } from "./stores";

	export let title: string;
    export let left: string = "auto";
    export let right: string = "auto";
    export let zIndex: string = "0";
    export let color: string;
    let moveGlobe: boolean = false;

    function handleCardHover() {
        moveGlobe = !moveGlobe;
    }

    function handleGlobeHover() {
        if ($activeCard === "none") {
            activeCard.update(card => card = title);
        }
        else if ($activeCard === title && zIndex === "2") {
            activeCard.update(card => card = "none");
        }

    }
</script>

<article
    class="bottom-card"
    on:mouseenter={handleCardHover}
    on:mouseleave={handleCardHover}
    style="
        --right: {right};
        --left: {left};
        --zIndex: {zIndex};
        --color: {color};
        "
    >
	<p class="title">{title}</p>
    <div class="hover-globes" on:mouseenter={handleGlobeHover}>
        <div class="big-globe" class:move-globe={moveGlobe} class:pause-globe={!moveGlobe}></div>
        <div class="medium-globe" class:move-globe={moveGlobe} class:pause-globe={!moveGlobe}></div>
        <div class="small-globe" class:move-globe={moveGlobe} class:pause-globe={!moveGlobe}></div>
    </div>
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
        background-color: #171717;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
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
        color: rgb(var(--color));
        user-select: none;
    }

    @keyframes pulseGlobe {
        0% {
            transform: scale(1)
        }
        50% {
            transform: scale(1.1)
        }
        100% {
            transform: scale(1)
        }
    }
</style>