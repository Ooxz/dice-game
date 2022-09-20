let player1Score = 0;
let player2Score = 0;
let player1Turn = true;
let player1Wins = 0;
let player2Wins = 0;
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const message = document.getElementById("message");
const totalPlayer1 = document.getElementById('totalPlayer1');
const totalPlayer2 = document.getElementById('totalPlayer2')
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn")

totalPlayer1.innerHTML = 0
totalPlayer2.innerHTML = 0

player1Scoreboard.innerHTML = player1Score
player2Scoreboard.innerHTML = player2Score	

rollBtn.addEventListener("click", addScore);
resetBtn.addEventListener("click", resetScore);


function addScore() {
	const randomNumber = Math.floor(Math.random() * 6) + 1 
	if(player1Turn) {
		message.innerHTML = "Player 2 turn"
		player1Dice.innerHTML = "-"
		player2Dice.innerHTML = "-"
		player1Score += randomNumber
		player1Dice.innerHTML = randomNumber
		player1Scoreboard.innerHTML = player1Score
		player1Dice.classList.remove("active")
		player2Dice.classList.add("active")
		player1Turn = false
		
		winRound()
		winGame()
	} else if(player1Turn === false) {
		message.innerHTML = "Player 1 turn"
		player1Dice.innerHTML = "-"
		player2Dice.innerHTML = "-"
		player2Score += randomNumber
		player2Dice.innerHTML = randomNumber
		player2Scoreboard.innerHTML = player2Score
		player1Dice.classList.add("active")
         player2Dice.classList.remove("active")
		player1Turn = true
		
		winRound()
		winGame()
	}
	
	
}

function resetScore() {
	player1Score = 0
	player2Score = 0
	player1Dice.innerHTML = "-"
	player2Dice.innerHTML = "-"
	player1Scoreboard.innerHTML = player1Score
	player2Scoreboard.innerHTML = player2Score
	rollBtn.style.display = "inline-block"
	resetBtn.style.display = "none"
	if(player1Turn === false) {
		message.innerHTML = "Player 2 turn"
	} else {
		message.innerHTML = "Player 1 turn"
	}
	

}

function winRound() {
	if(player1Score >= 10) {
		message.innerHTML = "Player 1 win the set"
		rollBtn.style.display = "none"
		resetBtn.style.display = "inline-block"
		player1Turn = false
		totalPlayer1.innerHTML = player1Wins+=1
	} else if (player2Score >= 10) {
		message.innerHTML = "Player 2 win the set"
		rollBtn.style.display = "none"
		resetBtn.style.display = "inline-block"
		player1Turn = true
		totalPlayer2.innerHTML = player2Wins+=1
	}  
	
}

function winGame() {
	if (player1Wins === 2) {
		message.innerHTML = "Player 1 you win the game 🥳"
		player1Wins = 0
		player2Wins = 0
		totalPlayer1.innerHTML = 0
		totalPlayer2.innerHTML = 0
		player1Turn = false
	} else if (player2Wins === 2) {
		message.innerHTML = "Player 2 you win the game  🎉"
		player1Wins = 0
		player2Wins = 0
		totalPlayer1.innerHTML = 0
		totalPlayer2.innerHTML = 0
		player1Turn = true
	}
}