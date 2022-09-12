<script lang="ts">
    import TopCard from "./TopCard.svelte";
    import WindowsTechStack from "./WindowsTechStack.svelte";

    let image = "./images/windowsHigh.png";
    let title: string = "Message-board";
    let description: string = "<span style='display: flex; justify-content: center'>Windows 98 flashback</span> <br><br> Small project to introduce myself to NodeJS, Express, Pug & persistant data with Mongoose & MongoDB. <br><br> I never used a persistant database on my projects before. Great feeling accomplishing it, not so great feeling seeing trolls posting inappropriate things from time to time. <br><br> Leave a comment if you'd like!";
    let codeUrl: string = "https://github.com/Godnoken/express-minimessageboard";
    let liveUrl: string = "http://express-minimessageboard.herokuapp.com/";
    let elementIndex = 6;
</script>


<TopCard {image} {title} {description} {elementIndex} {codeUrl} {liveUrl}>
    <WindowsTechStack />
</TopCard>