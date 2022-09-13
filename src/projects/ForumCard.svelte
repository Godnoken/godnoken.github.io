<script lang="ts">
  import TopCard from "../TopCard.svelte";
  import {
    angularIcon,
    htmlIcon,
    sassIcon,
    socketioIcon,
    typescriptIcon,
  } from "../Icons";

  const icons = [htmlIcon, sassIcon, typescriptIcon, angularIcon, socketioIcon];

  let image = "./images/difHigh.png";
  let title: string = "Forum";
  let description: string =
    "<span style='display: flex; justify-content: center'>Angular <3 TypeScript</span> <br><br> I built this website as I ventured into Angular & TypeScript. Fell in love with both <em>almost</em> immediately. Strict mode in TypeScript can be a head-scratcher as a newbie. <br><br> Angular’s structure helped me a lot. However, the lack of feedback as a self-taught developer is tough. Not knowing what’s good practice and what’s not. Many mistakes have surely been made. <br><br> Feature-wise you can register an account, make threads, comment, quote and update your name & profile pic. You can also load comments in real time. <br><br> The last future is made possible with Socket IO and this makes the forum feel a bit more like a hybrid between a forum and a chatting app.";
  let codeUrl: string = "https://github.com/Godnoken/angular-mini-forum";
  let liveUrl: string = "https://angular-miniforum.up.railway.app/";
  let elementIndex = 3;
</script>

<TopCard {image} {title} {description} {elementIndex} {codeUrl} {liveUrl}>
  {#each icons as icon}
    <figure class="small-icon">
      {@html icon}
    </figure>
  {/each}
</TopCard>