<script lang="ts">
    import TopCard from "./TopCard.svelte";
    import WindowsTechStack from "./WindowsTechStack.svelte";

    let image = "./images/windowsHigh.png";
    let title: string = "W98 Message-board";
    let description: string = "<span style='display: flex; justify-content: center'></span>";
    let codeUrl: string = "https://github.com/Godnoken/express-minimessageboard";
    let liveUrl: string = "http://express-minimessageboard.herokuapp.com/";
    let elementIndex = 5;
</script>


<TopCard {image} {title} {description} {elementIndex} {codeUrl} {liveUrl}>
    <WindowsTechStack />
</TopCard>