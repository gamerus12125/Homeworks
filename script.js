"use strict";

//task 1

function changeCollection() {
  let result = arguments;
  for (let i = 0; i < arguments.length; i += 1) {
    arguments[i].shift();
  }
  return result;
}
console.log(changeCollection(["a", "b", "c"], ["d", "e"]));

//task 2

//task 3
function randomElement(array) {
  let result = array[Math.round(Math.random() * (array.length - 1))];
  return result;
}
console.log(randomElement([1, 2, 3, 4]));
