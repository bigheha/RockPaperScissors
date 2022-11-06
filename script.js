const display = document.querySelector("#display");
const playerScore = document.querySelector("#player");
const computerScore = document.querySelector("#computer");
const result = document.querySelector("#result");

let wins = 0;
let loses = 0;
let rounds = 0;

function getComputerChoice() {
  let choice = Math.round(Math.random() * (3 - 1) + 1);
  return choice == 1 ? "Rock" : choice == 2 ? "Paper" : "Scissors";
}

function victoryCheck(){
    if (rounds == 5) {
        if (wins > loses) {
          result.textContent = 'Player won!';
        } else if ( loses > wins) {
          result.textContent = 'Computer won!';
        } else {
          result.textContent = "It's a draw!";
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
            playerScore.textContent = `Player score: ${wins}`;
            rounds++;
            victoryCheck();
            return;
        } else {
            display.textContent = 'Defeat! Paper beats Rock!';
            loses++;
            computerScore.textContent = `Computer score ${loses}`;
            rounds++;
            victoryCheck();
            return;
    }
    } else if (playerChoice == "Paper") {
        if (computerChoice == "Rock") {
            display.textContent = "Victory! Paper beats Rock!";
            wins++;
            playerScore.textContent = `Player score: ${wins}`;
            rounds++;
            victoryCheck();
            return;
        } else {
            display.textContent = "Defeat! Scissors beat Paper!";
            loses++;
            computerScore.textContent = `Computer score ${loses}`;
            rounds++;
            victoryCheck();
            return;
    }
    } else {
        if (computerChoice == "Paper") {
            display.textContent = "Victory! Scissors beat Paper!";
            wins++;
            playerScore.textContent = `Player score: ${wins}`;
            rounds++;
            victoryCheck();
            return;
    } else {
            display.textContent = "Defeat! Rock beats Scissors!";
            loses++;
            computerScore.textContent = `Computer score ${loses}`;
            rounds++;
            victoryCheck();
            return;
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
}

game();


