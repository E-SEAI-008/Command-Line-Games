console.clear();

console.log(
  "*******************************************\n" +
  "This is an English to Pig Latin translator!\n" +
  "*******************************************\n"
);

const readline = require("node:readline");



const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const vowels = "aeiou";

function countLeadingConsonants(word) {
  let index = 0;

  while (
    index < word.length &&
    !vowels.includes(word[index])
  ) {
    index++;
  }

  return index;
}

function convertToPigLatin(originalWord) {
  const capitalized =
    originalWord[0] === originalWord[0].toUpperCase();

  let word = originalWord.toLowerCase();

  const numberOfLeadingConsonants =
    countLeadingConsonants(word);

  if (numberOfLeadingConsonants === 0) {
    word = word + "way";
  } else {
    word =
      word.slice(numberOfLeadingConsonants) +
      word.slice(0, numberOfLeadingConsonants) +
      "ay";
  }

  if (capitalized) {
    word =
      word[0].toUpperCase() +
      word.slice(1);
  }

  return word;
}

rl.question(
  "Enter an English phrase, or press Enter to quit: ",
  (input) => {
    const trimmedInput = input.trim();

    if (trimmedInput === "") {
      console.log("Program ended.");
      rl.close();
      return;
    }

    const englishList = trimmedInput.split(/\s+/);
    const pigList = [];

    for (const word of englishList) {
      const pigLatinWord = convertToPigLatin(word);
      pigList.push(pigLatinWord);
    }

    console.log(`\nOriginal phrase: \n${trimmedInput}\n`);
    console.log(`Pig Latin: \n${pigList.join(" ")}\n`);

    rl.close();
  }
);