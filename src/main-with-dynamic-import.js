import { sum } from "./utils-a.js";
const { mul } = await import("./utils-b.js");

console.log(`sum(11,2) : ${sum(11, 2)}`);
console.log(`mul(11,2) : ${mul(11, 4)}`);
