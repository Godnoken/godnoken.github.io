<script lang="ts">
  import TopCard from "../TopCard.svelte";
  import {
    cssIcon,
    firebaseIcon,
    htmlIcon,
    javascriptIcon,
    webpackIcon,
  } from "../Icons.js";

  const icons = [htmlIcon, cssIcon, javascriptIcon, firebaseIcon, webpackIcon];

  let image = "./images/libraryHigh.png";
  let title: string = "My Library";
  let description: string =
    "<span style='display: flex; justify-content: center'>My first big project. Doh</span> <br><br> This library offers custom styling, google book searches, CRUD, persistent data and more. <br><br> I got my hands on a back-end service for the first time. Firebase was a great start to understanding the back-end for my newer projects. <br><br> A lot of time was spent trying to figure out performance bits. I implemented lots of lazy loading and a pagination system. I also learned how to utilize Webpack to compress the project to oblivion. <br><br> The styling may look impressive but the code & structure in this project is not something I'm proud of. Written without a framework and not even a pre-processor for the CSS. Definitely an app I would love to rebuild with all the experience I've gained since. <br><br> In hindsight, I should never have spent so much time on this. We live and we learn.";
  let codeUrl: string = "https://github.com/Godnoken/mylibrary";
  let liveUrl: string = "https://godnoken.github.io/mylibrary/dist/index.html";
  let elementIndex = 1;
</script>

<TopCard {image} {title} {description} {elementIndex} {codeUrl} {liveUrl}>
  {#each icons as icon}
    <figure class="small-icon">
      {@html icon}
    </figure>
  {/each}
</TopCard>
