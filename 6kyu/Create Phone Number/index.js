// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
//
//     Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
//
//     Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers) {
    let str1 = ''
    let str2 = ''
    let str3 = ''

    for (let i = 0; i < numbers.length; i++) {
        if (i < 3) {
            str1 += numbers[i]
        }
        if (i >= 3 && i < 6) {
            str2 += numbers[i]
        }
        if (i >= 6) {
            str3 += numbers[i]
        }
    }

    return `(${str1}) ${str2}-${str3}`
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))