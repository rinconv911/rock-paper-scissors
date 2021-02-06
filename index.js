let options = ['rock', 'paper', 'scissors'];     
let playerWinCount = 0;
let computerWinCount = 0;   

// Play Match button, which makes the weapon buttons appear when clicked
const playMatch = document.querySelector('#match');
playMatch.addEventListener('click', showWeapons);

// Try Again button, which appears after a player has gotten 5 wins
const tryAgain = document.querySelector('#try-again');
tryAgain.addEventListener('click', reload);

// Weapon buttons, hidden at first. When clicked, they fire the playRound function
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => button.addEventListener('click', playRound));

function showWeapons() {
	buttons.forEach(button => button.classList.remove('hide'));
	playMatch.classList.add('hide');
}

function computerPlay() {
	let selection = options[Math.floor(Math.random() * options.length)]
	return selection;
} 

function playRound(e) {  
	let winner;         
	let playerSelection = e.target.id;
	let computerSelection = computerPlay(); 
	
	const playerPara = document.querySelector('#player-selection');
	const compPara = document.querySelector('#computer-selection');
	const roundResult = document.querySelector('#round-result');

	playerPara.textContent = "Player choice: " + playerSelection;
	compPara.textContent = "Computer choice: " + computerSelection;

	if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
		(playerSelection == 'scissors' && computerSelection == 'paper') || 
		(playerSelection == 'paper' && computerSelection == 'rock')) { 
		winner = 'player';
		roundResult.textContent = "You win!";

	} else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
		(playerSelection == 'scissors' && computerSelection == 'rock') || 
		(playerSelection == 'paper' && computerSelection == 'scissors')) {
		winner  = 'computer';   
		roundResult.textContent = "What a bummer.";

	} else if ((playerSelection === computerSelection)) {
		winner = 'none';
		roundResult.textContent = "That's a tie.";
	}

	countWins(winner);

	if (countWins() == "player") {
		roundResult.textContent = "You win the match!";	
		buttons.forEach(button => button.classList.add('hide'));
		tryAgain.classList.remove('hide');
		tryAgain.textContent = "Play again";
	} else if (countWins() == "computer") {
		roundResult.textContent = "You lost the match!"
		buttons.forEach(button => button.classList.add('hide'));
		tryAgain.classList.remove('hide');
		tryAgain.textContent = "Try again";
	}
}

function countWins(winner){   

	const tally = document.querySelector('#tally')	
	
		if (winner == 'player') {
			playerWinCount++;
			tally.textContent = "Rounds won by you: " + playerWinCount + " | Rounds won by the computer: " + computerWinCount;
		} else if (winner == 'computer') {
			computerWinCount++;
			tally.textContent = "Rounds won by you: " + playerWinCount + " | Rounds won by the computer: " + computerWinCount;
		} else {
			tally.textContent = "Rounds won by you: " + playerWinCount + " | Rounds won by the computer: " + computerWinCount;
		}
	
		if (playerWinCount == 5) {
			return "player";
			} else if (computerWinCount == 5){
			return "computer";
		}
}

function reload() {
	location.reload();
	return false;
}

/* function playGame(){
	const winBanner = document.querySelector('#win-banner');
	const countBanner = document.querySelector('#count-banner');

	for (let roundCount = 1; roundCount <= 5; roundCount++) {
		countBanner.textContent = "########################## Round " + roundCount + " ##########################";
		playRound();
	}

	if (playerWinCount > computerWinCount){
		winBanner.textContent = "########################## The player wins! ##########################";
	} else if (computerWinCount > playerWinCount){
		winBanner.textContent = "########################## The computer wins! ##########################";
	}
} */