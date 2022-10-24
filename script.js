const playerOptions = document.querySelectorAll('.option');
const buttonPlayAgain = document.querySelector('#btn-play-again');
const results = document.querySelector('#results');
const playerResult = document.querySelector('#player-score');
const botResult = document.querySelector('#bot-score');
const playerIcon = document.querySelector('#player-choice-icon');
const botIcon = document.querySelector('#bot-choice-icon');
let playerScore = 0;
let botScore = 0;

function getBotChoice() {
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
    const botChoice = getBotChoice();
    const playerChoice = e.target.innerText;

    displayChoice(playerChoice, botChoice);

    if (playerChoice === botChoice) {
        results.textContent = `It's a DRAW!`; 
    } else if (playerChoice === "Rock") {
        if (botChoice === "Scissors") { // WIN rock beats scissors
            playerScore++;
            results.textContent = 'You WIN! Rock beats Scissors!';
        } else { // LOSE paper beats rock
            botScore++;
            results.textContent = 'You LOSE! Paper beats Rock!';
        }
    } else if (playerChoice === "Paper") {
        if (botChoice === "Rock") { // WIN paper beats rock
            playerScore++;
            results.textContent = 'You WIN! Paper beats Rock!';
        } else { // LOSE scissors beats paper
            botScore++;
            results.textContent = 'You LOSE! Scissors beats Paper!';
        }
    } else {
        if (botChoice === "Rock") { // LOSE rock beats scissors
            botScore++;
            results.textContent = 'You LOSE! Rock beats Scissors!'
        } else { // WIN scissors beats paper
            playerScore++;
            results.textContent = 'You WIN! Scissors beats Paper!';
        }
    }

    playerResult.textContent = playerScore;
    botResult.textContent = botScore;
}

function startGame(e) {
    console.log(e)
    if (playerScore < 5 && botScore < 5) playRound(e);

    if (playerScore === 5) {
        results.textContent = 'YOU WIN THE GAME!';
        buttonPlayAgain.style.visibility = 'visible';
    } else if (botScore === 5) {
        results.textContent = 'YOU LOSE THE GAME!';
        buttonPlayAgain.style.visibility = 'visible';
    }
}

function resetGame() {
    playerScore = 0;
    botScore = 0;
    playerResult.textContent = 0;
    botResult.textContent = 0;
    results.textContent = '';

    playerIcon.removeAttribute('class');
    botIcon.removeAttribute('class');

    buttonPlayAgain.style.visibility = 'hidden';
}

function displayChoice(player, bot) {
    const rockClass = 'fa-regular fa-hand-back-fist';
    const paperClass = 'fa-regular fa-hand';
    const scissorsClass = 'fa-regular fa-hand-scissors';

    (player === "Rock") ? playerIcon.classList = rockClass 
        : (player === "Paper") ? playerIcon.classList = paperClass 
        : playerIcon.classList = scissorsClass;

    (bot === "Rock") ? botIcon.classList = rockClass 
        : (bot === "Paper") ? botIcon.classList = paperClass 
        : botIcon.classList = scissorsClass;
}

playerOptions.forEach(btn => btn.addEventListener('click', startGame));
buttonPlayAgain.addEventListener('click', resetGame)
