// pigLatin.js

// 1. Capture the input phrase from the command line arguments
const inputPhrase = process.argv[2];

// Check if input phrase was provided
if (!inputPhrase) {
    console.log("Please provide a phrase. Example: node pigLatin.js 'hello world'");
    process.exit(1);
}

// 2. Split the phrase into an array of words
const words = inputPhrase.split(" ");
const translatedWords = [];

// Create helper array to check for vowels
const vowels = ["a", "e", "i", "o", "u"];

// 3. Loop through each word to apply the Pig Latin rules
for (let i = 0; i < words.length; i++) {
    let originalWord = words[i];
    let lowerWord = originalWord.toLowerCase();
    let translatedWord = "";

    // Keep track of whether the first letter was uppercase
    let isCapitalized = originalWord[0] === originalWord[0].toUpperCase();

    // Rule 3: Word starts with a vowel
    if (vowels.includes(lowerWord[0])) {
        translatedWord = lowerWord + "way";
    }
    // Rule 2: Word starts with two consonants
    else if (!vowels.includes(lowerWord[0]) && !vowels.includes(lowerWord[1])) {
        translatedWord = lowerWord.substring(2) + lowerWord.substring(0, 2) + "ay";
    }
    // Rule 1: Word starts with one consonant and then a vowel
    else {
        translatedWord = lowerWord.substring(1) + lowerWord.substring(0, 1) + "ay";
    }

    // Restore the original capitalization for the first letter
    if (isCapitalized) {
        translatedWord = translatedWord[0].toUpperCase() + translatedWord.substring(1);
    }

    // Add the newly translated word to our array
    translatedWords.push(translatedWord);
}

// 4. Join the translated words back together into a single string with spaces
const finalOutput = translatedWords.join(" ");

// 5. Output the result to the console
console.log(finalOutput);