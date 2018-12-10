const sequence = require("../sequence.js");

describe("sequence", () => {
    test("input value 3 returns 3 items in an array", () => {
        expect(sequence(3)).toEqual([0,1,1])
    })
})