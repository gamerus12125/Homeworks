"use strict"

//task 1
const car = { 
    name: 'Lexus', 
    age: 10,
    create: 2008,
    needRepair: false
  };

  if (car.age > 5) {
      console.log("Need Repair");
      car.needRepair = true;
  } else {
      car.needRepair = false;
  }

//task 2


  const item = { 
    name: 'Intel core i7', 
    price: '100$', 
    discount: '15%' 
  };

  if (item.hasOwnProperty("discount") &&  item.discount !== NaN && item.hasOwnProperty("price") && item.price !== NaN){
      item.priceWithDiscount = parseInt(item.price) * parseInt(item.discount) * 0.01;
      console.log(item.priceWithDiscount);
  } else {
      console.log(item.price);
  }

// task 3






  const product = {
    name: 'Яблоко',
    price: '10$'
  };
  
  const min = 10;
  const max = 20;

  if (parseInt(product.price) >= min && parseInt(product.price) <= max) {
      console.log(product.name);
  } else {
      console.log("товар не найден");
  }