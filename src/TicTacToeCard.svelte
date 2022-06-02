<script lang="ts">
    import TopCard from "./TopCard.svelte";
    import TicTacToeTechStack from "./TicTacToeTechStack.svelte";

    let bgColor: string = "#171717"
    let image: string = "./images/tictactoe.png";
    let title: string = "TicTacToe";
    let description: string = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. <br><br> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.";
    let codeUrl: string = "https://github.com/Godnoken/tictactoe";
    let liveUrl: string = "https://godnoken.github.io/tictactoe/";
    let elementIndex = 3;
</script>

<TopCard {bgColor} {image} {title} {description} {elementIndex} {codeUrl} {liveUrl}>
    <TicTacToeTechStack />
</TopCard>

<style>

</style>