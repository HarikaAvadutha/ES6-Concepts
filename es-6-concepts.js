// Rest Operator

function sumAll(...args) {
  // args is the name for the array
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

alert(sumAll(1)); // 1
alert(sumAll(1, 2)); // 3
alert(sumAll(1, 2, 3)); // 6

// Note: The rest parameters must be at the end

// ************************************************************ //
// Spread Operator

let arr = [3, 5, 1];

alert(Math.max(arr)); // NaN

let arr = [3, 5, 1];

alert(Math.max(...arr)); // 5 (spread turns array into a list of arguments)

// Can combine multiple spread operators and can add in middle
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert(Math.max(1, ...arr1, 2, ...arr2, 25)); // 25

// ************************************************************ //

/* Extended Object Literals simplify object creation and composition by reducing the required amount of typing with some syntactic sugar. */

let a = 'somestring';
let b = 5;
let c = { key: 'value' };

var es5 = { a: a, b: b, c: c };
var es6 = { a, b, c }; // Property name is inferred from variable name

/*
ES6:
0b111110111 === 503
0o767 === 503

ES5:
parseInt("111110111", 2) === 503;
parseInt("767", 8) === 503;
*/

// ************************************************************ //

//String literals

let name = 'Harika';
console.log(`Hello, ${name}!`); // Output - Hello Harika

console.log(String.fromCodePoint(65, 90)); // Output - AZ

// ************************************************************ //

// New Array methods:

// Array.from
Array.from(object, { mapFunction, thisValue }); //Syntax

let name = Array.from('Harika');

console.log(name); // Output - ['H','a','r','i','k','a']

// Array.of - creating an array only with a single numeric value, will create an array only with that value instead of creating the array of that size.
let age = Array.of(22);
console.log(`Age is ${age} an array length is ${age.length}`); // Output - Age is 22 an array length is 1

// Array.prototype.copyWithin() - copies the part of an array to a different location within the same array
// array.copyWithin(target, start, end) - Syntax
const num = [1, 2, 3, 4, 5];
const num1 = [1, 2, 3, 4, 5];
const num2 = [1, 2, 3, 4, 5];
console.log(num.copyWithin(1, 2, 4)); // [1, 3, 4, 4, 5]
console.log(num1.copyWithin(1, 3)); //omitting the parameter end - [1, 4, 5, 4, 5]
console.log(num2.copyWithin(1)); //omitting the parameters start and end - [1, 1, 2, 3, 4]

// Array.prototype.find()
// array.find(callback(currentValue, index, arr),thisValue)  - Syntax
var arr = [5, 22, 19, 25, 34];
var result = arr.find((x) => x > 20);
console.log(result); // 22

// Array.prototype.entries()

let colours = ['Red', 'Yellow', 'Blue', 'Black'];
let show = colours.entries();

console.log(...show); // spread operator

/*
[ 0, 'Red' ]
[ 1, 'Yellow' ]
[ 2, 'Blue' ]
[ 3, 'Black' ]
*/

// ************************************************************ //
// New string methods

// startsWith() method - string.startsWith(searchValue, startPosition)

let str = 'My name is harika';
console.log(str.startsWith('My', 0)); //true
console.log(str.startsWith('name', 0)); //false

// endssWith() method - string.endsWith(searchValue, length)

let str = 'My name is harika';
console.log(str.endsWith('is', 10)); //true
console.log(str.endsWith('Is', 10)); //false

// includes() method - string.includes(searchValue, start)

let str = 'My name is harika';

console.log(str.includes('name', 2)); //true
console.log(str.includes('is', 11)); //false

// repeat() method - string.repeat(count)
let str = 'My name is harika ';
console.log(str.repeat(3)); // My name is harika My name is harika My name is harika

// ************************************************************ //
// Generator functions:

function* gen() {
  yield 100;
  yield;
  yield 200;
}
// Calling the Generator Function
var mygen = gen();
console.log(mygen.next().value); // 100
console.log(mygen.next().value); // Undefined
console.log(mygen.next().value); // 200
