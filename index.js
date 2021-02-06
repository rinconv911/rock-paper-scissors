let options = ['rock', 'paper', 'scissors'];     
let playerWinCount = 0;
let computerWinCount = 0;   
let tiedMatches = 0;  

// Weapon buttons, hidden at first
// When clicked, they fire the playRound function
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => button.addEventListener('click', playRound));

// Play Match button, which makes the weapon buttons appear when clicked
const playMatch = document.querySelector('#match');
playMatch.addEventListener('click', showWeapons);

function showWeapons() {
	buttons.forEach(button => button.style.display = 'inline');
	playMatch.style.display = 'none';
}

// Takes the event from the clicked button as a parameter object
function playRound(e) {  
	let winner;         
	let playerSelection = e.target.id;
	let computerSelection = computerPlay(); 
	
	const playerPara = document.querySelector('#player-selection');
	const compPara = document.querySelector('#computer-selection');
	const roundWinner = document.querySelector('#winner');
	const roundResult = document.querySelector('#round-result');

	playerPara.textContent = "Player choice: " + playerSelection;
	compPara.textContent = "Computer choice: " + computerSelection;

	if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
		(playerSelection == 'scissors' && computerSelection == 'paper') || 
		(playerSelection == 'paper' && computerSelection == 'rock')) { 
		winner = 'player';
		roundWinner.textContent = "Winner: " + winner;    
		roundResult.textContent = "You win!";

	} else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
		(playerSelection == 'scissors' && computerSelection == 'rock') || 
		(playerSelection == 'paper' && computerSelection == 'scissors')) {
		winner  = 'computer';
		roundWinner.textContent = "Winner: " + winner;    
		roundResult.textContent = "Well, ain't that a bummer.";

	} else if (playerSelection === computerSelection) {  
		winner = 'none';
		roundWinner.textContent = "Winner: " + winner;    
		roundResult.textContent = "Y'all too equal";
	}

	countWins(winner)
}

/*function playGame(){
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
	} else {
		winBanner.textContent = "########################## No winner! ##########################";
	}
}
*/

function countWins(winner){   

	const tally = document.querySelector('#tally')	
	
	if (winner == 'player') {
		playerWinCount++;
		tally.textContent = "Rounds won by the player: " + playerWinCount + " | Rounds won by the computer: " + computerWinCount + " | Ties: " + tiedMatches;
		return playerWinCount;
	} else if (winner == 'computer') {
		computerWinCount++;
		tally.textContent = "Rounds won by the player: " + playerWinCount + " | Rounds won by the computer: " + computerWinCount + " | Ties: " + tiedMatches;
		return computerWinCount;
	} else if (winner !== 'player' && winner !== 'computer') {
		tiedMatches++;
		tally.textContent = "Rounds won by the player: " + playerWinCount + " | Rounds won by the computer: " + computerWinCount + " | Ties: " + tiedMatches;
		return tiedMatches;
	}
}

function computerPlay() {
	let selection = options[Math.floor(Math.random() * options.length)]
	return selection;
} 