import { reverseStr } from "./reverseStr.js"

test('reverse string', () => {
    expect( reverseStr("haaaello") ).toBe("olleaaah");
})
