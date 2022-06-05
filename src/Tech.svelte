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
    style="--mouseX: {$mouseX + 'px'}; --mouseY: {$mouseY +
      'px'}; --bgColor: {$darkMode ? '#182c28' : 'whitesmoke'}"
  >
    <div class="content">
      <h1 class="title">Tech I have used</h1>
      <div class="inner-content">
        <div class="top box">
          <h2>Base</h2>
          <div class="icon-container">
            <a
              title="HTML"
              href="https://en.wikipedia.org/wiki/HTML#:~:text=The%20HyperText%20Markup%20Language%20or,(HyperText%20Markup%20Language)"
              ><img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML"
                class="icon"
              /></a
            >
            <a title="CSS" href="https://en.wikipedia.org/wiki/CSS"
              ><img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS"
                class="icon"
              /></a
            >
            <a
              title="JavaScript"
              href="https://en.wikipedia.org/wiki/JavaScript"
              ><img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                class="icon"
              /></a
            >
            <a title="TypeScript" href="https://www.typescriptlang.org/"
            ><img
              class="icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
              alt="TypeScript"
            /></a
          >
            <a
              title="C"
              href="https://en.wikipedia.org/wiki/C_(programming_language)#:~:text=C%20is%20an%20imperative%20procedural,all%20with%20minimal%20runtime%20support."
              ><img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
                alt="C"
                class="icon"
              /></a
            >
            <a
              title="C#"
              href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)"
              ><img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                alt="C#"
                class="icon"
              /></a
            >
          </div>
        </div>
        <div class="middle-first box">
          <h2>Front-end</h2>
          <div class="icon-container">
            <a title="TailwindCSS" href="https://tailwindcss.com/"
              ><img
                class="icon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                alt="TailwindCSS"
              /></a
            >
            <a title="React" href="https://reactjs.org/"
              ><img
                class="icon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
              /></a
            >
            <a title="Angular" href="https://angular.io/"
              ><img
                class="icon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
                alt="Angular"
              /></a
            >
            <a title="SASS" href="https://sass-lang.com/"
              ><img
                class="icon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                alt="SASS"
              /></a
            >
          </div>
        </div>
        <div class="middle-second box">
          <h2>Back-end</h2>
          <div class="icon-container">
            <a title="Firebase" href="https://firebase.google.com/"
              ><img
                class="icon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                alt="Firebase"
              /></a
            >
            <a title="MongoDB" href="https://www.mongodb.com/"
              ><img
                class="icon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                alt="MongoDB"
              /></a
            >
            <a title="SocketIO" href="https://socket.io/"
              ><img
                class="icon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg"
                alt="SocketIO"
              /></a
            >
            <a title="NodeJS" href="https://nodejs.org/en/"
              ><img
                class="icon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                alt="NodeJS"
              /></a
            >
            <a title="Express" href="https://expressjs.com/"
              ><img
                class="icon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                alt="Express"
              /></a
            >
          </div>
        </div>
        <div class="bottom box">
          <h2>Other</h2>
          <div class="icon-container">
            <a title="Figma" href="https://www.figma.com/"
              ><img
                class="icon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                alt="Figma"
              /></a
            >
            <a title="Git" href="https://git-scm.com/"
              ><img
                class="icon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                alt="Git"
              /></a
            >
            <a title="Webpack" href="https://webpack.js.org/"
              ><img
                class="icon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"
                alt="Webpack"
              /></a
            >
            <a title="VSCode" href="https://code.visualstudio.com/"
              ><img
                class="icon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"
                alt="VSCode"
              /></a
            >
            <a title="NPM" href="https://www.npmjs.com/"
              ><img
                class="icon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                alt="NPM"
              /></a
            >
            <a title="Unity" href="https://unity.com/"
              ><img
                class="icon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
                alt="Unity"
              /></a
            >
          </div>
        </div>
      </div>
      {#if $windowWidth < 950}
        <button on:click={handleActiveCard} class="go-back">Go back</button>
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
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 38px;
    color: var(--accent-color);
    z-index: 1;
  }

  .inner-content {
    height: 100%;
    width: 100%;
    margin: 30px 0 150px;
    display: grid;
    row-gap: 16px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }

  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 14px;
    margin: 0 18px;
    text-align: center;
    font-size: 14px;
  }

  .icon-container {
    display: flex;
    justify-content: center;
    column-gap: 12px;
    padding: 10px 0;
    border-radius: 12px;
    background-color: #f1f1f1;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }

  .icon {
    width: 40px;
  }

  .top {
    grid-column: 2/4;
  }

  .middle-first {
    grid-column: 1/3;
    grid-row: 2/3;
  }

  .middle-second {
    grid-column: 2/4;
    grid-row: 3/4;
  }

  .bottom {
    grid-column: 1/3;
    grid-row: 4/5;
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

  @media (max-width: 450px) {
    .content {
      margin-top: 28px;
    }

    .icon {
      width: 25px;
    }

    .top,
    .middle-first,
    .middle-second,
    .bottom {
      grid-column: 1/4;
    }

    .middle-first {
      text-align: start;
    }

    .middle-second {
      text-align: end;
    }
  }
</style>
