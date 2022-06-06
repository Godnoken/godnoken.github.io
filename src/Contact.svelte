<script lang="ts">
  import { scale, fly } from "svelte/transition";
  import { sineInOut } from "svelte/easing";
  import { sendForm, init } from "emailjs-com";

  import BottomCard from "./BottomCard.svelte";
  import { activeCard, windowWidth, mouseX, mouseY, darkMode } from "./stores";
  let title: string = "CONTACT";
  let left: string = "0px";
  let color: string = "133 240 127";
  let zIndex: string;
  let messageDelivered = null;
  let handleActiveCard;

  init("user_AGoFRucRZPXNbAoZ3aGIk");

  const handleSubmit = (event) => {
    event.preventDefault();

    sendForm("service_0w03a0b", "template_yja7krc", event.target).then(
      (result) => {
        console.log(result.text);

        messageDelivered = true;
        setTimeout(() => {
          messageDelivered = null;
        }, 2000);
      },
      (error) => {
        console.log(error.text);

        messageDelivered = false;
        setTimeout(() => {
          messageDelivered = null;
        }, 2000);
      }
    );

    event.target.reset();
  };
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
    class="contact-container"
    transition:scale={{ duration: 500 }}
    on:introstart={() => (zIndex = "2")}
    on:outroend={() => (zIndex = "0")}
    style="--mouseX: {$mouseX + 'px'}; --mouseY: {$mouseY +
      'px'}; --bgColor: {$darkMode ? '#203a1e' : 'whitesmoke'}"
  >
    <div class="content">
      <h1 class="title">Contact Me</h1>
      <form on:submit={handleSubmit} class="contact-form">
        <div class="top-form">
          <div class="input-container">
            <label for="name">Name</label>
            <input class="input" type="text" name="name" id="name" />
          </div>
          <div class="input-container">
            <label for="email">Email</label>
            <input
              class="input"
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
        </div>
        <div class="bottom-form">
          <div class="input-container">
            <label for="message">Message</label>
            <textarea
              class="input message"
              name="message"
              id="message"
              required
              minlength="10"
            />
          </div>
          <input class="send-button" type="submit" value="Send" />
        </div>
      </form>
      {#if $windowWidth < 950}
        <button on:click={handleActiveCard} class="go-back">Go back</button>
      {/if}
      {#if messageDelivered}
        <div
          transition:fly={{
            duration: 1000,
            x: $windowWidth,
            easing: sineInOut,
          }}
          class="message-delivery"
        >
          Message delivered!
        </div>
      {:else if messageDelivered === false}
        <div
          transition:fly={{
            duration: 1000,
            x: $windowWidth,
            easing: sineInOut,
          }}
          class="message-delivery"
        >
          Error..
        </div>
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
  .contact-container {
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

  .contact-form {
    display: grid;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    row-gap: 10px;
    text-align: center;
    font-size: 28px;
    font-weight: bold;
    color: var(--accent-color);
  }

  .input, .message {
    width: 500px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    column-gap: 12px;
    padding: 10px 24px;
    border-radius: 12px;
    background-color: var(--secondary-color);
    color: var(--accent-color);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
      transition: 0.6s;
  }

  .top-form {
    grid-area: 1;
    width: 100%;
    display: flex;
    justify-content: space-around;
    row-gap: 10px;
  }

  .bottom-form {
    grid-area: 2;
    display: grid;
    grid-template-rows: 1.8fr 1fr;
  }

  .message {
    min-height: 60px;
    min-width: 600px;
    border-radius: 12px 0 0 12px;
    overflow-y: scroll;
    resize: none;
  }

  .message::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
  }

  .message::-webkit-scrollbar-thumb {
    background: var(--accent-color);
  }

  .message::-webkit-scrollbar-track-piece {
    display: none;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px var(--secondary-color) inset !important;
    transition: background-color 5000s ease-in-out 0s;
  }

  input:-webkit-autofill {
    -webkit-text-fill-color: var(--accent-color) !important;
  }

  .send-button {
    width: max-content;
    justify-self: center;
    column-gap: 12px;
    padding: 10px 24px;
    border-radius: 12px;
    background-color: var(--secondary-color);
    font-weight: bold;
    color: var(--accent-color);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    transition: box-shadow 0.15s, background-color 0.6s;
  }

  .send-button:active {
    box-shadow: none;
  }

  .title {
    font-size: 48px;
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

  .message-delivery {
    position: absolute;
    height: max-content;
    width: max-content;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    padding: 20px 30px;
    background-color: var(--secondary-color);
    color: var(--accent-color);
    border: 3px solid var(--accent-color);
    border-radius: 6px;
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

    .top-form {
      flex-direction: column;
    }
  }

  @media (max-width: 650px) {
    .input-container {
      font-size: 20px;
    }

    .input {
      min-width: 240px;
      width: 240px;
      height: 60px;
      font-size: 12px;
    }

    .message {
      min-height: 40px;
    }
  }

  @media (max-width: 450px) {
    .title {
      font-size: 22px;
    }
  }
</style>
