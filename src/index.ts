import { getDelimiter, getNumbersString } from "./utils/common.methods";

export function add(numbers: string): number {
    const delimiter = getDelimiter(numbers);
    const numsStr = getNumbersString(numbers);
    let sum: number = 0;
    let negativeNumbers: number[] = [];

    sum = numsStr.split(delimiter).reduce((accumulator, currentValue, currentIndex) => {

        if (Number(currentValue) < 0) {
            negativeNumbers.push(Number(currentValue));
        }
        return Number(accumulator) + Number(currentValue);

    }, sum);

    if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join()}`);
    }

    return sum;
}

let result = add("1,2,4,5,6");
console.log(result);




// if (numbers === "") {
//     return 0;
// }

// let sum: number = 0;
// for (let num of numbers.split(",")) {
//     sum = sum + Number(num);
// }
// return sum;


// function stringCalculator(...args: number[]) {
//     return args.reduce((accumulator, currentValue) => {
//         return accumulator += currentValue;
//     }, 0);
// }

// let sum = stringCalculator(1,2,3,4,5,6,7,8);


