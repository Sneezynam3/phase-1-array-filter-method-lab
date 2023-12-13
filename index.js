// Code your solution here
let names = [ 'Sammy', 'Sarah', 'Sally' ];

// function findMatching(names, string) {
// // const result = names.filter((string) => array === string);
//     const newer = [];
//     if (array === string){
//         return newer.s
//     }
//     return array.filter(string)
// };


function findMatching(names, string) {
    return names.filter(name => name.toLowerCase() === string.toLowerCase());
    }
    findMatching("Sammy")

    function fuzzyMatch(names, string) {
        return names.filter(name => name.startsWith(string));
      }
      
      fuzzyMatch(names, "Sa");


    function matchName(drivers, name) {
        return drivers.filter(driver => driver.name === name);
      }











// An arrow function is a concise way to write a function in JavaScript. It was introduced in ES6 (ECMAScript 2015) and provides a more compact syntax compared to traditional function expressions.

// Here's the basic syntax of an arrow function:

// (parameter1, parameter2, ...) => {
// // function body
// }

// Arrow functions have a few key features:

// Shorter Syntax: Arrow functions allow you to write functions with fewer characters and a more streamlined syntax.

// Implicit Return: If the function body consists of a single expression, the arrow function will automatically return the result of that expression without the need for an explicit return statement.

// Lexical this: Unlike traditional functions, arrow functions do not bind their own this value. Instead, they inherit the this value from the enclosing scope. This can be useful when dealing with callbacks or event handlers.

// Here are a few examples to illustrate the usage of arrow functions:

// // Traditional function expression
// const add = function(a, b) {
//   return a + b;
// };

// // Arrow function equivalent
// const add = (a, b) => a + b;

// // Traditional function with multiple statements
// const greet = function(name) {
//   console.log("Hello, " + name + "!");
//   console.log("How are you today?");
// };

// // Arrow function equivalent
// const greet = name => {
//   console.log("Hello, " + name + "!");
//   console.log("How are you today?");
// };

// // Arrow function with implicit return
// const double = num => num * 2;

// // Arrow function with no parameters
// const sayHello = () => console.log("Hello!");

// // Arrow function with multiple parameters
// const multiply = (a, b) => a * b;
// Arrow functions are commonly used in JavaScript, especially when working with array methods like map, filter, and reduce, as they provide a more concise and expressive way to define callback functions.