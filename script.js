const userScore_span = document.getElementById('user-label');
const compScore_span = document.getElementById('computer-label');
const scoreBoard_div = document.getElementById('score');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');
const playAgain_btn = document.getElementById('play-again');

let userScore = 0;
let compScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function convertToWord(choice) {
    if (choice === 'rock') return 'Rock';
    if (choice === 'paper') return 'Paper';
    return 'Scissors';
}

function win(userChoice, computerChoice) {
    userScore++;
    scoreBoard_div.innerHTML = `${userScore} : ${compScore}`;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win! 🎉`;
}

function lose(userChoice, computerChoice) {
    compScore++;
    scoreBoard_div.innerHTML = `${userScore} : ${compScore}`;
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lost... 💔`;
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a draw.`;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userChoice, computerChoice);
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(userChoice, computerChoice);
            break;
        default:
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game('rock'));
    paper_div.addEventListener('click', () => game('paper'));
    scissors_div.addEventListener('click', () => game('scissors'));
    playAgain_btn.addEventListener('click', resetGame);
}

function resetGame() {
    userScore = 0;
    compScore = 0;
    scoreBoard_div.innerHTML = '0 : 0';
    result_p.innerHTML = 'Make your move!';
    playAgain_btn.style.display = 'none';
}

main();
