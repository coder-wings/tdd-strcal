
import { add } from "../app/index.ts";

describe("string calculator should", () => {
    test('return 0 if a empty string is passed', () => {
        expect(add("")).toBe(0);
    });

    test('return the number if string of one number is passed', () => {
        expect(add("1")).toBe(1);
    });

    test('return sum of two numbers if string of comma separated two numbers is passed', () => {
        expect(add("1,2")).toBe(3);
    });
    
    test('return sum of three numbers if string, which has \n or , between numbers, is passed', () => {
        expect(add("1\n2,3")).toBe(6);
    });
})