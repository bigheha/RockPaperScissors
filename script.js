function getComputerChoice() {
    let choice = Math.round(Math.random() * (3 - 1) + 1);
    return choice == 1 ? 'Rock': choice == 2 ? 'Paper' : 'Scissors';
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    
    if (playerChoice == computerChoice) {
        console.log("Draw");
    }
    else if (playerChoice == 'Rock') {
        if (computerChoice == 'Scissors') {
            console.log("Victory! Rock beats Scissors!");
            return 'won';
        } else {
            console.log("Defeat! Paper beats Rock!");
            return 'lost';
        }
    } else if (playerChoice == 'Paper') {
        if (computerChoice == 'Rock') {
            console.log("Victory! Paper beats Rock!");
            return 'won';
        } else {
            console.log("Defeat! Scissors beat Paper!");
            return 'lost';
        }
    } else {
        if (computerChoice == 'Paper') {
            console.log("Victory! Scissors beat Paper!");
            return 'won';
        } else {
            console.log("Defeat! Rock beats Paper!");
            return 'lost';
        }
    }
}

function game() {
    var wins = 0;
    var loses = 0;

    for (i = 0; i < 5; i++) {
        result = playRound(prompt('Choose Rock, Paper or Scissors'), getComputerChoice());

        if (result == 'won') {
            wins++;
        }
        if (result == 'lost') {
            loses++;
        }
    }

    if (wins > loses) {
        console.log('Player won!');
    } else if ( loses > wins) {
        console.log('Computer won!');
    } else {
        console.log("It's a draw!");
    }
}

game();