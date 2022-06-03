<script lang="ts">
    import TopCard from "./TopCard.svelte";
    import BlogTechStack from "./BlogTechStack.svelte";

    let image = "./images/blogHigh.png";
    let title: string = "Retro Blog";
    let description: string = "<span style='display: flex; justify-content: center'>Second Angular project</span> <br> Hosted on <a href='https://blog.heroku.com/app_sleeping_on_heroku' target='_blank'>Heroku</a>. Please let the website boot up for 15~ seconds. <br><br> <em>Better</em> structure than the first one. I emphasize better because I honestly found it very hard to find best practice examples on Angular. It may be due to it being a framework for (mostly) bigger companies. <br><br> I designed this with a retro look in mind. It's looks alright but I felt pretty limited by css. <br><br> This is a very bare bones type of blog. Noone can create new blogs, but you can comment & quote other quest's comments and it is served with a neat pagination system. <br><br> I think I spent the better part of this project trying to understand caching. Bad move.";
    let codeUrl: string = "https://github.com/Godnoken/developer-challenge-api";
    let liveUrl: string = "https://mini-blog-letsgetchecked.herokuapp.com/blog";
    let elementIndex = 4;
</script>

<TopCard {image} {title} {description} {elementIndex} {codeUrl} {liveUrl}>
    <BlogTechStack />
</TopCard>


<style>

</style>