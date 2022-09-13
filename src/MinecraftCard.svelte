<script lang="ts">
    import TopCard from "./TopCard.svelte";
    import MinecraftTechStack from "./MinecraftTechStack.svelte";

    let image = "./images/minecraftHigh.png";
    let title: string = "Inventory";
    let description: string = "<span style='display: flex; justify-content: center'>Work in progress</span> <br><br> The plan was to recreate Minecraft's inventory inside the browser, with all the functionality & styling that it has. It is not quite finished yet, but I believe what I have so far is good enough to display here. <br><br> I hope to implement drag & drop, crafting and the possibility to look at other people's inventory.";
    let codeUrl: string = "https://github.com/Godnoken/express-minecraft-inventory";
    let liveUrl: string = "https://express-minecraftinventory.up.railway.app/";
    let elementIndex = 4;
</script>


<TopCard {image} {title} {description} {elementIndex} {codeUrl} {liveUrl}>
    <MinecraftTechStack />
</TopCard>