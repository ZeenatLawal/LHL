const assertEqual = require("./assertEqual");

const head = (arr) => {
  if (arr.length > 1 || arr.length === 1) {
    return arr[0];
  } else {
    return "undefined";
  }
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");