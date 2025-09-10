// const points = [40];
// console.log(points.length);

// const point = new Array(40);
// console.log(point.length);

// let age = prompt("Enter your age:");
// age = Number(age); // OR use +age shorthand
// console.log("You are " + age + " years old.");

// var cars = ["Volvo", "BMW"];     // Allowed
const cars = ["Volvo", "BMW"];   // Not allowed
console.log(cars);
{
//   var cars = ["Volvo", "BMW"];   // Allowed
  const cars = ["Volvo", "BMW"]; // Not allowed
  console.log(cars);
}
(function () {
  let x = "Hello!!";  // I will invoke myself
  console.log(x);
})();
// console.log(cars);

const arr = [1, 2, 3, 4, 5];
const productOfAllNums = arr.reduce((total, currentItem) => {
    console.log(`Total : ${total} , current ${currentItem}`);
    
//   return total * currentItem;
}, 1);
console.log(productOfAllNums); // Outputs 120;
console.log(arr); // Outputs [1, 2, 3, 4, 5]

function greet(name) {
  console.log("Hello " + name);
}

function processUserInput(callback) {
  const name = "Sahil";
  callback(name); // calls greet("Sahil")
}

processUserInput(greet);

