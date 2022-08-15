const countBits = (n) => {
    let result = 0
    const binarArr = (n).toString(2).split('');
    for (const el of binarArr) {
        result+=Number(el)
    }
    return result;
};

console.log(countBits(1234))