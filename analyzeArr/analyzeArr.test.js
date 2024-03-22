import { analyzeArr } from "./analyzeArr.js"

let expectedObj = {
    average: 4,
    min: 1,
    max: 8,
    length: 6
  };

test('analyzeArr', () => {
    expect( analyzeArr([1,8,3,4,2,6]) ).toStrictEqual(expectedObj);
})
