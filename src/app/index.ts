

export function add(numbers: string): number {
    if (numbers === "") {
        return 0;
    }
    let sum: number = 0;
    for (let num of numbers.split(",")) {
        sum = sum + Number(num);
    }
    return sum;
}

let result = add("1,2");
console.log(result);







// function stringCalculator(...args: number[]) {
//     return args.reduce((accumulator, currentValue) => {
//         return accumulator += currentValue;
//     }, 0);
// }

// let sum = stringCalculator(1,2,3,4,5,6,7,8);


