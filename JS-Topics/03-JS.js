// ============================================
//   LAZIK'S JS LEARNING TRACK — LEVEL 1
//   Topic 3: Conditionals
// ============================================


// ─────────────────────────────────────────
//  3.1 if / else if / else
// ─────────────────────────────────────────

let age = 20;

if (age >= 18) {
  console.log("You can vote"); // this runs
} else {
  console.log("Too young to vote");
}

// Multiple conditions
let score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B"); // this runs
} else if (score >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}


// ─────────────────────────────────────────
//  3.2 switch — cleaner for multiple exact values
// ─────────────────────────────────────────

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week"); // this runs
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  case "Sunday":
    console.log("Rest day");
    break;
  default:
    console.log("Regular day");
}

// NOTE: Always add break after each case
// Without break, JS runs all cases below it (called "fall-through")


// ─────────────────────────────────────────
//  3.3 Ternary Operator — one line if/else
// ─────────────────────────────────────────

// Syntax: condition ? valueIfTrue : valueIfFalse

let userAge = 20;
let result = userAge >= 18 ? "Adult" : "Minor";
console.log(result); // Adult

let isLoggedIn = true;
console.log(isLoggedIn ? "Welcome back!" : "Please login"); // Welcome back!

// NOTE: Use ternary for simple conditions only
// For complex logic, stick to if/else


// ─────────────────────────────────────────
//  3.4 Short Circuit Evaluation
//  (used a lot in React)
// ─────────────────────────────────────────

// && — if left is false, right never runs
let loggedIn = false;
loggedIn && console.log("Show dashboard"); // nothing runs

let loggedIn2 = true;
loggedIn2 && console.log("Show dashboard"); // Show dashboard ✅

// || — if left is falsy, use right as default
let username = "";
let displayName = username || "Guest";
console.log(displayName); // Guest

let username2 = "Lazik";
let displayName2 = username2 || "Guest";
console.log(displayName2); // Lazik


// ─────────────────────────────────────────
//  3.5 Real World Example — Dashboard Access
// ─────────────────────────────────────────

let userLoggedIn = true;
let role = "admin";
let subscriptionActive = true;

if (!userLoggedIn) {
  console.log("Please login first");
} else if (role === "admin") {
  console.log("Welcome Admin — full access granted"); // this runs
} else if (role === "user" && subscriptionActive) {
  console.log("Welcome — access granted");
} else {
  console.log("Access denied");
}


// ─────────────────────────────────────────
//  3.6 Real World Example — Discount Calculator
// ─────────────────────────────────────────

let cartTotal = 1500;
let isMember = true;

let discountPercent;

if (isMember && cartTotal >= 2000) {
  discountPercent = 20;
} else if (isMember && cartTotal >= 1000) {
  discountPercent = 10; // this runs
} else if (!isMember && cartTotal >= 2000) {
  discountPercent = 5;
} else {
  discountPercent = 0;
}

let finalPrice = cartTotal - (cartTotal * discountPercent) / 100;
console.log(`Discount: ${discountPercent}%`);     // Discount: 10%
console.log(`Final Price: ₹${finalPrice}`);        // Final Price: ₹1350
