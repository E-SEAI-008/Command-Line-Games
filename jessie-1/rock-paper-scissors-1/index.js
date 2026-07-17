console.clear();

console.log(
  "**************************************\n" +
  "This is a Rock Paper Scissors game!\n" +
  "**************************************"
);

const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Choose r (rock), p (paper), or s (scissors). Any other key quits: ",
  (choice) => {
    const playerInput = choice.toLowerCase();

    if (
      playerInput !== "r" &&
      playerInput !== "p" &&
      playerInput !== "s"
    ) {
      console.log("Game ended.");
      rl.close();
      return;
    }

    // I am using switch twice for readability.
    // I could also compare r, p, and s with numeric values for efficiency.

    let playerChoice;

    switch (playerInput) {
      case "r":
        playerChoice = "rock";
        break;

      case "p":
        playerChoice = "paper";
        break;

      case "s":
        playerChoice = "scissors";
        break;
    }

    const randomNumber = Math.floor(Math.random() * 3);

    let computerChoice;

    switch (randomNumber) {
      case 0:
        computerChoice = "rock";
        break;

      case 1:
        computerChoice = "paper";
        break;

      case 2:
        computerChoice = "scissors";
        break;
    }

    let result;

    if (playerChoice === computerChoice) {
      result = "It's a draw!";
    } else {
      switch (playerChoice) {
        case "rock":
          result =
            computerChoice === "scissors"
              ? "You win!"
              : "Computer wins!";
          break;

        case "paper":
          result =
            computerChoice === "rock"
              ? "You win!"
              : "Computer wins!";
          break;

        case "scissors":
          result =
            computerChoice === "paper"
              ? "You win!"
              : "The computer wins!";
          break;
      }
    }

    console.log(
      `You picked: ${playerChoice}\n` +
      `The computer picked: ${computerChoice}\n` +
      `${result}`
    );

    rl.close();
  }
);