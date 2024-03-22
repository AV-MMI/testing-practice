import { calculator } from "./calculator.js"

test('add', () => {
    expect( calculator.add(2, 3) ).toBe(5);
})


test('substract', () => {
    expect( calculator.substract(3, 3) ).toBe(0);
})


test('divide', () => {
    expect( calculator.divide(6, 3) ).toBe(2);
})


test('multiply', () => {
    expect( calculator.multiply(2, 3) ).toBe(6);
})
