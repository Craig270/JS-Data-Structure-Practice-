"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    address,
    time = "20:00",
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  time: "22:30",
  address: "Beech st. 23",
  mainIndex: 2,
  starterIndex: 2,
});

//Destructuring array
const arr = [2, 3, 4];

const [x, y, z] = arr;

// console.log(x, y, z);
// console.log(arr);

// let [first, , third] = restaurant.categories;

// console.log(first, third);

// [first, third] = [third, first];
// console.log(first, third);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);
console.log(starter);

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
//Renaming variables on object's variables when destructuring obj.
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
//Using = to set a default value for a variable that may not be in the object that you are destructuring
// : renames something while = gives it a default value.
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
console.log(a, b);
({ a, b } = obj); // Mutating below here
console.log(a, b);
//Nested Objects use :
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
