/*
	let options = ['rock', 'paper', 'scissors'];     
	let playerWinCount = 0;
	let computerWinCount = 0;   
	let tiedMatches = 0;  

	playGame();

	function playGame(){
		for (let roundCount = 1; roundCount <= 5; roundCount++) {
			console.log("########################## Round " + roundCount + " ##########################");
			playRound();      
		}

		if (playerWinCount > computerWinCount){
			console.log("########################## The player wins! ##########################");
		} else if (computerWinCount > playerWinCount){
			console.log("########################## The computer wins! ##########################");
		} else {
			console.log("########################## No winner! ##########################")
		}
	}

	function playRound() {   
		let winner;         
		let playerSelection = prompt("Choose your weapon");
		let computerSelection = computerPlay();     

		console.log("Player choice: " + playerSelection);
		console.log("Computer choice: " + computerSelection);

		if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
			(playerSelection == 'scissors' && computerSelection == 'paper') || 
			(playerSelection == 'paper' && computerSelection == 'rock')) { 
			winner = 'player';
			console.log("Winner: " + winner);     

		} else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
			(playerSelection == 'scissors' && computerSelection == 'rock') || 
			(playerSelection == 'paper' && computerSelection == 'scissors')) {
			winner  = 'computer';
			console.log("Winner: " + winner);

		} else if (playerSelection === computerSelection) {  
			winner = 'none';
			console.log("Winner: " + winner);
		}

		countWins(winner)
	}

	function countWins(winner){        
		if (winner == 'player') {
			playerWinCount++;
			console.log("Rounds won by the player: " + playerWinCount + " | Rounds won by the computer: " + computerWinCount + " | Ties: " + tiedMatches);
			return playerWinCount;
		} else if (winner == 'computer') {
			computerWinCount++;
			console.log("Rounds won by the player: " + playerWinCount + " | Rounds won by the computer: " + computerWinCount + " | Ties: " + tiedMatches);
			return computerWinCount;
		} else if (winner !== 'player' && winner !== 'computer') {
			tiedMatches++;
			console.log("Rounds won by the player: " + playerWinCount + " | Rounds won by the computer: " + computerWinCount + " | Ties: " + tiedMatches);
			return tiedMatches;
		}
	}

	function computerPlay() {
		let selection = options[Math.floor(Math.random() * options.length)]
		return selection;
	} 
	let options = ['rock', 'paper', 'scissors'];     
			let playerWinCount = 0;
			let computerWinCount = 0;   
			let tiedMatches = 0;  

			playGame();

			function playGame(){
				for (let roundCount = 1; roundCount <= 5; roundCount++) {
					console.log("########################## Round " + roundCount + " ##########################");
					playRound();      
				}

				if (playerWinCount > computerWinCount){
					console.log("########################## The player wins! ##########################");
				} else if (computerWinCount > playerWinCount){
					console.log("########################## The computer wins! ##########################");
				} else {
					console.log("########################## No winner! ##########################")
				}
			}
			
			function playRound() {   
				let winner;         
				let playerSelection = prompt("Choose your weapon");
				let computerSelection = computerPlay();     

				console.log("Player choice: " + playerSelection);
				console.log("Computer choice: " + computerSelection);

				if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
					(playerSelection == 'scissors' && computerSelection == 'paper') || 
					(playerSelection == 'paper' && computerSelection == 'rock')) { 
					winner = 'player';
					console.log("Winner: " + winner);     

				} else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
					(playerSelection == 'scissors' && computerSelection == 'rock') || 
					(playerSelection == 'paper' && computerSelection == 'scissors')) {
					winner  = 'computer';
					console.log("Winner: " + winner);

				} else if (playerSelection === computerSelection) {  
					winner = 'none';
					console.log("Winner: " + winner);
				}

				countWins(winner)
			}
			
			function countWins(winner){        
				if (winner == 'player') {
					playerWinCount++;
					console.log("Rounds won by the player: " + playerWinCount + " | Rounds won by the computer: " + computerWinCount + " | Ties: " + tiedMatches);
					return playerWinCount;
				} else if (winner == 'computer') {
					computerWinCount++;
					console.log("Rounds won by the player: " + playerWinCount + " | Rounds won by the computer: " + computerWinCount + " | Ties: " + tiedMatches);
					return computerWinCount;
				} else if (winner !== 'player' && winner !== 'computer') {
					tiedMatches++;
					console.log("Rounds won by the player: " + playerWinCount + " | Rounds won by the computer: " + computerWinCount + " | Ties: " + tiedMatches);
					return tiedMatches;
				}
			}
			
			function computerPlay() {
				let selection = options[Math.floor(Math.random() * options.length)]
				return selection;
			} 
*/