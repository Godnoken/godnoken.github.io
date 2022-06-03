<script lang="ts">
    import TopCard from "./TopCard.svelte";
    import ForumTechStack from "./ForumTechStack.svelte";

    let image = "./images/difHigh.png";
    let title: string = "Forum";
    let description: string = "<span style='display: flex; justify-content: center'>Angular <3 TypeScript</span> <br> Hosted on <a href='https://blog.heroku.com/app_sleeping_on_heroku' target='_blank'>Heroku</a>. Please let the website boot up for 15~ seconds. <br><br> I built this website as I ventured into Angular & TypeScript. Fell in love with both <em>almost</em> immediately. Strict mode in TypeScript can be a.. head scratcher as a newbie. <br><br> Angular’s structure helped me a lot. Even still, my project’s structure is far from good. The lack of feedback (none) is tough. Not knowing what’s good practice and what’s not. Many mistakes have surely been made. <br><br> So is it just a forum..? Well.. yeah. <br> It allows users to register, make threads, comments, quote and update their name & profile pic. <br><br> There’s a pretty neat live comment system though. <br> If you’re browsing a thread and a user makes a new comment, the “New comments” button will turn light blue and you can click it to load the comment. It’s done with Socket IO and this makes the forum feel a bit more like a hybrid between a forum and a chatting app.";
    let codeUrl: string = "https://github.com/Godnoken/angular-mini-forum";
    let liveUrl: string = "https://dif-mini-forum.herokuapp.com/";
    let elementIndex = 2;
</script>

<TopCard {image} {title} {description} {elementIndex} {codeUrl} {liveUrl}>
    <ForumTechStack />
</TopCard>

<style>

</style>