// function add(a, b) {
//   return a + b;
// }
// console.log(add(3, 2));

// function add2(a, b, c) {
//   console.log(a + b + c);
// }
// // console.log(add(3, 2));
// add2(3,2,2);


// let s = (a,b ) => {
//     console.log(3);
// }
// s()

// let add = (a, b) => { return a + b; };
// console.log(add(2, 3)); // 5

// let wrong = (a, b) => { a + b }; 
// console.log(wrong(2, 3)); // undefined ❌ (no return)

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create a Person object
const S = new Person("John", "Doe", 50, "blue");

console.log(S.lastName);
