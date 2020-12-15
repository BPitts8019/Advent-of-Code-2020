const fs = require("fs");
const day02 = null;

const content = fs.readFileSync("./src/day-02/input.txt");
const input = content.toString().split("\r\n");

console.log(`Num Passwords: ${input.length}`);
