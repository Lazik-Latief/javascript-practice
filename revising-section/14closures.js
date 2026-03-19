// ============================================================
//  TOPIC 1: CLOSURES
//  A closure is a function that "remembers" the variables
//  from its outer scope even after that scope has finished.
// ============================================================

// --- Example 1: Basic closure ---
function makeGreeter(name) {
  // 'name' lives in makeGreeter's scope
  return function () {
    console.log(`Hello, ${name}!`); // inner function remembers 'name'
  };
}

const greetAlice = makeGreeter("Alice");
const greetBob   = makeGreeter("Bob");

greetAlice(); // → Hello, Alice!
greetBob();   // → Hello, Bob!


// --- Example 2: Counter using closure ---
function makeCounter(start = 0) {
  let count = start; // private variable — not accessible from outside

  return {
    increment() { count++; },
    decrement() { count--; },
    value()     { return count; },
  };
}

const counter = makeCounter(10);
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.value()); // → 11
// console.log(count);        // ❌ ReferenceError — 'count' is private


// --- Example 3: Classic "loop closure" gotcha & fix ---

// ❌ Bug: all callbacks share the same 'i' (var is function-scoped)
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var loop:", i), 0);
}
// Prints: 3, 3, 3  — not what we wanted!

// ✅ Fix 1: use 'let' (block-scoped, new binding per iteration)
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let loop:", j), 0);
}
// Prints: 0, 1, 2  ✓

// ✅ Fix 2: use an IIFE to capture 'i' by value
for (var k = 0; k < 3; k++) {
  ((captured) => {
    setTimeout(() => console.log("IIFE loop:", captured), 0);
  })(k);
}
// Prints: 0, 1, 2  ✓


// --- Example 4: Memoization with closure ---
function memoize(fn) {
  const cache = {}; // closed over by the returned function

  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      console.log("Cache hit for", key);
      return cache[key];
    }
    cache[key] = fn(...args);
    return cache[key];
  };
}

function slowSquare(n) {
  // imagine an expensive computation
  return n * n;
}

const fastSquare = memoize(slowSquare);
console.log(fastSquare(5));  // computed → 25
console.log(fastSquare(5));  // Cache hit  → 25
console.log(fastSquare(9));  // computed → 81


// ============================================================
//  KEY TAKEAWAYS
//  • Closures let inner functions access outer variables.
//  • They enable private state without classes.
//  • Common use-cases: counters, factories, memoization,
//    event handlers, and module patterns.
// ============================================================
 