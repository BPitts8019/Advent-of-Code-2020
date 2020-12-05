const fs = require("fs");
const day01 = require("./expenseReport");

const content = fs.readFileSync("./src/day-01/input-a.txt");
const input = content
   .toString()
   .split("\r\n")
   .map((num) => Number(num));

console.log(day01.multiplyEntries(input));
