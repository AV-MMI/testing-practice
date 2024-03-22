import { caesarCipher } from "./caesarCipher";

test("caesarCipher shifts", () => {
    expect( caesarCipher("ZZZzC", 1) ).toBe("AAAaD")
} )