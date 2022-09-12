<script lang="ts">
    import TopCard from "./TopCard.svelte";
    import TicTacToeTechStack from "./TicTacToeTechStack.svelte";

    let image = "./images/tictactoeHigh.png";
    let title: string = "TicTacToe";
    let description: string = "<span style='display: flex; justify-content: center'>Why would you show this??</span> <br> Yes, okay, I hear you. It's just TicTacToe. But hear me out - Isn't it cool to not be able to beat an AI on an even playing field whilst there is randomly generated blocks flying around distracting you? <br><br> No? Okay. <br><br> At least you can change your marker on my version. <br><br> On a serious note, had tons of fun using GSAP for this project. It sparked several ideas in my head for what I can do in the future. <br><br> I did also try to let the user expand the board to 4x4, 5x5 etcetera. I had the logic all figured out & written in pseudo code & actually coded. Turns out the minimax algorithm couldn't handle it, not without hashing anyhow. Amazingly, I somehow managed to erase that entire part of code when deciding to archive it in another branch. Yikes.";
    let codeUrl: string = "https://github.com/Godnoken/tictactoe";
    let liveUrl: string = "https://godnoken.github.io/tictactoe/";
    let elementIndex = 4;
</script>

<TopCard {image} {title} {description} {elementIndex} {codeUrl} {liveUrl}>
    <TicTacToeTechStack />
</TopCard>

<style>

</style>