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
  color={$darkMode ? color : "128 128 128"}
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
        <div class="base box">
          <h2 class="tech-titles">Base</h2>
          <div class="icon-container right-icons">
            <a
              title="HTML"
              href="https://en.wikipedia.org/wiki/HTML#:~:text=The%20HyperText%20Markup%20Language%20or,(HyperText%20Markup%20Language)"
              target="_blank"
              ><img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML"
                class="big-icon icon-hover"
              /></a
            >
            <a
              title="CSS"
              href="https://en.wikipedia.org/wiki/CSS"
              target="_blank"
              ><img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS"
                class="big-icon icon-hover"
              /></a
            >
            <a
              title="JavaScript"
              href="https://en.wikipedia.org/wiki/JavaScript"
              target="_blank"
              ><img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                class="big-icon icon-hover"
              /></a
            >
            <a
              title="TypeScript"
              href="https://www.typescriptlang.org/"
              target="_blank"
              ><img
                class="big-icon icon-hover"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                alt="TypeScript"
              /></a
            >
            <a
              target="_blank"
              title="C"
              href="https://en.wikipedia.org/wiki/C_(programming_language)#:~:text=C%20is%20an%20imperative%20procedural,all%20with%20minimal%20runtime%20support."
              ><img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
                alt="C"
                class="big-icon icon-hover"
              /></a
            >
            <a
              title="C#"
              href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)"
              target="_blank"
              ><img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                alt="C#"
                class="big-icon icon-hover"
              /></a
            >
          </div>
        </div>
        <div class="front-end box">
          <h2 class="tech-titles">Front-end</h2>
          <div class="icon-container left-icons">
            <a
              title="TailwindCSS"
              href="https://tailwindcss.com/"
              target="_blank"
              ><img
                class="big-icon icon-hover"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                alt="TailwindCSS"
              /></a
            >
            <a title="React" href="https://reactjs.org/" target="_blank"
              ><img
                class="big-icon icon-hover"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
              /></a
            >
            <a title="Angular" href="https://angular.io/" target="_blank"
              ><img
                class="big-icon icon-hover"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
                alt="Angular"
              /></a
            >
            <a title="SASS" href="https://sass-lang.com/" target="_blank"
              ><img
                class="big-icon icon-hover"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                alt="SASS"
              /></a
            >
            <a title="PUG" href="https://pugjs.org/api/getting-started.html" target="_blank"><svg class="big-icon icon-hover" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><circle fill="#F2F2F2" cx="128" cy="128" r="128"/><path d="M166 204c-25 9-53 9-78 0-2-1-4-4-4-6v-6c0-3 2-4 4-3 25 9 53 9 78 0 3-1 5 0 5 3v6c0 2-2 5-5 6Z" fill="#ED1C24"/><path d="M166 196a84 84 0 0 1-78 0c-2-1-4-5-4-8v-8c0-4 2-5 4-4 25 13 53 13 78 0 3-1 5 0 5 4v8c0 3-2 7-5 8Z" fill="#C1272D"/><g transform="translate(118 203)"><circle fill="#C1272D" cx="9.6" cy="3.9" r="3.6"/><circle fill="#FF931E" cx="9.6" cy="3.4" r="3.1"/><circle fill="#FFB81E" cx="10.5" cy="4.5" r="1.1"/><circle fill="#FF931E" cx="9.6" cy="15.5" r="9.6"/><circle fill="#FFB81E" cx="9.6" cy="15.6" r="8.6"/><path d="m12 13 1 2-1 2-2 1H9v2H7v-8h3l2 1Zm-1 3v-2H9v2h2Z" fill="#FF931E"/></g><path d="M205 140c2 32-32 61-77 61s-80-29-77-61c2-32 37-58 77-58s75 26 77 58Z" fill="#F7BD89"/><path d="M128 78c-43 0-82 29-75 75 2 4 4 15 16 25 4 2 10 5 13 3 7-5-6-20 9-33 8-6 19-11 37-11 17 0 28 5 37 11h-1c15 13 2 28 9 33 3 2 10-1 13-3 12-10 14-21 16-25 7-46-32-75-74-75Z" fill="#FBD5A0"/><path d="M164 153a48 48 0 0 0-73 0c-7 9-4 13-4 21 0 31 10 22 18 26 7 4 15 2 23 2s15 2 23-2c7-4 18 5 18-26 0-8 2-12-5-21Z"/><g transform="translate(62 124)"><circle fill="#F7BD89" cx="13" cy="15.5" r="13"/><circle cx="14.2" cy="13.3" r="13"/><circle fill="#FFF" cx="17.5" cy="7.4" r="3.4"/></g><g transform="translate(166 124)"><circle fill="#F7BD89" cx="14" cy="15.5" r="13"/><circle cx="13.2" cy="13.3" r="13"/><circle fill="#FFF" cx="16.5" cy="7.4" r="3.4"/></g><path d="M100 89s-44 8-45 60c0 1-1 2-2 1l-1-1-1-13 2-28 18-14 16-7 13 2Zm55 0s44 8 46 60l1 1 2-1 1-13-2-28-19-14-16-7-13 2Z" fill="#F7BD89"/><path d="M127 183v-27h2v27l10 3 6 2-17-2-17 2 6-2 10-3Zm13-36c1 4-4 9-12 9-9 0-14-5-13-9 2-3 7-4 13-4 5 0 10 1 12 4Z" fill="#4D4D4D"/><path d="M100 89s-51 7-47 59c0 2-10-11-19-15-8-5-7-18-7-18s-1-24 33-31c33-7 40 5 40 5Zm55 0s52 7 47 59c0 2 11-11 19-15 8-5 8-18 8-18s0-24-33-31-41 5-41 5Z"/><path d="M128 126c-16 0-33 16-29 14 6-3 10-9 29-9s22 6 29 9c3 2-13-14-29-14Z" fill="#F7BD89"/><path d="M128 119c-13 0-25 12-22 11 4-3 11-7 22-7s17 4 22 7c2 1-10-11-22-11Zm0-39c-14 0-28 8-25 7 6-1 12-4 25-4 12 0 19 3 24 4 3 1-11-7-24-7Z" fill="#F7BD89"/><path d="M131 146s-1 2-3 2-4-2-3-2c0-1 1-2 3-2l3 2Z" fill="gray"/></svg>
            </a>
          </div>
        </div>
        <div class="back-end box">
          <h2 class="tech-titles">Back-end</h2>
          <div class="icon-container right-icons">
            <a
              title="Firebase"
              href="https://firebase.google.com/"
              target="_blank"
              ><img
                class="big-icon icon-hover"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                alt="Firebase"
              /></a
            >
            <a title="MongoDB" href="https://www.mongodb.com/" target="_blank"
              ><img
                class="big-icon icon-hover"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                alt="MongoDB"
              /></a
            >
            <a title="SocketIO" href="https://socket.io/" target="_blank"
              ><svg class="big-icon svg-color icon-hover" viewBox="0 0 128 128">
                <path
                  d="M63.951.001C28.696.001.001 28.696.001 63.951s28.695 63.95 63.95 63.95 63.95-28.695 63.95-63.95S99.206.001 63.95.001zm0 10.679c29.484 0 53.272 23.787 53.272 53.271 0 29.485-23.788 53.272-53.272 53.272-29.484 0-53.272-23.787-53.272-53.272 0-29.484 23.788-53.271 53.272-53.271z"
                /><path
                  d="M48.39 60.716c14.004-11.44 27.702-23.278 42.011-34.384-7.505 11.533-15.224 22.913-22.729 34.445-6.437.03-12.875.03-19.282-.061zM60.228 67.092c6.468 0 12.905 0 19.342.092-14.095 11.38-27.732 23.309-42.071 34.384 7.505-11.533 15.224-22.943 22.729-34.476z"
                />
              </svg></a
            >
            <a title="NodeJS" href="https://nodejs.org/en/" target="_blank"
              ><img
                class="big-icon icon-hover"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                alt="NodeJS"
              /></a
            >
            <a title="Express" href="https://expressjs.com/" target="_blank"
              ><svg class="big-icon svg-color icon-hover" viewBox="0 0 128 128">
                <path
                  d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"
                />
              </svg></a
            >
          </div>
        </div>
        <div class="other box">
          <h2 class="tech-titles">Other</h2>
          <div class="icon-container left-icons">
            <a title="Figma" href="https://www.figma.com/" target="_blank"
              ><img
                class="big-icon icon-hover"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                alt="Figma"
              /></a
            >
            <a title="Git" href="https://git-scm.com/" target="_blank"
              ><img
                class="big-icon icon-hover"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                alt="Git"
              /></a
            >
            <a title="Webpack" href="https://webpack.js.org/" target="_blank"
              ><img
                class="big-icon icon-hover"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"
                alt="Webpack"
              /></a
            >
            <a title="GSAP" href="https://greensock.com/gsap/" target="_blank"
              ><svg
                class="big-icon icon-hover"
                viewBox="-2.1 -2.3 314.9 359.3"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  d="M48 156c-10 4-38 26-43 33-6 6-7-4-1-21 4-13 15-32 35-48a365 365 0 0 1 128-56c3-1-3 5-4 8-6 15-111 82-111 82zm149 186c2 11 0 12-11 14-12 1-20-3-23-6s-4-9-1-15c2-4 4-5 5-9 1-5 2-6 3-7l1-13 1-37c1-8 36 4 36 4l-10 26c-3 5-2 15-2 17l-2 6s2 5 1 9c-1 2 2 10 2 11zm14-311c-2-8 0-23 1-26 5-6 32-7 38 1 2 4 2 12 2 18l-2 21c-1 3-30 7-37-1l-2-13zm59 292c13 9 22 10 29 13 6 4 4 10-6 12-9 1-22-2-31-2s-29 1-34-2c-6-5-4-13-4-13 2-4 6-14 5-22s-3-13-6-20c-3-8-6-26-3-28s2 0 6 1l16 2 19-1c3-1 6-2 5 5-1 6-4 18-4 27v21l8 7z"
                  fill="#010101"
                /><path
                  d="M227 51c-23 20-66 25-130 50-17 6-61 25-71 45 35-21 48 8 51 37 3 27 17 41 52 40 36 0 47 21 57 45 19-94 50-112 70-129 42-34-10-95-29-88z"
                  fill="#8ac640"
                /><path
                  d="M227 51c-54 19-107 24-170 62-15 9-46 30-52 70 23-25 76-57 140-77 33-11 57-17 85-28l-3-27z"
                  fill="#8ac640"
                /><path
                  d="M295 163s-3 13-11 17c0 0-6 2-17-4-4-2-6-8-6-10 0-5 3-7 3-7s4-6 8-5l12-1c2-3 12 3 11 10zM212 35l-2 17-11 3c9 25 60 25 67 13-3-3-10-6-13-7-3-2-3-1-3-7l-1-19c0-3-32-3-37 0z"
                  fill="#010101"
                /><path
                  d="M214 35v11l-1 7c0 1 7 6 9 17 10 21 32 11 42 0l-15-8c-3-1-2-3-2-9l-1-17c-1-3-27-4-32-1z"
                  fill="#f0efef"
                /><g fill="#010101"
                  ><path
                    d="M212 35v8l8 8c2 2 7 2 11 2l8-1 11-8-1-9c0-3-32-3-37 0z"
                  /><path
                    d="M231 50h-8l-3-2-4-3c-3-2-3-4-3-5 1-12-1-23-1-23s-1-6 6-7l13-2 12 2c8 1 7 7 7 7s-2 11-1 23c0 1 0 3-3 5l-8 5h-7z"
                  /><path
                    d="M231 3c-14 0-16 4-20 8-1 1 0 7 1 20h2l-1-8v-5c0-1-2-3 2-5 3-2 9 1 16 1s13-3 16-1c4 2 2 4 2 5v5l-1 8h2c1-13 2-19 1-20-3-4-7-8-20-8zm64 161s-3 12-11 16l-3-4-2-1-2-3-2-1-2-2-2-1c-1-1-10-3-10-5l3-5s4-6 8-6c3 1 7 1 9-1s15 6 14 13z"
                  /><path
                    d="M269 73s13-3 22 6c8 8 8 19 5 25 2 3 6 10 3 19 14 12 8 29-4 41 0 0-3-11-14-11 0-5-11-8-6-18-8-2-7-8-9-14-1-7 3-48 3-48z"
                  /></g
                ><path
                  d="M264 79s15-7 24 1c9 9 6 18 4 25 2 2 7 10 4 19-1 2-5 2-8 7 8-5 13-3 15 3 2 9-4 20-9 26l-1-1c0 3-1 9-8 16-3 3-5 3-8 2-5-1-6-3-12-6-3-2-1-4-1-6l1-2 3-4s3-4 7-4l9-1c0-8-8-8-5-20 0-1 1-2 4-2-5-1-7-1-11-5-2-2-4-5-4-8-2-7-4-40-4-40z"
                  fill="#f0efef"
                /><path
                  d="M221 66c-1-1-7-9-19-13-4-1-6 2-9 4-1 0-6-2-8-1l-7 4h-7c-3 1-7 3-11 8-2 9 44 2 44 2z"
                  fill="#010101"
                /><path
                  d="M222 66c-7-2-6-9-20-11-3 0-5 2-7 4l3 4c-2-2-5-5-9-5-3-1-5 1-8 3l2 3c-3-2-5-3-9-1-2 1-7 3-11 8-3 9 41-1 41-1z"
                  fill="#8ac640"
                /><path
                  d="M260 70v-5l-2-1v-1s3-2 5-1c3 1 5 5 5 5 4-2 5 0 7 2 5-1 5 1 8 6h-10c-7 1-13-6-13-5z"
                  fill="#010101"
                /><path
                  d="m259 69 1-2c2-1 5-2 7 2 4-2 5 0 7 3 6-3 6 0 7 2h-8c-7 1-14-6-14-5z"
                  fill="#8ac640"
                /><path
                  d="M190 64s12 4 21 3c10-1 27-2 36 4 0 0 9-4 17-1 9 2 25 17 20 32l-6 4s2 7-1 12c-3 6-9 16-10 31l-1 10c-16-1-40-6-64-6l1-7-3-15c-7-5-16-11-22-22-7-10 12-45 12-45zm79 109s12 46-3 65c0 0 3 8-3 18l-2 12c-3 17-7 24-8 51h-13s-1-20-5-30c-3-6-12-14-12-22 1-6 2-11 12-20 1-11-11-23-9-67z"
                  fill="#010101"
                /><path
                  d="M265 172c3 20 11 51-3 66a31 31 0 0 1 0 12l-2 8c-2 5-3 12-3 16-3 17-3 18-4 45h-13s-1-20-5-30c-3-6-8-11-8-19-1-6 4-18 14-18-1-25-12-20-15-71zM190 64l9 1h15c10-1 24-2 33 4 0 0 5-2 11-2 2 1 4 3 7 3 9 3 18 18 14 31l-7 1c1 3 1 9-2 16s-8 16-7 33l-52-3-3-19 6-5c-6 1-8 0-12-2s-10-8-13-12c-1-1-3 6-8 6-2-3 6-10 4-13-5-10 5-39 5-39z"
                  fill="#f0efef"
                /><path
                  d="M267 155v9l2 11c-2 4-12 13-30 16-17 3-41-24-41-24a188 188 0 0 1 5-16c2-3 64 4 64 4z"
                  fill="#010101"
                /><path
                  d="m262 155 1 12 3 14c0 12-15 10-28 10-18 4-33-24-33-24l4-14 1-7 52 2v7z"
                  fill="#f0efef"
                /><path
                  d="M242 182s-10-24-43-17c-7 22-18 47-11 74-7 9-15 14-15 31l1 20 24 1s8-10 11-21c1-3 2-9 1-15 1-1 4-4 5-9 0 0 11-7 18-21 6-14 5-25 9-43z"
                  fill="#010101"
                /><path
                  d="M242 182c0-3-8-25-38-18-18 47-12 67-9 75-12 16-17 19-15 50h16c7-12 9-16 9-31l-4 3c2-6 5-8 8-12l2-7c14-9 19-21 23-34 2-8 5-22 8-26z"
                  fill="#f0efef"
                /><g fill="#010101"
                  ><path
                    d="m192 149 11 2c4 1 4 2 6 4s6 5 6 9l-3 3-6 6-2 2-3 2-6 1s-5 0-9-4l1-2-6-6v-8c0-2 8-7 11-9zm5 198v5s-2 2-16 2-17-4-19-7v-5l3-4c4 1 20 7 30 8l2 1zm30-10v4c2 2 8 3 20 3 17-1 32 5 52 2v-4h-2l-68-6z"
                  /><path
                    d="M242 344h5c11-1 21 2 32 2 6 0 14-1 13-5l-58-5c-3 3-1 7 8 8zm-67-86c2 1 15 9 35 8-1 3-1 11-9 24-5 7-9 18-10 33 1 3 2 6 0 10l6 11c1 3 2 7-9 7-11 1-28-1-26-9 1-5 5-9 5-11 1-2 1-8 4-11 3-10 2-20 1-29-1-10-1-25 3-33zm19-166c15-19 2-35-21-30-9 2-19 8-19 20-3 0-10 1-14 13-2 10-4 12-8 17-3 3 0 11 2 16 8 17 31 19 47 32 5-1 10-7 12-11-13-16-10-22-16-30 6-2 19-10 17-27z"
                  /></g
                ><path
                  d="m191 91 3-5 3 3c5-9 7-22 0-23l-6-1c-4-2-8-2-14-1-9 2-18 8-18 18 0 0 6 2 8 10-3-4-8-9-15-5-6 4-3 14-12 24-3 4-2 8 1 16 5 13 30 20 44 32l7-7c-9-10-13-19-16-25-3-8-6-12-14-18l9 4c1 1 4 2 7 1 8-3 13-15 13-23z"
                  fill="#f0efef"
                /><path
                  d="M280 94c-1 8-6 4-9 2-7-2-13-4-20-4l-24 3c-11 3-14 3-19 0l-14-9 2 5c3 3 9 7 17 10 4 1 7 0 10-1 18-4 37-5 54 5l4-3c2-3-1-8-1-8z"
                  fill="#010101"
                /><path d="m187 172 6 3-2-1-4-2z" fill="#0a1825" /><path
                  d="M246 10c0-2-5-5-15-5-12 0-15 4-15 5l-1 10v8l2 10c0 4 1 7 3 11l3 1h15c3-1 6-4 6-8l2-10 1-10-1-12z"
                  fill="#f0efef"
                /><path
                  d="M225 262s11 5 37 1c0 0-7 37-4 56 0 0 4 5 29 15 0 0 12 2 11 8 0 0 1 1-13 1s-27-3-36-3-19 1-21-2 1-9 3-13c3-3 2-6 2-13 0-18-14-37-8-50z"
                  fill="#010101"
                /><path
                  d="M223 265c-2 2 0 10 2 18 2 7 6 12 7 24s2 14-2 21-4 14 8 14 18 0 30 2c13 1 17 2 24 1s8-3 5-5-15-5-20-9c-5-3-19-9-19-11v-32l3-18c0-2 3-5-1-4l-26 2c-10-1-11-3-11-3z"
                  fill="#8ac640"
                /><path
                  d="M229 328c4 2 9 3 13 3 0 0-2 7 1 11 2 4-17 2-17 2v-15zm54 18c4-1 6-5 3-8-3-4-5-4-1-5 3 0 17 8 17 8l-7 7zm-61-73a83 83 0 0 0 39-1c6-2 3 2 3 2l-3 3s-8 3-20 3c-15 0-19-2-19-2zm0 10c5 2 12 3 18 2 6 0 15 0 20-2 3-1 1 3 1 3l-1 1s-8 3-20 3l-17-1z"
                  fill="#010101"
                  opacity=".3"
                /><path
                  d="M225 262s17 6 37 2c0 0-7 36-4 55 0 0 4 5 29 14 0 0 12 3 11 9 0 0 1 1-13 1l-36-3c-9 0-19 0-21-2-2-3 1-9 3-13 3-4 2-6 2-13 0-18-14-37-8-50z"
                  fill="none"
                /><path
                  d="M225 262s17 6 37 2c0 0-7 36-4 55 0 0 4 5 29 14 0 0 12 3 11 9 0 0 1 1-13 1-14-1-27-5-36-3-10 2-19 1-21-2-1-3 1-9 3-13 3-4 2-6 2-13 0-18-14-37-8-50z"
                  fill="none"
                /><path
                  d="M209 141c0 1 16 9 25 11 8 1 27 0 29-1v3s-22 3-38-1c-17-5-15-6-15-6z"
                  fill="#010101"
                /><path
                  d="M175 314c2 2 11 4 17 3 1-1 0-14 2-21 3-8 9-16 11-31l-23-5c-7 20-5 37-7 54zm14 13 2 1c1-2-1-5-1-7v-1l-14-1c-1 3-3 3-4 8-1 3 3 0 6 0-6 4-12 8-13 12-1 6 1 8 7 11l16 1c6-1 7-4 5-7l-4-17z"
                  fill="#f0efef"
                /><path
                  d="M191 63c6 4 16 3 19 2l10-1v1s-3 2-9 2c-7 0-15 0-19-2-5-2-1-2-1-2zm69 4c1 0 9 3 13 7 3 3 1 3 0 2l-9-6-6-3h2z"
                  fill="#010101"
                /><path
                  d="M190 151c6 0 12 1 16 5 2 2 5 4 5 6l-3 4-3 3-4 3-2 2c-2 1-4 0-6-1s0-1-2-3c-6-3-9-6-7-14l6-5z"
                  fill="#f0efef"
                /><path
                  d="M138 104c-19 8-65 31-78 38 11 7 16 24 17 41l1 4 1 3v1c12-33 55-67 56-70 1-1-1-6 2-11 4-7 11-10 1-6zm43 154c10-19 10-36 10-57 0-9 6-22 3-18-12 14-43 39-65 41 31-1 43 14 52 34z"
                  fill="#010101"
                  opacity=".4"
                /><path
                  d="M42 159c11-8 71-40 86-44 14-5 10-11 10-11s-59 26-94 47"
                  fill="#010101"
                /><path
                  d="M213 101c-5-2-9 3-7 9 1 5 12 11 11 30 0 16-4 22-4 22l-7-9s-2-22-4-26l-15-12c-3-3 4-7 4-13-1-5 3-16 3-16zm28 86c0 16 3 38 5 49 1 11 3 12 0 17-4 4-8 12-8 12l-14-1 12-17-6-23zM214 45c3 6 6 9 12 11 3 1 16 3 21-3 2-3 1-10 1-10l-12 10-16-3-1-5z"
                  fill="#010101"
                  opacity=".4"
                /><path
                  d="M215 59c5 3 19 7 22 7 4 1 10-4 13-5s8-2 14 3c1 1-1 4-1 4l-3-1-6-2c-10 2-12 5-20 3s-12-4-20-3"
                  fill="#8ac640"
                  stroke="#010101"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="1.6"
                /><path
                  d="m213 59 24 7c4 1 9-3 12-5 5-3 12 0 15 3l3 5h-3l-4-2-6-2c-10 1-12 5-21 3s-11-4-20-3"
                  fill="#8ac640"
                /><path
                  d="M182 250v-1c-3 0-7-2-9-5-8-13-21-21-44-20-35 0-49-14-52-41-1-15-5-29-14-38l-4 3c9 9 12 22 14 40 3 27 25 40 51 40 27 1 36 6 46 20 3 4 7 5 10 6z"
                  fill="#010101"
                /><path
                  d="M276 119c1 3 3 9 6 12v1h-10l-2-4z"
                  fill="#010101"
                  opacity=".4"
                /></svg
              ></a
            >
            <a title="NPM" href="https://www.npmjs.com/" target="_blank"
              ><img
                class="big-icon icon-hover"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                alt="NPM"
              /></a
            >
            <a title="Unity" href="https://unity.com/" target="_blank"
              ><svg
                class="big-icon svg-color icon-hover"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.531 25.599l-5.728-9.599 5.728-9.599 2.803 9.599zM13.864 24.667l-7.197-7.068h11.469l5.728 9.599zM13.864 7.197l10-2.531-5.728 9.599h-11.605c0 0.136 7.333-7.068 7.333-7.068zM28.531 0l-13.061 3.333-2 3.333h-3.871l-9.599 9.333 9.599 9.333h3.871l1.864 3.333 13.068 3.333 3.463-12.667-1.864-3.333 2-3.333z"
                />
              </svg>
            </a>
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
          : '180 180 180'}; --windowWidth: {$windowWidth}"
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

  .inner-content {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }

  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 8px;
    margin: 0 10px;
    text-align: center;
    font-size: var(--medium-text);
  }

  .icon-container {
    display: flex;
    justify-content: center;
    align-self: center;
    column-gap: 12px;
    padding: 10px 24px;
    border-radius: 12px;
    background-color: var(--secondary-color);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    transition: 0.6s;
  }

  .base {
    grid-column: 2/4;
  }

  .front-end {
    grid-column: 1/3;
    grid-row: 2/3;
  }

  .back-end {
    grid-column: 2/4;
    grid-row: 3/4;
  }

  .other {
    grid-column: 1/3;
    grid-row: 4/5;
  }

  .title {
    font-size: var(--large-text);
    align-self: flex-end;
    text-align: center;
  }

  .tech-titles {
    margin: 0 14px;
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
    .title {
      font-size: 22px;
    }

    .base,
    .front-end,
    .back-end,
    .other {
      grid-column: 1/4;
    }

    .front-end,
    .other {
      text-align: start;
    }

    .back-end,
    .base {
      text-align: end;
    }

    .left-icons {
      align-self: flex-start;
    }

    .right-icons {
      align-self: flex-end;
    }
  }
</style>
