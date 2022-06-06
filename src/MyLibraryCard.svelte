<script lang="ts">
    import TopCard from "./TopCard.svelte";
    import MyLibraryTechStack from "./MyLibraryTechStack.svelte";

    let image = "./images/libraryHigh.png";
    let title: string = "My Library";
    let description: string = "<span style='display: flex; justify-content: center'>My first big project. Doh</span> <br> This library offers custom styling, google book searches, CRUD, persistent data and more. <br><br> I got my hands on a back-end service for the first time. Firebase was a great start to understanding the back-end for my newer projects. <br><br> A lot of time was spent trying to figure out performance bits. I implemented lots of lazy loading, pagination and learned how to utilize webpack to compress the project to oblivion. <br><br> The styling may look impressive but let me assure you – the code is in absolute chaos. Written without a framework and not even a pre-processor for the css… <br><br> In hindsight I should never have spent so much time on this. This project is my evidence of why we love frameworks.";
    let codeUrl: string = "https://github.com/Godnoken/mylibrary";
    let liveUrl: string = "https://godnoken.github.io/mylibrary/dist/index.html";
    let elementIndex = 1;
</script>


<TopCard {image} {title} {description} {elementIndex} {codeUrl} {liveUrl}>
    <MyLibraryTechStack />
</TopCard>


<style>

</style>