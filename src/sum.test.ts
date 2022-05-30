const sum = require('./sum');

test("sum 2 and 2 to be equal 4", () => {
	expect(sum(2,2)).toBe(4);
});

test("sum 1 and 2 to be equal 3", () => {
        expect(sum(1,2)).toBe(3);
});

