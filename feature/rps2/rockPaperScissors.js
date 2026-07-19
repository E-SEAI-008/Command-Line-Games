// Get the player's choice from the command line
const playerMove = process.argv[2];

// Possible choices in the game
const gameOptions = ["rock", "paper", "scissors"];

// Check if the player entered a choice
if (!playerMove) {
  console.log("You have to choose between rock, paper, or scissors.");
  process.exit(0);
}

// Convert player's choice to lowercase
const choiceToLowerCase = playerMove.toLowerCase();

// Check if the player's choice is valid
if (!gameOptions.includes(choiceToLowerCase)) {
  console.log(
    `"${playerMove}" is not accepted. Please choose rock, paper, or scissors.`,
  );
  process.exit(0);
}

// Choose a random move for the computer
const computerMove =
  gameOptions[Math.floor(Math.random() * gameOptions.length)];

// Check if both choices are the same
if (choiceToLowerCase === computerMove) {
  console.log(
    `You chose ${choiceToLowerCase}. Computer chose ${computerMove}. It is a draw.`,
  );
}

// Check if the player wins
else if (
  (choiceToLowerCase === "rock" && computerMove === "scissors") ||
  (choiceToLowerCase === "paper" && computerMove === "rock") ||
  (choiceToLowerCase === "scissors" && computerMove === "paper")
) {
  console.log(
    `You chose ${choiceToLowerCase}. Computer chose ${computerMove}. You win!`,
  );
}

// If it is not a draw and the player did not win, the computer wins
else {
  console.log(
    `You chose ${choiceToLowerCase}. Computer chose ${computerMove}. You lose!`,
  );
}
