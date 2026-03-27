// ===============================
// JavaScript Loops - Examples
// ===============================

// 1. FOR LOOP
// Used when you know how many times you want to run a loop

console.log("=== FOR LOOP ===");

for (let i = 1; i <= 5; i++) {
  console.log("Iteration:", i);
}

// -------------------------------

// 2. WHILE LOOP
// Runs while the condition is true

console.log("\n=== WHILE LOOP ===");

let count = 1;

while (count <= 5) {
  console.log("Count is:", count);
  count++;
}

// -------------------------------

// 3. DO...WHILE LOOP
// Runs at least once, even if condition is false

console.log("\n=== DO...WHILE LOOP ===");

let num = 1;

do {
  console.log("Number:", num);
  num++;
} while (num <= 5);

// -------------------------------

// 4. FOR...OF LOOP
// Used for iterating over arrays or iterable objects

console.log("\n=== FOR...OF LOOP ===");

const fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
  console.log(fruit);
}

// -------------------------------

// 5. FOR...IN LOOP
// Used for iterating over object keys

console.log("\n=== FOR...IN LOOP ===");

const person = {
  name: "Lazik",
  age: 20,
  role: "Developer"
};

for (let key in person) {
  console.log(key + ":", person[key]);
}

// -------------------------------

// 6. BREAK STATEMENT
// Stops the loop completely

console.log("\n=== BREAK EXAMPLE ===");

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break; // stops loop when i = 3
  }
  console.log(i);
}

// -------------------------------

// 7. CONTINUE STATEMENT
// Skips current iteration

console.log("\n=== CONTINUE EXAMPLE ===");

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // skips 3
  }
  console.log(i);
}

// -------------------------------

// 8. NESTED LOOP
// Loop inside another loop

console.log("\n=== NESTED LOOP ===");

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i = ${i}, j = ${j}`);
  }
}

// -------------------------------

// 9. PRACTICE EXAMPLE
// Print even numbers from 1 to 10

console.log("\n=== EVEN NUMBERS ===");

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// -------------------------------

// 10. ARRAY SUM EXAMPLE

console.log("\n=== ARRAY SUM ===");

const numbers = [10, 20, 30, 40];
let sum = 0;

for (let num of numbers) {
  sum += num;
}

console.log("Total Sum:", sum);

// ===============================
// End of File
// ===============================
