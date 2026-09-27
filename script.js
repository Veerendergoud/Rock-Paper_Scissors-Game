let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {

    const choices = ["Rock", "Paper", "Scissors"];

    const randomIndex = Math.floor(Math.random() * choices.length);

    const computerChoice = choices[randomIndex];

    let result = "";

    if (playerChoice === computerChoice) {

        result = "🤝 It's a Tie!";

    } 
    else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {

        result = "🎉 You Won!";

        playerScore++;

    } 
    else {

        result = "😢 You Lost!";

        computerScore++;
    }

    document.getElementById("resultText").textContent = result;

    document.getElementById("choicesText").textContent =
        `You chose ${getEmoji(playerChoice)} ${playerChoice} 
        vs 
        ${getEmoji(computerChoice)} ${computerChoice}`;

    document.getElementById("playerScore").textContent = playerScore;

    document.getElementById("computerScore").textContent = computerScore;
}


function getEmoji(choice) {

    if (choice === "Rock") {
        return "🪨";
    }

    if (choice === "Paper") {
        return "📄";
    }

    return "✂️";
}


function resetGame() {

    playerScore = 0;
    computerScore = 0;

    document.getElementById("playerScore").textContent = "0";

    document.getElementById("computerScore").textContent = "0";

    document.getElementById("resultText").textContent =
        "Make your move!";

    document.getElementById("choicesText").textContent =
        "You vs Computer";
}