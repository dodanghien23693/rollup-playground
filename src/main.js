import dayjs from "dayjs";
import { sum } from "./utils-a.js";

console.log(`sum(11,2) : ${sum(11, 4)}`);

console.log(`tomorrow : ${dayjs().add(1,'d')}`);

let count = 0
export function total(a, b) {
    return a + b
}

export function increase() {
    count++
}

function getCount() {
    return count
}
