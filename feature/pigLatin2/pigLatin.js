// Get the phrase from the command line
const inputPhrase = process.argv[2];

// Check if the user entered a phrase
if (!inputPhrase) {
  console.log("Please give me a phrase that the Pigs can translate");
  process.exit(1);
}

// Split the sentence into separate words
const words = inputPhrase.split(" ");

// Array where we will store the translated words
const pigWords = [];

// List of vowels
const validVowels = ["a", "e", "i", "o", "u"];

// Go through every word
for (let i = 0; i < words.length; i++) {

  // Get the current word
  const currentWord = words[i];

  // Get the first letter of the word
  const firstLetter = currentWord[0];

  // Make it lowercase only for checking
  const lowerFirstLetter = firstLetter.toLowerCase();

  // Case 1: Word starts with a vowel
  if (validVowels.includes(lowerFirstLetter)) {

    pigWords.push(currentWord + "way");

  } else {

    // Get the second letter
    const secondLetter = currentWord[1];

    // Make it lowercase for checking
    const lowerSecondLetter = secondLetter.toLowerCase();

    // Case 2: Word starts with two consonants
    if (!validVowels.includes(lowerSecondLetter)) {

      const newWord = currentWord.slice(2) + currentWord.slice(0, 2) + "ay";

      pigWords.push(newWord);

    } else {

      // Case 3: Word starts with one consonant
      const newWord = currentWord.slice(1) + currentWord[0] + "ay";

      pigWords.push(newWord);
    }
  }
}

// Join the translated words back into a sentence
console.log(pigWords.join(" "));