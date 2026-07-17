// Get the player's move from the command line arguments
const playerMove = process.argv[2];

// Check if the player actually provided a move
if (!playerMove) {
  console.log("Please provide a move: rock, paper, or scissors.");
  process.exit(1);
}

// Convert input to lowercase to make the game case-insensitive
const playerChoice = playerMove.toLowerCase();

// Define the valid moves
const validMoves = ["rock", "paper", "scissors"];

// Check if the player's choice is a valid move
if (!validMoves.includes(playerChoice)) {
  console.log("Invalid move! Please choose rock, paper, or scissors.");
  process.exit(1);
}

// Generate a random move for the computer
const randomIndex = Math.floor(Math.random() * validMoves.length);
const computerChoice = validMoves[randomIndex];

// Create a variable to hold the final result
let result = "";

// Determine the winner
if (playerChoice === computerChoice) {
  result = "It's a draw!";
} else if (
  (playerChoice === "rock" && computerChoice === "scissors") ||
  (playerChoice === "paper" && computerChoice === "rock") ||
  (playerChoice === "scissors" && computerChoice === "paper")
) {
  result = "You win!";
} else {
  result = "You lose!";
}

// Output the final result to the console
console.log(
  `You chose ${playerChoice}, Computer chose ${computerChoice}. ${result}`,
);
