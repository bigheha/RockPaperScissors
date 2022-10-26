function getComputerChoice() {
    let choice = Math.round(Math.random() * (3 - 1) + 1);
    return choice == 1 ? 'Rock': choice == 2 ? 'Paper' : 'Scissors';
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    
    console.log(playerChoice);
    console.log(computerChoice);

    if (playerChoice == computerChoice) {
        return "Draw";
    }
    else if (playerChoice == 'Rock') {
        if (computerChoice == 'Scissors') {
            return "Victory! Rock beats Scissors!";
        } else {
            return "Defeat! Paper beats Rock!";
        }
    } else if (playerChoice == 'Paper') {
        if (computerChoice == 'Rock') {
            return "Victory! Paper beats Rock!";
        } else {
            return "Defeat! Scissors beat Paper!"
        }
    } else {
        if (computerChoice == 'Paper') {
            return "Victory! Scissors beat Paper!"
        } else {
            return "Defeat! Rock beats Paper!"
        }
    }
}

playRound('ROCK', getComputerChoice);