import dayjs from "dayjs";
import { sum } from "./utils-a.js";

console.log(`sum(11,2) : ${sum(11, 2)}`);

console.log(`tomorrow : ${dayjs().add(1,'d')}`);
