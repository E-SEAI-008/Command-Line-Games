const inputPhrase = process.argv(2);

if(!inputPhrase) {
    console.log('Please give me a phrase that the Pigs can translate')
    process.exit(1);
}

const words=inputPhrase.split(" ");
const pigWords=[];

const validVowels=  ["a", "e", "i", "o","u"];