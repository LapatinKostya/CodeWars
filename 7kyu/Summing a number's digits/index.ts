// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
//
// For example: (Input --> Output)
//
// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

export function sumDigits(n: number): number {
    let result: number = 0
    const arrOfNum: Array<string> = n.toString().split('')
    for (const el of arrOfNum) {
        if (el !== '-') {
            const numberEl: number = Number(el)
            result += numberEl
        }
    }
    return result
}