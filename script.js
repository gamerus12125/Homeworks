"use strict";

//task 1
let car = {
  drive: function (time) {
    return time * this.speed;
  },
};
let bmv = {
  model: "m3",
  speed: 280,
};
bmv.__proto__ = car;
let toyota = {
  model: "supra",
  speed: 260,
};
toyota.__proto__ = car;
let mazda = {
  model: "mx 5",
  speed: 220,
};
mazda.__proto__ = car;
console.log(
  bmv.drive(3),
  bmv.drive(10),
  toyota.drive(3),
  toyota.drive(10),
  mazda.drive(3),
  mazda.drive(10)
);
