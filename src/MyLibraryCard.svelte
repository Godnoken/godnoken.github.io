<script lang="ts">
    import TopCard from "./TopCard.svelte";
    import MyLibraryTechStack from "./MyLibraryTechStack.svelte";

    let image: string = "./images/myLibrary.png";
    let title: string = "My Library";
    let description: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    let codeUrl: string = "https://github.com/Godnoken/mylibrary";
    let liveUrl: string = "https://godnoken.github.io/mylibrary/dist/index.html";
    let elementIndex = 1;
</script>


<TopCard {image} {title} {description} {elementIndex} {codeUrl} {liveUrl}>
    <MyLibraryTechStack />
</TopCard>


<style>

</style>