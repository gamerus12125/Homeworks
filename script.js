"use strict";
// task 1

let c = 0;
let result = c === 0 ? (c = 0) : c < 0 ? (c = "less then zero") : (c *= 10);

console.log(result);

//task 2

function invertedString(str) {
  let string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    string += str[i];
  }
  return string;
}

console.log(invertedString("tseb eht ma i"));

//task 3

const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function eachOddNumber(numbers) {
  const res = [];
  for (let i = 0; i < numbers.length; ++i) {
    if (numbers[i] % 2 !== 0) res.push(numbers[i]);
  }
  return res;
}

console.log(eachOddNumber(Array));

//task 3.1
function oddNumbers(numbers) {
  const res = [];
  for (let i of numbers) {
    if (i % 2 !== 0) res.push(i);
  }
  return res;
}
console.log(oddNumbers(Array));

//task 3.2

//task 4

function getCodeStringFromText(obj) {
  let res = "";

  for (let i = 0; i < obj.length; i++) {
    res += obj.charCodeAt(i) + " ";
  }
  return res.trim();
}
console.log(getCodeStringFromText("hello"));
