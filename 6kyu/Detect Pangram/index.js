// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
//
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
    // get array of alphabet
    const alphabet = []
    for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
        alphabet.push(String.fromCharCode(i))
    }
    // transform string into array without numbers and punctuation
    const arrStringSymbols = string.toLowerCase().split('')
    const arrStringSymbolsWithoutSpace = arrStringSymbols.filter(letter => alphabet.includes(letter))

    for (const el of alphabet) {
        if (!arrStringSymbolsWithoutSpace.includes(el)) {
            return false
        }
    }
    return true
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."))
console.log(isPangram("This is not a pangram"))