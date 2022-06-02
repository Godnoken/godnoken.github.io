<script lang="ts">
    import TopCard from "./TopCard.svelte";
    import ForumTechStack from "./ForumTechStack.svelte";

    let bgColor: string = "#171717"
    let image: string = "./images/forum.png";
    let title: string = "Forum";
    let description: string = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. <br><br> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.";
    let codeUrl: string = "https://github.com/Godnoken/angular-mini-forum";
    let liveUrl: string = "https://dif-mini-forum.herokuapp.com/";
    let elementIndex = 2;
</script>

<TopCard {bgColor} {image} {title} {description} {elementIndex} {codeUrl} {liveUrl}>
    <ForumTechStack />
</TopCard>

<style>

</style>