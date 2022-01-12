const getGivenDigitFreq = (num, digit) => {
    let count = 0;
    num = Number(num);
    while (num) {
        let remainder = num % 10;
        if (remainder === digit) count++;
        num = Math.floor(num / 10);
    }
    return count;
}

console.log(getGivenDigitFreq(552544, 1));

