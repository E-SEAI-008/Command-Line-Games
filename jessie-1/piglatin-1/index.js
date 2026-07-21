
// Just a decorative, clean start to the program
console.clear();

console.log(
  "*******************************************\n" +
  "This is an English to Pig Latin translator!\n" +
  "*******************************************\n"
);

// Prepare to get user input.
// This is a built-in Node.js module, so nothing needs to be installed.
const readline = require("node:readline");

// Create the readline interface for terminal input and output. Needs to be closed later
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Using a Set for membership lookup practice.
// With only five values, a string would also work well.
const vowels = new Set(["a", "e", "i", "o", "u"]);

// searching for the split point, automatically logging if it starts with a vowel by position
function findFirstVowelIndex(word) {
  let index = 0;

  while (index < word.length && !vowels.has(word[index])) {
    index++;
  }

  return index;
}

function convertToPigLatin(originalWord) {
  // Store whether the original word started with an uppercase letter.
  const wasCapitalized =
    originalWord[0] === originalWord[0].toUpperCase();

  const word = originalWord.toLowerCase();
  const splitIndex = findFirstVowelIndex(word);

  let translatedWord;

  // Word starts with a vowel.
  if (splitIndex === 0) {
    translatedWord = word + "way";
  } else {
    // Word starts with one or more consonants.
    translatedWord =
      word.slice(splitIndex) +
      word.slice(0, splitIndex) +
      "ay";
  }

  // Restore capitalization.
  if (wasCapitalized) {
    translatedWord =
      translatedWord[0].toUpperCase() +
      translatedWord.slice(1);
  }

  return translatedWord;
}

// rl.question passes the user's response to the callback function
// instead of returning it directly.
rl.question(
  "Enter an English phrase, or press Enter to quit: ",
  (input) => {
    // Store the input without leading or trailing whitespace.
    const trimmedInput = input.trim();

    if (trimmedInput === "") {
      console.log("Program ended.");
      rl.close(); // Close the readline interface.
      return; // Treat empty input as an intentional quit.
    }

    const pigLatinPhrase = trimmedInput
      .split(/\s+/) // Split on one or more whitespace characters.
      .map(convertToPigLatin) // Translate each word into a new array.
      .join(" "); // Join the translated words back into a string.

    console.log(`\nOriginal phrase:\n${trimmedInput}\n`);
    console.log(`Pig Latin:\n${pigLatinPhrase}\n`);

    rl.close(); // Close the readline interface.
  }
);
