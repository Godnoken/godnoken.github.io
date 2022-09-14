<script lang="ts">
  import type { windowWidth } from "./stores";

  import TopCard from "../TopCard.svelte";
  import { cssIcon, gsapIcon, htmlIcon, javascriptIcon } from "../Icons";

  const icons = [htmlIcon, cssIcon, javascriptIcon, gsapIcon];

  let image = "./images/weatherHigh.png";
  let title: string = "Visual Weather";
  let description: string =
    "<span style='display: flex; justify-content: center'>Clouds. Rain. Snow. Sun & Moon</span><br><br> A weather app that is far from the generic weather app you've seen before. <br><br> It started with the idea of using one of google's map APIs and visualising the weather there. I figured it would perhaps be a bit too ambitious to start with, so I started visualising the current weather with a plain white background. <br><br> One visualisation lead to another, and here we are, only limited by the data I receive from <a href='https://openweathermap.org/api'>OpenWeatherMap</a> and performance. <br> This leads me to my next goal. Remake everything with canvas.";
  let codeUrl: string = "https://github.com/Godnoken/weather";
  let liveUrl: string = "https://godnoken.github.io/weather/";
  let elementIndex = 1;
</script>

<TopCard {image} {title} {description} {elementIndex} {codeUrl} {liveUrl}>
  {#each icons as icon}
    <figure class="small-icon">
      {@html icon}
    </figure>
  {/each}
</TopCard>
