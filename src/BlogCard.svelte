<script lang="ts">
    import TopCard from "./TopCard.svelte";
    import BlogTechStack from "./BlogTechStack.svelte";

    let image = "./images/blogHigh.png";
    let title: string = "Retro Blog";
    let description: string = "<span style='display: flex; justify-content: center'>Second Angular project</span> <br><br> I designed this with a retro look in mind. It looks okay but I felt pretty limited by CSS. <br><br> It does have better structure than the first one, although I do want to emphasize better because I honestly found it very hard to find best practice examples on Angular. It may be due to it being a framework for (mostly) bigger companies. <br><br> It is very much a bare-bones blog. You can't create blog posts, but you can comment & quote other guests comments and it is served with a neat pagination system.";
    let codeUrl: string = "https://github.com/Godnoken/developer-challenge-api";
    let liveUrl: string = "https://angular-retroblog.up.railway.app/";
    let elementIndex = 5;
</script>

<TopCard {image} {title} {description} {elementIndex} {codeUrl} {liveUrl}>
    <BlogTechStack />
</TopCard>


<style>

</style>