let userScore = 0;
let computerScore = 0;
const userScore_text = document.getElementById('userScore');
const computerScore_text = document.getElementById('computerScore');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const winnerText = document.getElementById('winnerText');
const resetBtn = document.getElementById('reset');

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_text.innerHTML = userScore;
    computerScore_text.innerHTML = computerScore;
    winnerText.innerHTML = `User: ${userChoice} beats Computer: ${computerChoice}`;
}

function lose(computerChoice, userChoice) {
    computerScore++;
    userScore_text.innerHTML = userScore;
    computerScore_text.innerHTML = computerScore;
    winnerText.innerHTML = `Computer: ${computerChoice} vs. User: ${userChoice}`;
}

function draw(userScore, computerScore) {
    winnerText.innerHTML = `Draw!`;
}


function game(userChoice) {
    let computerChoice = getComputerChoice();

    switch(userChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            console.log('User Won');
            win(userChoice, computerChoice);
            break;
        case 'scissorsrock':
        case 'rockpaper':
        case 'paperscissors':
            console.log('Computer Won');
            lose(computerChoice, userChoice);
            break;
        case 'rockrrock':
        case 'paperpaper':
        case 'scissorsscissors':
            draw(userChoice, computerChoice);
            break;
    }
}

rock.addEventListener('click', function() {
    game('rock');
});

paper.addEventListener('click', function() {
    game('paper');
});

scissor.addEventListener('click', function() {
    game('scissors');
});