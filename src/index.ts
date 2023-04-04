const ner: string = "Etoyaa";
const age: number = 19;

console.log("ner", ner);
console.log("age", age);

let sum: number;
const a: number = 5;
const b: number = 10;

const findSum = (a: number, b: number) => {
  sum = a + b;
  console.log("a", a);
  console.log("b", b);
  console.log("sum", sum);
  return sum;
};

type ReturnTypes = number;

function findSumm(a: number, b: number): ReturnTypes {
  sum = a + b;
  console.log("a", a);
  console.log("b", b);
  console.log("sum", sum);
  return sum;
}

findSum(a, b);
