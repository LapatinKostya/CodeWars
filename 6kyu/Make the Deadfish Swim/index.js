// Write a simple parser that will parse and run Deadfish.
//
//     Deadfish has 4 commands, each 1 character long:
//
//     i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.
//
// parse("iiisdoso") => [ 8, 64 ]

function parse(data) {
    let value = 0;
    let dataCommand = data.split('')
    let result = []
    for (let i of dataCommand) {
        if (i === 'i') {
            value++
        }
        if (i === 'd') {
            value--
        }
        if (i === 's') {
            value = value ** 2
        }
        if (i === 'o') {
            result.push(value)
        }
    }
    return result
}
