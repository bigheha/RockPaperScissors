console.log("hello, world!");

function getComputerChoice() {
    let choice = Math.round(Math.random() * (3 - 1) + 1);
    return choice == 1 ? 'rock': choice == 2 ? 'Paper' : 'Scissors';
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());