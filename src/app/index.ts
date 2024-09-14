

export function add(numbers: string): number {
    if (numbers === "") {
        return 0;
    }

    return Number(numbers);
}

let result = add("");
console.log(result);







// function stringCalculator(...args: number[]) {
//     return args.reduce((accumulator, currentValue) => {
//         return accumulator += currentValue;
//     }, 0);
// }

// let sum = stringCalculator(1,2,3,4,5,6,7,8);


