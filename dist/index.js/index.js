"use strict";
const ner = "Etoyaa";
const age = 19;
console.log("ner", ner);
console.log("age", age);
let sum;
const a = 5;
const b = 10;
const findSum = (a, b) => {
    sum = a + b;
    console.log("a", a);
    console.log("b", b);
    console.log("sum", sum);
    return sum;
};
function findSumm(a, b) {
    sum = a + b;
    console.log("a", a);
    console.log("b", b);
    console.log("sum", sum);
    return sum;
}
findSum(a, b);
console.log("findSumm(a, b)", findSumm(a, b));
