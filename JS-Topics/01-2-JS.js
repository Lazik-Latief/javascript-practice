// ============================================
//   LAZIK'S JS LEARNING TRACK — LEVEL 1
//   Topic 1: Variables, Data Types & Scope
//   Topic 2: Operators & Expressions
// ============================================


// ============================================
//  TOPIC 1 — VARIABLES, DATA TYPES & SCOPE
// ============================================


// ─────────────────────────────────────────
//  1.1 Declaring Variables
// ─────────────────────────────────────────

var oldWay = "avoid using var"; // old way — don't use

let score = 0;       // use let when value will change
score = 10;          // ✅ reassigning works

const pi = 3.14;     // use const when value stays the same
// pi = 5;           // ❌ Error — cannot reassign const


// ─────────────────────────────────────────
//  1.2 Data Types
// ─────────────────────────────────────────

// String — text
let name = "Lazik";

// Number — integers and decimals
let age = 21;
let price = 9.99;

// Boolean — true or false
let isLoggedIn = true;

// Undefined — declared but no value given
let city;
console.log(city); // undefined

// Null — intentionally empty
let user = null;

// Object — key value pairs
let person = { name: "Lazik", age: 21 };


// ─────────────────────────────────────────
//  1.3 typeof — checking data types
// ─────────────────────────────────────────

console.log(typeof "Lazik");    // string
console.log(typeof 21);         // number
console.log(typeof true);       // boolean
console.log(typeof undefined);  // undefined
console.log(typeof null);       // object ← known JS quirk


// ─────────────────────────────────────────
//  1.4 Scope
// ─────────────────────────────────────────

// Global Scope — accessible anywhere
let globalName = "Lazik";

function greet() {
  console.log(globalName); // ✅ accessible inside function
}
greet();

// Function Scope — only lives inside the function
function sayHello() {
  let message = "Hello!";
  console.log(message); // ✅ works here
}
// console.log(message); // ❌ Error — not accessible outside

// Block Scope — let and const respect {} blocks, var does NOT
if (true) {
  let blockLet = "I am block scoped";
  const blockConst = "Me too";
  var blockVar = "I ignore block scope!";
}
// console.log(blockLet);   // ❌ Error
// console.log(blockConst); // ❌ Error
console.log(blockVar);      // ✅ 30 — var leaks out (dangerous!)


// ─────────────────────────────────────────
//  1.5 Real World Example — E-commerce Cart
// ─────────────────────────────────────────

const MAX_ITEMS = 10; // never changes

let cartCount = 0; // changes as user adds items

function addToCart() {
  if (cartCount < MAX_ITEMS) {
    cartCount++;
    console.log("Items in cart: " + cartCount);
  } else {
    console.log("Cart is full!");
  }
}

addToCart(); // Items in cart: 1
addToCart(); // Items in cart: 2
addToCart(); // Items in cart: 3




// ============================================
//  TOPIC 2 — OPERATORS & EXPRESSIONS
// ============================================


// ─────────────────────────────────────────
//  2.1 Arithmetic Operators
// ─────────────────────────────────────────

let a = 10;
let b = 3;

console.log(a + b);  // 13 — addition
console.log(a - b);  // 7  — subtraction
console.log(a * b);  // 30 — multiplication
console.log(a / b);  // 3.33 — division
console.log(a % b);  // 1  — remainder (modulus)
console.log(a ** b); // 1000 — exponentiation (10³)

// Modulus real use — even or odd check
let num = 7;
if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd"); // this runs
}


// ─────────────────────────────────────────
//  2.2 Assignment Operators
// ─────────────────────────────────────────

let x = 10;

x += 5;  // x = x + 5 → 15
x -= 3;  // x = x - 3 → 12
x *= 2;  // x = x * 2 → 24
x /= 4;  // x = x / 4 → 6
x **= 2; // x = x ** 2 → 36

console.log(x); // 36


// ─────────────────────────────────────────
//  2.3 Comparison Operators
// ─────────────────────────────────────────

console.log(10 > 5);    // true
console.log(10 < 5);    // false
console.log(10 >= 10);  // true
console.log(10 <= 9);   // false

// == vs === (important!)
console.log(5 == "5");  // true  ← value only, ignores type (avoid)
console.log(5 === "5"); // false ← value AND type (always use this)
console.log(5 != "5");  // false
console.log(5 !== "5"); // true


// ─────────────────────────────────────────
//  2.4 Logical Operators
// ─────────────────────────────────────────

// AND — both must be true
console.log(true && true);   // true
console.log(true && false);  // false

// OR — at least one must be true
console.log(true || false);  // true
console.log(false || false); // false

// NOT — flips the value
console.log(!true);  // false
console.log(!false); // true

// Real world — login check
let isUserLoggedIn = true;
let isAdmin = false;

if (isUserLoggedIn && isAdmin) {
  console.log("Welcome Admin");
} else if (isUserLoggedIn && !isAdmin) {
  console.log("Welcome User"); // this runs
} else {
  console.log("Please login");
}


// ─────────────────────────────────────────
//  2.5 String Operators
// ─────────────────────────────────────────

let firstName = "Lazik";
let lastName = "Dev";

// Concatenation using + (old way)
console.log(firstName + " " + lastName); // Lazik Dev

// Template literals using backticks (preferred — modern)
console.log(`Hello, ${firstName} ${lastName}!`); // Hello, Lazik Dev!


// ─────────────────────────────────────────
//  2.6 Increment & Decrement
// ─────────────────────────────────────────

let count = 0;
count++; // 1
count++; // 2
count--; // 1
console.log(count); // 1


// ─────────────────────────────────────────
//  2.7 Real World Example — Shopping Cart
// ─────────────────────────────────────────

const itemPrice = 499;
let quantity = 3;
const discountPercent = 10;

let total = itemPrice * quantity;
let discount = (total * discountPercent) / 100;
let finalPrice = total - discount;

console.log(`Total: ₹${total}`);              // ₹1497
console.log(`Discount: ₹${discount}`);        // ₹149.7
console.log(`Final Price: ₹${finalPrice}`);   // ₹1347.3
