const playerChoiceBtns = document.querySelectorAll('#player-choices > button');
const playAgainBtn = document.querySelector('#btn-play-again');
const roundResult = document.querySelector('#round-result');

const rockBtn = document.querySelector('#btn-rock');
const paperBtn = document.querySelector('#btn-paper');
const scissorsBtn = document.querySelector('#btn-scissors');

const playerLivesDisplay = document.querySelector('.player.lives');
const botLivesDisplay = document.querySelector('.bot.lives');

let playerLives = 5;
let botLives = 5;

let player;
let bot;

function getRandomChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    return num === 1 ? 'Rock' : num === 3 ? 'Paper' : 'Scissors';
}

function displayChoices(player, bot) {
    const rock = 'fa-regular fa-hand-back-fist';
    const paper = 'fa-regular fa-hand';
    const scissors = 'fa-regular fa-hand-scissors';

    document.querySelector('#player-choice').className =
        player === 'Rock' ? rock : player === 'Paper' ? paper : scissors;

    document.querySelector('#bot-choice').className =
        bot === 'Rock' ? rock : bot === 'Paper' ? paper : scissors;
}

function displayWinner(text, color) {
    roundResult.textContent = text;
    roundResult.style.color = color;

    playerChoiceBtns.forEach((btn) => (btn.style.display = 'none'));
    playAgainBtn.style.display = 'block';
}

function getWinner(playerWins) {
    if (playerWins) {
        roundResult.textContent = `You WIN! ${player} beats ${bot}!`;
        botLivesDisplay.removeChild(botLivesDisplay.lastElementChild);
        botLives--;
    } else {
        roundResult.textContent = `You LOSE! ${bot} beats ${player}!`;
        playerLivesDisplay.removeChild(playerLivesDisplay.lastElementChild);
        playerLives--;
    }
}

function playRound(e) {
    player = e.target.innerText;
    bot = getRandomChoice();

    displayChoices(player, bot);

    if (player === bot) {
        roundResult.textContent = `It's a DRAW!`;
    } else if (player === 'Rock') {
        bot === 'Scissors' ? getWinner(true) : getWinner(false);
    } else if (player === 'Paper') {
        bot === 'Rock' ? getWinner(true) : getWinner(false);
    } else {
        bot === 'Paper' ? getWinner(true) : getWinner(false);
    }

    if (botLives === 0) displayWinner('YOU WIN THE GAME!', 'var(--green)');
    if (playerLives === 0) displayWinner('YOU LOSE THE GAME!', 'var(--red)');
}

function reset() {
    playerLives = 5;
    botLives = 5;

    roundResult.textContent = 'You have 5 lives!';
    roundResult.style.color = 'var(--white)';

    playAgainBtn.style.display = 'none';

    playerChoiceBtns.forEach((btn) => (btn.style.display = 'inline-block'));

    document.querySelectorAll('.lives').forEach((e) => (e.innerHTML = ''));

    document
        .querySelectorAll('.choice-display > i')
        .forEach((e) => (e.className = ''));

    for (let i = 0; i < 5; i++) {
        playerLivesDisplay.append(document.createElement('div'));
        botLivesDisplay.append(document.createElement('div'));
    }
}

playerChoiceBtns.forEach((btn) => btn.addEventListener('click', playRound));
playAgainBtn.addEventListener('click', reset);
