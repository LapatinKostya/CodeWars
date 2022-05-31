// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.


function highAndLow1(numbers) {
    let arrOfNumbers1 = numbers.split(' ');
    let arrOfNumbers2 = []

    for (let i of arrOfNumbers1) {
        arrOfNumbers2.push(Number(i))
    }
    let maxNum = Math.max(...arrOfNumbers2);
    let minNum = Math.min(...arrOfNumbers2);

    return maxNum.toString() + ' ' + minNum.toString();
}

// Refactor

function highAndLow2(numbers){
    let arrOfNumbers = numbers.split(' ').map(Number);
    let maxNum = Math.max(...arrOfNumbers);
    let minNum = Math.min(...arrOfNumbers);
    return maxNum + ' ' + minNum
}
