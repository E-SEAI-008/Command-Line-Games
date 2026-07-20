// Read the player's move from the terminal
const playerMove = process.argv[2];

// Store the possible moves
const choices = ['rock', 'paper', 'scissors'];

// If the player did not enter a move, show a message and stop
if (!playerMove) {
  console.log('Please enter rock, paper, or scissors.');
  process.exit(0);
}

// Make the move lowercase so it works with any letter case
const normalizedMove = playerMove.toLowerCase();

// Check if the move is valid
if (!choices.includes(normalizedMove)) {
  console.log(`"${playerMove}" is not valid. Please choose rock, paper, or scissors.`);
  process.exit(0);
}

// Let the computer pick a random move
const computerMove = choices[Math.floor(Math.random() * choices.length)];

// Compare the moves and print the result
if (normalizedMove === computerMove) {
  console.log(`You chose ${normalizedMove}. Computer chose ${computerMove}. It is a draw!`);
} else if (
  (normalizedMove === 'rock' && computerMove === 'scissors') ||
  (normalizedMove === 'paper' && computerMove === 'rock') ||
  (normalizedMove === 'scissors' && computerMove === 'paper')
) {
  console.log(`You chose ${normalizedMove}. Computer chose ${computerMove}. You win!`);
} else {
  console.log(`You chose ${normalizedMove}. Computer chose ${computerMove}. You lose!`);
}