import { separator } from "../utils/regex";

export function add(numbers: string): number {

    let sum:number = 0;
    sum = numbers.split(separator).reduce((accumulator, currentValue)=>{
        return Number(accumulator) + Number(currentValue);
    }, sum);

    return sum;
}

let result = add("1\n2\n4,5");
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


