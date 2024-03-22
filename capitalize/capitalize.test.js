import { capitalize } from "./capitalize.js"

test('capitalize', () => {
    expect( capitalize("haaaello") ).toBe("Haaaello");
})
