let options = ['fire', 'water', 'earth'];     
let playerWinCount = 0;
let computerWinCount = 0;
const mainContainer = document.querySelector('#main-container')   

/* Players and counters declared globally so they appear after the Play Match button is clicked */
const playerPara = document.querySelector('#player');
const compPara = document.querySelector('#computer');
const playerTally = document.querySelector('#player-tally');
const computerTally = document.querySelector('#computer-tally')	

// Play Match button, which makes the UI appear when clicked
const playMatch = document.querySelector('#play-match');
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

	playerPara.textContent = "You";
	compPara.textContent = "Warlock";	

	playerTally.textContent = playerWinCount;
	computerTally.textContent = computerWinCount;
}

function computerPlay() {
	let selection = options[Math.floor(Math.random() * options.length)]
	return selection;
} 

function playRound(e) {
	let winner;         
	let playerSelection = e.target.id;
	let computerSelection = computerPlay(); 	

	const roundResult = document.querySelector('#round-result');
	

	if ((playerSelection == 'fire' && computerSelection == 'earth') ||
		(playerSelection == 'earth' && computerSelection == 'water') || 
		(playerSelection == 'water' && computerSelection == 'fire')) { 
		winner = 'player';
		roundResult.textContent = "You win!";		
	} else if ((playerSelection == 'fire' && computerSelection == 'water') ||
		(playerSelection == 'earth' && computerSelection == 'fire') || 
		(playerSelection == 'water' && computerSelection == 'earth')) {
		winner  = 'computer';   
		roundResult.textContent = "Warlock wins!";
	} else if ((playerSelection === computerSelection)) {
		winner = 'none';
		roundResult.textContent = "You two are of equal power";
	}

	getWinner(winner);

	if (getWinner() == "player") {
		roundResult.textContent = "You win the match!";	
		buttons.forEach(button => button.classList.add('hide'));
		tryAgain.classList.remove('hide');
		tryAgain.textContent = "The warlock asks for a rematch";
	} else if (getWinner() == "computer") {
		roundResult.textContent = "You lost the match!"
		buttons.forEach(button => button.classList.add('hide'));
		tryAgain.classList.remove('hide');
		tryAgain.textContent = "Will you allow the dark magic to conquer the realm?";
	}

	/* 
	Wouldn't the cloned node appear with an already finished class?
	Since it's set to forward, why does the new node appear before fading out?
	*/
	roundResult.classList.add('fade-out');	
	let newResult = roundResult.cloneNode(true);
	roundResult.replaceWith(newResult);
}

function getWinner(winner){  
		
		if (winner == 'player') {
			playerWinCount++;
			playerTally.textContent = playerWinCount;			
		} else if (winner == 'computer') {
			computerWinCount++;
			computerTally.textContent = computerWinCount;
		} else {
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