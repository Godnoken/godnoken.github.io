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
  color={$darkMode ? color : "0 0 0"}
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
      <div class="top">
        <h1 class="title">Contact Me</h1>
        <div class="icon-container">
          <a
            href="https://www.codewars.com/users/Godnoken"
            title="Codewars"
            target="_blank"
          >
            <svg
              class="codewars-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              ><path
                d="M1 .1a1 1 0 0 0-1 1.1v21.6a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V1.2a1 1 0 0 0-1-1zM10.9 2a.9.9 0 0 1 .8.5.8.8 0 0 1 1.3.5.6.6 0 0 1 .3 0c.3 0 .6.2.6.5a1.3 1.3 0 0 1 .6-.5 1.3 1.3 0 0 1 1.8.7 1.1 1.1 0 0 1 .3-.2 1.1 1.1 0 0 1 1.5.4 1 1 0 0 1 0 .5 1 1 0 0 1 1.4 1.2.9.9 0 0 1 .9 1.5.8.8 0 0 1 .1 1.3.6.6 0 0 1 .2.2.6.6 0 0 1 0 .7 1.3 1.3 0 0 1 .5.2 1.3 1.3 0 0 1 .3 1.8 1.1 1.1 0 0 1 .3.2 1.1 1.1 0 0 1 .4 1.5 1 1 0 0 1-.4.3 1 1 0 0 1 .2 1.4 1 1 0 0 1-.6.4.9.9 0 0 1-.8 1.5.8.8 0 0 1-1 .8.6.6 0 0 1-.2.3.6.6 0 0 1-.4.3 1.3 1.3 0 0 1 0 .4 1.3 1.3 0 0 1-1.4 1.2 1.1 1.1 0 0 1 0 .4 1.1 1.1 0 0 1-1 1 1.1 1.1 0 0 1-.5 0 1 1 0 0 1-1.7.5.9.9 0 0 1-1.7.1.8.8 0 0 1-1.3-.5.6.6 0 0 1-.3 0 .6.6 0 0 1-.6-.5 1.3 1.3 0 0 1-.6.5 1.3 1.3 0 0 1-1.8-.7 1.1 1.1 0 0 1-.3.2 1.1 1.1 0 0 1-1.4-.4 1 1 0 0 1-.2-.5 1 1 0 0 1-1.3-1.2A.9.9 0 0 1 4 17a.8.8 0 0 1-.1-1.3.6.6 0 0 1-.2-.3.6.6 0 0 1 0-.6 1.3 1.3 0 0 1-.5-.2 1.3 1.3 0 0 1-.3-1.8 1.1 1.1 0 0 1-.3-.2 1.1 1.1 0 0 1-.3-1.5 1 1 0 0 1 .3-.3A1 1 0 0 1 3 9a.9.9 0 0 1 .8-1.5.8.8 0 0 1 1-.8.6.6 0 0 1 .2-.3.6.6 0 0 1 .4-.3 1.3 1.3 0 0 1 0-.4 1.3 1.3 0 0 1 1.4-1.2 1.1 1.1 0 0 1 0-.4 1.1 1.1 0 0 1 1-1 1 1 0 0 1 .6 0 1 1 0 0 1 1.7-.5.9.9 0 0 1 .8-.6zM3.7 7.5zm13.8 12.1zm-3.7-16zm-2.3-.1a.9.9 0 0 1-.7.3.9.9 0 0 1-.6-.3 1 1 0 0 1-1 .8 1 1 0 0 1-.3-.1 1.1 1.1 0 0 1-1.1 1 1.3 1.3 0 0 1 .1.8 1.3 1.3 0 0 1-.7 1 1.1 1.1 0 0 1 .3.8 1.1 1.1 0 0 1-.2.7c.3.1.5.5.5.9a1 1 0 0 1 0 .3 1 1 0 0 1 .7 1 .7.7 0 0 1 .2 0c.3 0 .6.3.7.6a.7.7 0 0 1 .4 0c.3 0 .5.2.6.4a.4.4 0 0 1 .4 0 1.4 1.4 0 0 1 .3-.6.4.4 0 0 1-.1-.1.4.4 0 0 1 0-.4.7.7 0 0 1-.4-1.2.7.7 0 0 1-.3-.3.7.7 0 0 1 .4-1 1 1 0 0 1-.3-.3 1 1 0 0 1 .6-1.3 1 1 0 0 1 .5-1.3A1 1 0 0 1 12 5a1.1 1.1 0 0 1 .6-1 .6.6 0 0 1 0-.2.8.8 0 0 1-.5 0 .8.8 0 0 1-.6-.3zM16 5a1.3 1.3 0 0 1-.6.5 1.3 1.3 0 0 1-1.2-.2 1.1 1.1 0 0 1-.6.7 1.1 1.1 0 0 1-.6 0 1 1 0 0 1-.6 1 1 1 0 0 1-.3 0 1 1 0 0 1-.5 1.2 1 1 0 0 1 0 .1.7.7 0 0 1 0 .1.7.7 0 0 1-.2 1 .7.7 0 0 1 .3.2.7.7 0 0 1-.1.8.4.4 0 0 1 .1.2 1.4 1.4 0 0 1 .7 0 .4.4 0 0 1 .4-.3.7.7 0 0 1 .8-.8.7.7 0 0 1 .1-.5.7.7 0 0 1 1-.2 1 1 0 0 1 .2-.3 1 1 0 0 1 1.2-.3 1 1 0 0 1 .2.1 1 1 0 0 1 1.4-.3 1 1 0 0 1 .4.4c.4-.2.8-.2 1.2 0a1.1 1.1 0 0 1 .2.2.6.6 0 0 1 .1-.1.8.8 0 0 1-.3-.3.8.8 0 0 1 0-.8.9.9 0 0 1-.5-.5.9.9 0 0 1-.1-.6 1 1 0 0 1-1.1-.5 1 1 0 0 1-.1-.4A1.1 1.1 0 0 1 16 5zM5.2 7.4a.8.8 0 0 1 0 .4.8.8 0 0 1-.8.4v.7a.9.9 0 0 1-.6.4c.3.3.4.8.2 1.2a1 1 0 0 1-.3.3 1.1 1.1 0 0 1 .3 1.4 1.3 1.3 0 0 1 .7.3 1.3 1.3 0 0 1 .6 1.2c.2-.1.5 0 .8.1a1.1 1.1 0 0 1 .4.5 1 1 0 0 1 1 0 1 1 0 0 1 .3.3 1 1 0 0 1 1.3-.2.7.7 0 0 1 .1 0 .7.7 0 0 1 .9-.4.7.7 0 0 1 .1-.4.7.7 0 0 1 .8-.2.4.4 0 0 1 .2-.4 1.4 1.4 0 0 1-.4-.5.4.4 0 0 1-.2 0 .4.4 0 0 1-.3-.2.7.7 0 0 1-1.2-.2.7.7 0 0 1-.4.1.7.7 0 0 1-.8-.7 1 1 0 0 1-.3 0 1 1 0 0 1-.9-1.1 1 1 0 0 1-1-1 1 1 0 0 1 .2-.6 1.1 1.1 0 0 1-.6-1 1.1 1.1 0 0 1 0-.4zm11.2 2.1a1 1 0 0 1-1.2.2 1 1 0 0 1-.2 0 .7.7 0 0 1-.9.4.7.7 0 0 1 0 .4.7.7 0 0 1-.8.3.4.4 0 0 1-.1.2 1.4 1.4 0 0 1 .2.6.4.4 0 0 1 .2 0 .4.4 0 0 1 .4.2.7.7 0 0 1 1 .2.7.7 0 0 1 .6-.1c.4 0 .7.3.7.7a1 1 0 0 1 .3 0 1 1 0 0 1 .9.9 1 1 0 0 1 0 .2c.5 0 1 .5 1 1a1 1 0 0 1-.2.6 1.1 1.1 0 0 1 .6 1 1.1 1.1 0 0 1 0 .4.8.8 0 0 1 .2-.4.8.8 0 0 1 .7-.4.9.9 0 0 1 0-.7.9.9 0 0 1 .6-.4 1 1 0 0 1-.1-1.2 1 1 0 0 1 .2-.3 1.1 1.1 0 0 1-.3-1.4 1.3 1.3 0 0 1-.7-.3 1.3 1.3 0 0 1-.5-1.2 1 1 0 0 1-.9-.1 1.1 1.1 0 0 1-.4-.5 1 1 0 0 1-1 0 1 1 0 0 1-.3-.3zm-.1 3.1zm-2.9-.2a1.4 1.4 0 0 1-.3.6.4.4 0 0 1 .1.1.4.4 0 0 1 0 .4.7.7 0 0 1 .4 1.2.7.7 0 0 1 .3.3.7.7 0 0 1-.3 1 1 1 0 0 1 .2.2 1 1 0 0 1-.4 1.3 1 1 0 0 1-.2 0 1 1 0 0 1-.5 1.4 1 1 0 0 1-.5.1 1.1 1.1 0 0 1-.7 1.1.6.6 0 0 1 .1.2.8.8 0 0 1 .5 0 .8.8 0 0 1 .7.3.9.9 0 0 1 .6-.3.9.9 0 0 1 .6.3 1 1 0 0 1 1-.8 1 1 0 0 1 .4.1 1.1 1.1 0 0 1 1-1 1.3 1.3 0 0 1-.1-.8c0-.4.3-.8.7-1a1.1 1.1 0 0 1-.3-.8 1.1 1.1 0 0 1 .2-.7 1 1 0 0 1-.4-1.2 1 1 0 0 1-.8-1 .7.7 0 0 1-.2 0 .7.7 0 0 1-.7-.6.7.7 0 0 1-.4 0 .7.7 0 0 1-.6-.4.4.4 0 0 1-.2 0 .4.4 0 0 1-.2 0zm-1 .9a1.4 1.4 0 0 1-.3 0h-.3a.4.4 0 0 1 0 .3.4.4 0 0 1-.4.2.7.7 0 0 1-.8.8.7.7 0 0 1-.1.5.7.7 0 0 1-1 .2 1 1 0 0 1-.2.3 1 1 0 0 1-1.2.3 1 1 0 0 1-.2-.1 1 1 0 0 1-1.4.3 1 1 0 0 1-.4-.4c-.3.2-.8.2-1.2 0a1.1 1.1 0 0 1-.2-.2.7.7 0 0 1 0 .1.8.8 0 0 1 .2.3.8.8 0 0 1 0 .8.9.9 0 0 1 .6.5.9.9 0 0 1 0 .6 1 1 0 0 1 1.2.5 1 1 0 0 1 0 .4 1.1 1.1 0 0 1 1.5.4 1.3 1.3 0 0 1 .6-.5c.4-.1.9 0 1.2.2a1.1 1.1 0 0 1 .6-.7 1.1 1.1 0 0 1 .7 0 1 1 0 0 1 .5-1 1 1 0 0 1 .3 0 1 1 0 0 1 .5-1.3 1 1 0 0 1 .1 0 .7.7 0 0 1 0-.1.7.7 0 0 1 0-1 .7.7 0 0 1-.2-.2.7.7 0 0 1 .2-.8.4.4 0 0 1-.2-.2.4.4 0 0 1 0-.2z"
              /></svg
            >
          </a>
          <a
            href="mailto: sebastian.ojefors@gmail.com"
            title="Email"
            target="_blank"
          >
            <svg viewBox="0 0 24 24">
              <path
                d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
              />
            </svg>
          </a>
          <a href="https://github.com/Godnoken" title="Github" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"
              ><g fill="#181616"
                ><path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M64 5a60 60 0 0 0-19 118c3 0 4-2 4-3v-11c-17 3-20-7-20-7-3-7-7-9-7-9-6-4 0-4 0-4 6 0 10 6 10 6 5 9 14 7 17 5l4-8c-13-1-28-7-28-30 0-6 3-12 7-16-1-1-3-8 0-16 0 0 5-1 17 6a58 58 0 0 1 30 0c12-7 17-6 17-6 3 8 1 15 0 16 4 4 7 10 7 16 0 24-15 29-28 30 2 2 4 6 4 11v17c0 1 1 3 4 3A60 60 0 0 0 64 5z"
                /><path
                  d="M26 92h-1v-1h1v1zm3 3-1-1v-1h1v2zm2 3-1-1v-1l1 1v1zm4 3h-2v-1h1l1 1zm4 2-1 1-1-1 1-1 1 1zm5 1-1 1-2-1 2-1 1 1zm5-1-2 1-1-1 1-1 2 1zm0 0"
                /></g
              ></svg
            >
          </a>
        </div>
      </div>
      <form on:submit={handleSubmit} class="contact-form">
        <div class="top-form">
          <div class="input-container">
            <label for="name">Name</label>
            <input class="input" type="text" name="name" id="name" />
          </div>
          <div class="input-container">
            <label for="email">Email</label>
            <input class="input" type="email" name="email" id="email" required/>
          </div>
        </div>
        <div class="bottom-form">
          <div class="input-container">
            <label for="message">Message</label>
            <textarea class="input message" name="message" id="message" required minlength="10"/>
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
          : '0 0 0'}; --windowWidth: {$windowWidth}"
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
  }

  .content {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 1.5fr 5fr 1fr;
    row-gap: 18px;
    color: var(--accent-color);
    z-index: 1;
  }

  .top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 18px;
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
    font-size: 20px;
    font-weight: bold;
    color: var(--accent-color);
  }

  .input {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    column-gap: 12px;
    padding: 10px 24px;
    border-radius: 12px;
    background-color: #f1f1f1;
    color: black;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }

  .top-form {
    grid-area: 1;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .bottom-form {
    grid-area: 2;
    display: grid;
    grid-template-rows: 3fr 1fr;
  }

  .message {
    min-height: 60px;
    min-width: 600px;
    overflow-y: scroll;
    border-bottom-right-radius: 0;
  }

  .message::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
  }

  .message::-webkit-scrollbar-thumb {
    background: black;
  }

  .message::-webkit-scrollbar-track-piece {
    display: none;
  }

  .send-button {
    width: max-content;
    justify-self: center;
    column-gap: 12px;
    padding: 10px 24px;
    border-radius: 12px;
    background-color: #f1f1f1;
    font-weight: bold;
    color: black;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }

  .title {
    font-size: 48px;
  }

  .icon-container {
    display: flex;
    justify-content: center;
    align-self: center;
    column-gap: 12px;
    padding: 10px 24px;
    border-radius: 12px;
    background-color: #f1f1f1;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }

  .codewars-svg {
    fill: black;
    border-radius: 100%;
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

  @media (max-width: 450px) {
    .input {
      min-width: 240px;
      width: 240px;
      font-size: 12px;
    }

    .message {
      min-height: 40px;
    }
  }
</style>
