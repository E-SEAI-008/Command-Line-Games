// Rock Paper Scissors 

// Implement a basic Rock Paper Scissors game

// const moveHumanHand = process.argv(arg);

const array = process.argv.slice(2);

const moveHumanHand = array[0]

console.log(`Human chose ${moveHumanHand}`)



// const possibleMoves = ["rock", "paper", "scissor"]

const possibleMoves = ["rock", "paper", "scissor"]

    
    // generating a random Index bei flooring the result of M.r*i.l
    // Math.random gets a float number between 0 and 1 by multiplying
    // this number with the length we can extend the possible index by 4
    // its like "how many possible random indices are there? we need
    // to check this for every index"
const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    // now we need to extract the move from out possbile move-array
const movePcHand = possibleMoves[randomIndex]

console.log(`Pc chose ${movePcHand}`)
 
if (movePcHand === moveHumanHand) {
    console.log("It's a draw");

} else if (movePcHand === "rock" && moveHumanHand === "paper") {
    console.log("PC won!")

} else if (movePcHand === "paper" && moveHumanHand === "rock") {
    console.log("Pc won!")

} else if (movePcHand === "paper" && moveHumanHand === "scissor") {
    console.log("Human won!")

} else { 
    console.log("Human won!")
}

