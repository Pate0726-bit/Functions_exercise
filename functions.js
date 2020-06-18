// This function returns a random number between (and including both) minimum and maximum

// rupal patel
// june 17 2020

function getRandomInteger (minimum, maximum) {
  minimum = Math.ceil(minimum) // minimum is inclusive
  maximum = Math.floor(maximum + minimum) // maximum is exclusive so we add one
  return Math.floor(Math.random() * (maximum - minimum)) + minimum
}

const nouns = ['dragons', 'toasters', 'system', 'world', 'music', 'food', 'knowledge', 'people', 'fact', 'media']

const verbs = ['walked', 'ran', 'stoped', 'built', 'understand', 'lost', 'reached', 'paid', 'required', 'allowed']

const adverbs = ['menacingly', 'intentionally', 'beautifully', 'soon', 'everywhere', 'lazily', 'really', 'very', 'intentionally', 'awkwardly']

const adjectives = ['wild', 'slippery', 'vast', 'helpless', 'scary', 'silly', 'narrow', 'thankfull', 'short', 'worried']

const proNouns = ['they', 'we', 'you', 'he', 'she', 'I', 'it']

const openings = ['Once upon a time', 'I watched', 'call me', 'i carry with me', 'it is best time', 'transpostition', 'generally', 'it was dark night', 'it was stormy night', 'it is good time']

const closings = ['with extra cheese', 'the end', 'the empty ', 'clearing', 'i hope so', 'see you', 'once more', 'thank you for your help', 'nice to meet you ', 'i really appreciate']

function createRandomSentence () { // Rupal use camel case which uses uppercase to seperate words
  const randomSentence = openings[getRandomInteger(0, openings.length - 1)] + ' ' + // camel case for randomSentence too!

        adjectives[getRandomInteger(0, adjectives.length - 1)] + ' ' +

  // random adjective

        // random verbs
        verbs[getRandomInteger(0, verbs.length - 1)] + ' ' + // Rupal you missed the space here you had ''

        // random adverbs
        adverbs[getRandomInteger(0, adverbs.length - 1)] + ' ' +

        // random nouns
        nouns[getRandomInteger(0, nouns.length - 1)] + ', ' + // Rupal I added a comma here

        // random pronouns
        proNouns[getRandomInteger(0, proNouns.length - 1)] + ' ' +

        // random closigns
        closings[getRandomInteger(0, closings.length - 1)] + '.' // Rupal you need a period here

  return randomSentence // Rupal you were missing this return statement
} // Rupal you were missing this closing curly brace

function outputSentence (sentence) { // camel case for outputSentence too!
  console.log(sentence)
  console.log('\n') // Rupal I added a new line between sentences
}

const numberOfSentences = 10 // camel case for numberOfSentences too!

for (let i = 0; i < numberOfSentences; i++) {
  const randomSentence = createRandomSentence() // camel case for numberOfSentences too!
  outputSentence(randomSentence)

  // outputsentence(createrandomsentence)
}

// Instructions:

// Arrays:
// Each provided array (except for proNouns) must have at least 10 elements (words or phrases)
// Add/replace words to each array based on any theme you like (keep it tasteful!)
// You do not have to use the example words in any of the provided arrays

// Functions:

// First function:
// Create a function that outputs the text/value sent to it using console.log()
// There should be a newline ("\n") both before and after the value is output
// Name this function appropriately
// Note this function does not return any value

// Second function:
// Create a function that builds a sentence using the 7 provided arrays
// Using the provided getRandomInteger function you will randomly use content from each array based on the random number returned by getRandomInt.
// Because you are using an array the minimum value should always be zero
// The maximum value should be the array length - 1

// The sentence created (concatinated) inside this function should be structured like this:
//      Get a random element from the openings array and add it to your new sentence
//      add a space (and  punctuation if you wish)
//      next get a random element from the adjectives array and add it to your sentence
//      add a space (and  punctuation if you wish)
//      next get a random element from the nouns array and add it to your sentence
//      add a space (and  punctuation if you wish)
//      next get a random element from the pro_nouns array and add it to your sentence
//      add a space (and  punctuation if you wish)
//      next get a random element from the verbs array and add it to your sentence
//      add a space (and  punctuation if you wish)
//      next get a random element from the adverbs array and add it to your sentence
//      add a space (and  punctuation if you wish)
//      next get a random element from the adjectives array and add it to your sentence
//      add closing punctuation.

// Note Feel free to re-arrange your sentence as you wish, just make sure you use the 7 provided arrays
// Note add more arrays if you wish

// Name this function appropriately
// This function should return the completed sentence

// Program Flow:

// inside a loop that repeats 10 times

// Your program will call the "sentence creating" function that you are required to build
// using a new variable you will capture the returned value (the sentence) from this function. Name this variable appropriately

// next you will send this variable to the other function you created used for output
// this will result in your random sentence being output.

// Other considerations:
// Everyones code should be different
// This is a fun exercise so... have fun!

// Submission
// Submit your GitHub repo URL through the LMS.
