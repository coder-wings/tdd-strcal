
import { add } from "../app/index.ts";

describe("string calculator should", () => {
    test('return 0 if a empty is passed', () => {
        expect(add("")).toBe(0);
    });

    test('return the number if one number is passed', () => {
        expect(add("1")).toBe(1);
    });
})