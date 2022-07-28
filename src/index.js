module.exports = function toReadable(number) {
    const result = getNumber(number);
    console.log(result);
    return result;
}

function getNumber(number) {
    let result = "";

    if (number >= 0 && number <= 9) {
        result = singleNumber(number);
    } else if (number >= 10 && number <= 19) {
        result = double1Number(number);
    } else if (number >= 20 && number <= 99) {
        result = double2Number(number)
    } else if (number >=100 && number <= 999) {
        result = tripleNumber(number)
    }

    return result;
}

function singleNumber(number) {
    const arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    return arr[number];
}

function double1Number(number) {
    const arr = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    return arr[(number - 10)];
}

function double2Number(number) {
    const arr = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    if (number % 10 !== 0) {
        const singleNumberValue = singleNumber(number % 10);
        return arr[(Math.floor(number / 10)) - 2] + " " + singleNumberValue;
    } else if (number % 10 === 0) {
        return arr[(number / 10) - 2];
    }
}

function tripleNumber(number) {
    const hundred = "hundred";
    const singleNumberValue = singleNumber(Math.floor(number / 100));
    if (number % 100 !== 0) {
        return singleNumberValue + " " + hundred + " " + getNumber(number % 100);
    } else if (number % 100 === 0) {
        return singleNumberValue + " " + hundred;
    }
}
