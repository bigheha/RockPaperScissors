function getComputerChoice() {
    let choice = Math.round(Math.random() * (3 - 1) + 1);
    return choice == 1 ? "Rock" : choice == 2 ? "Paper" : "Scissors";
}

const display = document.querySelector("#display");

let wins = 0;
let loses = 0;
let rounds = 0;

function victoryCheck(){
    if (rounds == 5) {
        if (wins > loses) {
            console.log('Player won!');
        } else if ( loses > wins) {
            console.log('Computer won!');
        } else {
            console.log("It's a draw!");
        }
    }
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);

    if (playerChoice == computerChoice) {
        display.textContent = 'Draw';
        rounds++;
        victoryCheck();
    } else if (playerChoice == "Rock") {
        if (computerChoice == "Scissors") {
            display.textContent = 'Victory! Rock beats Scissors!';
            wins++;
            rounds++;
            victoryCheck();
            return "won";
        } else {
            display.textContent = 'Defeat! Paper beats Rock!';
            loses++;
            rounds++;
            victoryCheck();
            return "lost";
    }
    } else if (playerChoice == "Paper") {
        if (computerChoice == "Rock") {
            console.log("Victory! Paper beats Rock!");
            return "won";
        } else {
            console.log("Defeat! Scissors beat Paper!");
            return "lost";
    }
    } else {
        if (computerChoice == "Paper") {
            console.log("Victory! Scissors beat Paper!");
            return "won";
    } else {
            console.log("Defeat! Rock beats Scissors!");
            return "lost";
    }
    }
}

function game() {
    const buttons = document.querySelectorAll("button");
    console.log({ buttons });
    buttons.forEach((button) =>
    button.addEventListener("click", () =>
        playRound(button.textContent, getComputerChoice())
        ))
    // for (i = 0; i < 5; i++) {
    //     result = playRound(prompt('Choose Rock, Paper or Scissors'), getComputerChoice());

    //     if (result == 'won') {
    //         wins++;
    //     }
    //     if (result == 'lost') {
    //         loses++;
    //     }
    // }


}

game();


