// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let vowelsCount = 0;
    
    let arr = str.split('');
    for (let i of arr) {
      if (i === 'a'|| i === 'e'|| i === 'i'|| i === 'o'|| i === 'u') {
        vowelsCount += 1;
      }
    }
    
    return vowelsCount;
}