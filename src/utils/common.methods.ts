import { DEFAULT_DELIMITER } from "./constants"

export const getDelimiter = (numbers: string) => {
    if(numbers.indexOf("//") === 0){
        return numbers.substring(2, numbers.indexOf("\n"))
    }
    return DEFAULT_DELIMITER;
}

export const getNumbersString = (numbers: string) => {
    if(numbers.indexOf("//") === 0){
        return numbers.substring(numbers.indexOf("\n"))
    }
    return numbers;
}