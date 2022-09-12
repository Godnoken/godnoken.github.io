<script lang="ts">
    import TopCard from "./TopCard.svelte";
    import TicTacToeTechStack from "./TicTacToeTechStack.svelte";

    let image = "./images/tictactoeHigh.png";
    let title: string = "TicTacToe";
    let description: string = "<span style='display: flex; justify-content: center'>TicTacToe with Minimax algorithm</span> <br><br> Isn't it cool to not be able to beat an AI on an even playing field whilst there are randomly generated blocks flying around distracting you? <br><br> I had tons of fun using GSAP for this project. It sparked several ideas in my head for what I can do in the future. <br><br> I did also try to let the user expand the board to 4x4, 5x5 etcetera. I had the logic all figured out & written in pseudo-code & coded. Turns out the Minimax algorithm couldn't handle it performance wise, not without hashing anyhow.";
    let codeUrl: string = "https://github.com/Godnoken/tictactoe";
    let liveUrl: string = "https://godnoken.github.io/tictactoe/";
    let elementIndex = 4;
</script>

<TopCard {image} {title} {description} {elementIndex} {codeUrl} {liveUrl}>
    <TicTacToeTechStack />
</TopCard>

<style>

</style>