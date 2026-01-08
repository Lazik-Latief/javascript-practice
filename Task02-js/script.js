// Creating an object oj1 with different properties
let oj1 = {
  name: "Lazik", // string value
  age: 22, // number value

  // nested object (object inside object)
  address: {
    city: "srinagar",
    village: "watlab",
  },

  Number: 9797685148, // phone number
  working: true, // boolean value
};

// Print complete object oj1
console.log(oj1);

// Update nested object property
oj1.address.village = "nowpore";

// Print updated object
console.log(oj1);

// Create another object oj2
let oj2 = {
  name: "lone",
  age: 24,
  job: false,
};

// Print oj2
console.log(oj2);

// Create object that contains oj1 and oj2 as properties
let oj3 = { oj1, oj2 };

// Print nested objects
console.log(oj3);

// Merge oj1 and oj2 using spread operator
// NOTE: same keys will be overwritten by oj2
let oj4 = { ...oj1, ...oj2 };

// Print merged object
console.log(oj4);

// Access object value using bracket notation
console.log(oj1["age"]);

// Create a symbol (unique data type)
const mySym = Symbol("key1");

// Create object with a normal key named "mySym"
let jsUser = {
  mySym: "myKey1",
};

// Print object
console.log(jsUser);

// Print type of symbol
console.log(typeof mySym);

// Merge objects using Object.assign()
// Target object is oj1 (it will be modified)
let oj7 = Object.assign(oj1, oj2, jsUser);

// Print merged result
console.log(oj7);

// Simple function
function hey() {
  console.log("hello ");
}

// Call function
hey();

// Log object and function call result
console.log(oj1, hey());

// String variable
let kkk = "azhar lone";

// Template literal (function reference printed, not called)
console.log(`hello js user , ${hey}`);

// Template literal with variable
console.log(`hiii , ${kkk}`);

// Function with no return value
function g() {
  "hii jnnii ";
}

// Template literal (function NOT executed here)
console.log(`g(),${kkk}`);

// Create a new object newObj
let newObj = {
  name: "azhar lone",
  age: 23,
  study: true,
  job: false,

  // nested object
  address: {
    villege: "Watlab",
    City: "Srinagar",
  },

  number: 7889943194,
  learningReact: true,
};

// Print object
console.log(newObj);

// Update object property
newObj.number = 9797685148;
console.log(newObj);

// Freeze object (no changes allowed now)
Object.freeze(newObj);

// This change will NOT work because object is frozen
newObj.number = 7889943194;

// Print object after freeze
console.log(newObj);

// Create course object
const course = {
  name: "Lukman Latief",
  course: "Web Development",
  teacher: "Lazik",
  price: 4999,
};

// Access property normally
course.teacher;

// Object destructuring
const { teacher } = course;
console.log(teacher);

// Destructure name
const { name } = course;
console.log(name);

// Destructure and rename variable
const { teacher: sir } = course;
console.log(sir);

// Functions >

// This function takes two parameters (a and c)
// It adds them and prints the result
function addNum(a, c) {
  console.log(a + c); // logs sum directly
  const result = a + c; // stores sum in a variable
  console.log(result); // logs stored result
}

// Called without arguments → a and c become undefined
addNum();

// Called with values → works correctly
addNum(3, 7);

// This function handles login message
function login(userName) {
  // Template string for message
  let ss = `${userName} just logge in `;
  console.log(ss); // prints login message
}

// Function calls with different usernames
login("Lazik");
login("zooonii");

// Logout function
function logout(who) {
  let aa = `${who} just logge out`; // message created
  console.log(aa); // message printed
}

logout("Rayyan");
logout("wasif");
logout("Lukman");

// Login function with validation
function Login(username) {
  // Check if username is not provided
  if (username === undefined) {
    console.log("please enter username");
    // return stops function execution (but commented here)
  }

  console.log("this part is reachable");

  // Function returns this string
  return `${username} just logge in`;

  // This will never run because return is above
  console.log(
    "this part is unreachable cz after retrun only i thing gets returne "
  );
}

// Called without argument
Login();

// Called with argument
Login("Muzu");

// Logs returned value
console.log(Login("Muzu2"));

// Rest parameter example
function calculateCart(...num) {
  // num becomes an array of all arguments
  console.log(num);
}

calculateCart(211, 333, 55, 44, 77, 121);

// Function with normal + rest parameters
function calPrice(val1, val2, ...num) {
  console.log(num); // remaining values as array
  console.log(val1, val2, ...num); // all values printed
}

calPrice(77, 88, 44, 5, 555, 55, 66, 6);

// Object example
const user = {
  username: "Lazik Lone",
  age: 23,
  job: true,
};

// Function that accepts an object
function handleObject(anyobject) {
  console.log(
    `username is ${anyobject.username} and age is ${anyobject.age} and is job ${anyobject.job}`
  );
}

// Passing object to function
handleObject(user);

// Array example
const newArray = [55, 99, 33, 7];

// Function that returns value from array
function returnValue(getArray) {
  return getArray[1]; // returns second element
}

console.log(returnValue(newArray));
console.log(returnValue([44, 22, 8, 33]));

// =======================
// SCOPES IN JAVASCRIPT
// =======================

// let a = 10        // block scoped (only inside its block)
// const h = 40      // block scoped
// var p = 99        // function scoped (not block scoped)

// var p = 77       // var allows re-declaration (not recommended)

let a = 80;         // global scope variable

// -----------------------
// BLOCK SCOPE
// -----------------------
if (true) {
  let a = 10;       // this 'a' is block scoped (different from global 'a')
  const h = 40;     // const is also block scoped
  // var p = 50     // var ignores block scope and becomes global

  console.log("Inner >", a); // prints 10 (block variable)
}

console.log(a); // prints 80 (global 'a')

// ❌ Error: h is not defined (because h is block scoped)
// console.log(h);

// ❌ Error if var p is commented everywhere
// console.log(p);

// -----------------------
// NESTED SCOPE
// -----------------------
function one() {
  const username = "LAZIK"; // function scope

  function two() {
    const website = "YOUTUBE"; // inner function scope
    console.log(username);     // ✅ inner function can access outer variables
  }

  // ❌ Error: website is not defined (belongs to function two)
  // console.log(website);

  two();
}
one();

// -----------------------
// BLOCK + NESTED IF
// -----------------------
if (true) {
  const username = "Lazik"; // block scope

  if (username === "Lazik") {
    const website = " Portfolio"; // inner block scope
    console.log(username + website); // ✅ accessible here
  }

  // ❌ Error: website is block scoped
  // console.log(website);
}

// ❌ Error: username is block scoped
// console.log(username);

// =======================
// HOISTING
// =======================

// Function declaration is hoisted
function adone(num) {
  return num + 1;
}

adone(8); // ✅ works because function declaration is hoisted

// ❌ Error: Cannot access 'adtwo' before initialization
// adtwo(4);

const adtwo = function (num) {
  return num + 1;
};

adtwo(5); // ✅ works after initialization

// Arrow Functions & `this` keyword
// ES6+

// Object with a method
const User = {
  name: "LaZIK",
  price: 999,

  // Normal function → `this` refers to the object (User)
  welcome: function () {
    console.log(`${this.name}, welcome to page`);
    console.log(this); // shows the User object
  }
}

// Just referencing the function (not calling it)
User.welcome

// Calling the function → works
User.welcome()

// Updating object property
User.name = "AZHAr"

// `this.name` now uses updated value
User.welcome()

// In Node.js (VS Code terminal), `this` here is an empty object {}
// In browser, `this` refers to the window object
console.log(this);

// Normal function (NOT inside object)
function One() {
  let username = "RaYYAN"

  // `this.username` is undefined
  // because `this` does NOT refer to function variables
  console.log(this.username);

  // In Node.js → empty object {}
  // In browser → window object
  console.log(this);
}
One()

// -----------------------------
// `this` in function expressions

// Normal function expression
// const chai = function () {
//   let username = "Lukman"
//   console.log(this.username); // undefined
//   console.log(this); // depends on environment
// }
// chai()

// Arrow function
// Arrow functions DO NOT have their own `this`
// They take `this` from their surrounding scope
// const chai = () => {
//   let username = "Lukman"
//   console.log(this); // usually {}
// }
// chai()

// -----------------------------
// Arrow function return types

// Explicit return (when using curly braces {})
// const plus = (a, c) => {
//   return a + c
// }

// Implicit return (no {} → return is automatic)
const plus = (a, c) => a + c

console.log(plus(9, 5));

// NOTE:
// If returning an object using arrow function,
// wrap it in parentheses ()
// Example:
// const getUser = () => ({ name: "Lazik" })

// Immediately Invoked Function Expressions (IIFE)
// IIFE runs immediately after it is defined

// Normal function example
// function hi(){
//   console.log("Connect hogaya");
// }
// hi()

// IIFE syntax needs parentheses () to avoid errors
// Semicolon is important to stop previous code execution issues

(function hi(){
  // Named IIFE
  // Executes immediately after definition
  console.log("connect hogaya");
})();

(() =>{
  // Arrow function IIFE
  // Useful for short, clean execution
  console.log("connected now");
})();

((name)=>{
  // IIFE with parameter
  // Helps pass data safely without polluting global scope
  console.log(`connected with ${name}`);
})("LAZIK-LONE");
