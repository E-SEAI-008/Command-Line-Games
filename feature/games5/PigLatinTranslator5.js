// Create a program that translates english to Pig Latin

const sentence = process.argv.slice(2)

console.log(sentence)

console.log(sentence.length)

const sentenceArray = sentence[0].split(" ")

console.log(sentenceArray)


const newSentence = []

let len = sentenceArray.length;

const vowels = ["a", "e", "i", "o", "u"]

console.log(len)

const i = 0


for (let i = 0; i < len; i++) {
    if (vowels.includes(sentenceArray[i][0].toLowerCase())) {
        const newWord = sentenceArray[i] + "way"
        newSentence.push(newWord)
    } else if (!vowels.includes(sentenceArray[i][0].toLowerCase()) && vowels.includes(sentenceArray[i][1].toLowerCase())) {
        const newWord = sentenceArray[i].slice(1) + sentenceArray[i].slice(0,1) + "ay"
        newSentence.push(newWord)
    } else {
        const newWord = sentenceArray[i].slice(2) + sentenceArray[i].slice(0,2) + "ay"
        newSentence.push(newWord)
    }
    
}

console.log(newSentence)