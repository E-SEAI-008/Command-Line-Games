class RockPaperScissors {
    userChoice;
    validMoves = ["rock", "paper", "scissors"];
    computerChoice;
    result;


    constructor() {
        console.log("Welcome to Rock Paper Scissors! \n" +
            "Please choose your move: rock, paper, or scissors.");
        this.userChoice = process.argv[2];
        if (!this.userChoice) {
            console.log("Please provide a move: rock, paper, or scissors.");
            process.exit(1);
        }

        this.userChoice = this.userChoice.toLowerCase();

    }

    validateUserChoice() {
        if (!this.validMoves.includes(this.userChoice)) {
            console.log("Invalid move! Please choose rock, paper, or scissors.");
            process.exit(1);
        }
    }

    generateComputerChoice() {
        const randomIndex = Math.floor(Math.random() * this.validMoves.length);
        this.computerChoice = this.validMoves[randomIndex];
    }

    determineWinner() {
        switch (true) {
            case this.userChoice === this.computerChoice:
                this.result = "It's a draw!";
                break;
            case (this.userChoice === "rock" && this.computerChoice === "scissors") ||
                (this.userChoice === "paper" && this.computerChoice === "rock") ||
                (this.userChoice === "scissors" && this.computerChoice === "paper"):
                this.result = "You win!";
                break;
            default:
                this.result = "You lose!";
        }
    }
    displayResult() {
        console.log(
            `You chose ${this.userChoice}, Computer chose ${this.computerChoice}. ${this.result}`,
        );
    }
    playGame() {
        this.validateUserChoice();
        this.generateComputerChoice();
        this.determineWinner();
        this.displayResult();
    }

}

const game = new RockPaperScissors();
game.playGame();





