// he goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
//
//     Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(word) {
    let result = ''
    const arr = word.toLowerCase().split('')
    for (const letter of arr) {
        const test = arr.filter(el=>el === letter)
        console.log(test)
        if(test.length > 1){
            result += ')'
        }
        if(test.length === 1){
            result += '('
        }
    }
    return result
}

