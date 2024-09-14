import { getDelimiter, getNumbersString } from "./utils/common.methods";

export function add(numbers: string): number {
    const delimiter = getDelimiter(numbers);
    const numsStr = getNumbersString(numbers);
    let sum: number = 0;
    let negativeNumbers: number[] = [];

    sum = numsStr.split(delimiter).reduce((accumulator, currentValue) => {

        if (Number(currentValue) < 0) {
            negativeNumbers.push(Number(currentValue));
        }
        return Number(accumulator) + (Number(currentValue) <= 1000 ? Number(currentValue) : 0);

    }, sum);

    if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join()}`);
    }
    return sum;
}

let result = add("//***\n25***200***100");
console.log(result);




