let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach(btn => {
    btn.addEventListener('click', playRound);
});

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    
    if (randomChoice === 1) {
        return "Rock";
    } else if (randomChoice === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(e) {
    const computerChoice = getComputerChoice();
    const playerChoice = e.target.innerText;


    // if (playerSelection === computerSelection) {
    //     //DRAW
    // } else if (playerSelection === "Rock") {

    //     if (computerSelection === "Scissors") {
    //         playerScore++;
    //         console.log(playerScore + " " + computerScore);
    //         // WIN rock beats scissors
    //     } else {
    //         computerScore++;
    //         console.log(playerScore + " " + computerScore);
    //         // LOSE paper beats rock
    //     }

    // } else if (playerSelection === "Paper") {

    //     if (computerSelection === "Rock") {
    //         playerScore++;
    //         // WIN paper beats rock
    //     } else {
    //         computerScore++;
    //         // LOSE scissors beats paper
    //     }

    // } else if (playerSelection === "Scissors") {

    //     if (computerSelection === "Rock") {
    //         computerScore++;
    //         // LOSE rock beats scissors
    //     } else {
    //         playerScore++;
    //         // WIN scissors beats paper
    //     }

    // } else {
    //     // choice not recognized
    // }
}
