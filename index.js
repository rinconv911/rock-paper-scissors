const mainContainer = document.querySelector('#main-container')   
let options = ['fire', 'water', 'earth'];     
let playerWinCount = 0;
let computerWinCount = 0;

/* Players, counters, legend and button container appear after the Play Match button is clicked */
const playerStats = document.querySelector('#player-stats');
const playerPara = document.querySelector('#player');
const playerTally = document.querySelector('#player-tally');

const computerStats = document.querySelector('#computer-stats');
const compPara = document.querySelector('#computer');
const computerTally = document.querySelector('#computer-tally')	

const legend = document.querySelector('img');
const buttonContainer = document.querySelector('#weapon-container');


// Play Match button, which makes the UI appear when clicked
const playMatch = document.querySelector('#play-match');
playMatch.addEventListener('click', showUI);

// Counter variable for number of rounds completed
let counter = document.querySelector('#round-counter'); 
roundCount = 0;

// Try Again button, which appears after a player has gotten 5 wins
const tryAgain = document.querySelector('#try-again');
tryAgain.addEventListener('click', reload);

// Weapon buttons, hidden at first. When clicked, they fire the playRound function
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => button.addEventListener('click', playRound));

function showUI() {

	playMatch.classList.add('hide');

	buttonContainer.classList.add('fade-in');
	buttons.forEach(button => {
		button.classList.remove('hide')
	});

	legend.classList.add('fade-in');
	counter.classList.add('fade-in');
	counter.textContent = "Round # " + roundCount;


	playerStats.classList.add('fade-in');
	computerStats.classList.add('fade-in');
	
	playerPara.textContent = "You";
	playerTally.textContent = playerWinCount;	
	compPara.textContent = "Warlock";	
	computerTally.textContent = computerWinCount;
	
}

function computerPlay() {
	let selection = options[Math.floor(Math.random() * options.length)]
	return selection;
} 

function playRound(e) {
	const roundResult = document.querySelector('#round-result');
	let playerSelection = e.target.id;
	let computerSelection = computerPlay(); 
	let winner;       
	
	if (playerTally.textContent < 5 || computerTally.textContent < 5){
		shakeWindow();
	}

	removeGlow();	
	addGlow(e, computerSelection);

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

	fadeResult(roundResult);

	roundCount++;
	counter.textContent = "Round # " + roundCount;
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

function addGlow(e, computer) {	
	let playerButton = e.target;	
	playerButton.classList.add('glow-player');

	let computerButton;
	for (i = 0; i < buttons.length; i++) {
		if (buttons[i].id == computer){
			computerButton = buttons[i];
		}
	}
	computerButton.classList.add('glow-computer');

	if (playerButton.id === computerButton.id) {
		playerButton.classList.remove('glow-player');
		computerButton.classList.remove('glow-computer');

		playerButton.classList.add('glow-both');
		computerButton.classList.add('glow-both');
	}
	
}

function removeGlow () {

	if (roundCount >= 1){
		for (i = 0; i < buttons.length; i++){
			buttons[i].classList.remove('glow-player', 'glow-computer', 'glow-both');
		}
	}
}

function fadeResult (result) {
	/* 
	Wouldn't the cloned node appear with an already finished class?
	Since it's set to forward, why does the new node appear before fading out?
	*/
	result.classList.add('fade-out');	
	let newResult = result.cloneNode(true);
	result.replaceWith(newResult);	
}

function shakeWindow() {
	mainContainer.classList.add('shake');
	setTimeout(() => {
		mainContainer.classList.remove('shake');	
	}, 250);
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