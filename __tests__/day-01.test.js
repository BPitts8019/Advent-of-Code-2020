const multiplyEntries = require("../src/day-01/expenseReport").multiplyEntries;
// const partTwo = require("../src/day-01/expenseReport").multiplyEntries;

/*
Part 1 Test Requirements
Find two entries in the expense report that sums to 2020, and return thier product
*/
describe("Day 01a: Expense Report", () => {
   it("Can handle a list with unique values", () => {
      const input = [1234, 220, 354, 4768, 598, 632, 786];
      expect(multiplyEntries(input)).toBe(1234 * 786);
   });
   it("Can handle a list with duplicate values", () => {
      const input = [252, 1768, 1768, 1768, 598, 632, 786];
      expect(multiplyEntries(input)).toBe(252 * 1768);
   });
   it("Can find a result where the two numbers are equal", () => {
      const input = [1768, 1010, 1768, 598, 632, 1010];
      expect(multiplyEntries(input)).toBe(1010 * 1010);
   });
   it("Can fail to find a result", () => {
      const input = [1, 2, 3, 4, 5, 6];
      expect(multiplyEntries(input)).toBe(null);
   });
});

/*
Part 2 Test Requirements
*/
describe("Day 01b: Part 2", () => {});
