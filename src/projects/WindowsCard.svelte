<script lang="ts">
  import TopCard from "../TopCard.svelte";
  import {
    cssIcon,
    expressIcon,
    htmlIcon,
    mongodbIcon,
    pugIcon,
  } from "../Icons";

  const icons = [htmlIcon, cssIcon, pugIcon, expressIcon, mongodbIcon];

  let image = "./images/windowsHigh.png";
  let title: string = "Message-board";
  let description: string =
    "<span style='display: flex; justify-content: center'>Windows 98 flashback</span> <br><br> A small project to introduce myself to NodeJS, Express, Pug & persistent data with Mongoose & MongoDB. <br><br> I never used a persistent database on my projects before. Great feeling accomplishing it, not so great feeling seeing trolls posting inappropriate things from time to time. <br><br> Leave a comment if you'd like!";
  let codeUrl: string = "https://github.com/Godnoken/express-minimessageboard";
  let liveUrl: string = "https://express-minimessageboard.cyclic.app/";
  let elementIndex = 6;
</script>

<TopCard {image} {title} {description} {elementIndex} {codeUrl} {liveUrl}>
  {#each icons as icon}
    <figure class="small-icon">
      {@html icon}
    </figure>
  {/each}
</TopCard>
