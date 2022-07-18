// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

export function even_or_odd(n:number):string {
    if (n % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}