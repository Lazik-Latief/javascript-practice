// ============================================
//   LAZIK'S JS LEARNING TRACK — LEVEL 1
//   Topic 7: Objects
// ============================================


// ─────────────────────────────────────────
//  7.1 Creating Objects
// ─────────────────────────────────────────

let user = {
  name: "Lazik",
  age: 21,
  city: "Srinagar",
  isLoggedIn: true
};

console.log(user);


// ─────────────────────────────────────────
//  7.2 Accessing & Updating Properties
// ─────────────────────────────────────────

// Dot notation (preferred)
console.log(user.name); // Lazik
console.log(user.age);  // 21

// Bracket notation (use when key is dynamic or has spaces)
console.log(user["city"]); // Srinagar

let key = "name";
console.log(user[key]); // Lazik — dynamic key access

// Update property
user.city = "Delhi";
console.log(user.city); // Delhi

// Add new property
user.email = "lazik@gmail.com";
console.log(user.email); // lazik@gmail.com

// Delete property
delete user.isLoggedIn;
console.log(user.isLoggedIn); // undefined


// ─────────────────────────────────────────
//  7.3 Methods inside Objects
// ─────────────────────────────────────────

let person = {
  name: "Lazik",
  age: 21,
  greet() {
    console.log(`Hi, I'm ${this.name}`); // 'this' refers to the object
  },
  isAdult() {
    return this.age >= 18;
  }
};

person.greet();          // Hi, I'm Lazik
console.log(person.isAdult()); // true


// ─────────────────────────────────────────
//  7.4 Destructuring — used everywhere in React
// ─────────────────────────────────────────

let profile = { name: "Lazik", age: 21, city: "Srinagar" };

// Without destructuring (verbose)
let name1 = profile.name;
let age1 = profile.age;

// With destructuring (clean & modern)
let { name, age, city } = profile;
console.log(name, age, city); // Lazik 21 Srinagar

// Rename while destructuring
let { name: userName, age: userAge } = profile;
console.log(userName, userAge); // Lazik 21

// Default values
let { name: n, role = "user" } = profile;
console.log(n, role); // Lazik user

// Destructuring in function parameters
const displayUser = ({ name, age, city = "Unknown" }) => {
  console.log(`${name}, ${age}, ${city}`);
};

displayUser(profile); // Lazik, 21, Srinagar


// ─────────────────────────────────────────
//  7.5 Spread Operator — copy & merge objects
// ─────────────────────────────────────────

let baseUser = { name: "Lazik", age: 21 };

// Copy object
let copiedUser = { ...baseUser };
copiedUser.name = "Dev";
console.log(baseUser.name);  // Lazik — original unchanged
console.log(copiedUser.name); // Dev

// Merge objects
let address = { city: "Srinagar", country: "India" };
let fullUser = { ...baseUser, ...address };
console.log(fullUser);
// { name: "Lazik", age: 21, city: "Srinagar", country: "India" }

// Update a specific field (used in React state updates)
let updatedUser = { ...baseUser, age: 22 };
console.log(updatedUser); // { name: "Lazik", age: 22 }


// ─────────────────────────────────────────
//  7.6 Looping over Objects
// ─────────────────────────────────────────

let settings = { theme: "dark", language: "en", notifications: true };

// for...in
for (let key in settings) {
  console.log(`${key}: ${settings[key]}`);
}
// theme: dark
// language: en
// notifications: true

// Object.keys() — array of keys
console.log(Object.keys(settings));   // ["theme", "language", "notifications"]

// Object.values() — array of values
console.log(Object.values(settings)); // ["dark", "en", true]

// Object.entries() — array of [key, value] pairs
console.log(Object.entries(settings));
// [["theme", "dark"], ["language", "en"], ["notifications", true]]

// Loop with entries
for (let [key, value] of Object.entries(settings)) {
  console.log(`${key} → ${value}`);
}


// ─────────────────────────────────────────
//  7.7 Nested Objects
// ─────────────────────────────────────────

let order = {
  id: 101,
  user: {
    name: "Lazik",
    email: "lazik@gmail.com"
  },
  product: {
    name: "Jacket",
    price: 2999
  },
  status: "shipped"
};

console.log(order.user.name);       // Lazik
console.log(order.product.price);   // 2999
console.log(order.status);          // shipped

// Destructuring nested
let { user: { name: buyerName }, product: { price } } = order;
console.log(buyerName, price); // Lazik 2999


// ─────────────────────────────────────────
//  7.8 Real World Example — User Profile System
// ─────────────────────────────────────────

const createUser = (name, age, role = "user") => ({
  name,
  age,
  role,
  isActive: true,
  greet() {
    return `Hi, I'm ${this.name} and I'm a ${this.role}`;
  },
  deactivate() {
    this.isActive = false;
    return `${this.name}'s account deactivated`;
  }
});

let lazik = createUser("Lazik", 21, "admin");
console.log(lazik.greet());        // Hi, I'm Lazik and I'm a admin
console.log(lazik.isActive);       // true
console.log(lazik.deactivate());   // Lazik's account deactivated
console.log(lazik.isActive);       // false


// ─────────────────────────────────────────
//  7.9 Real World Example — API Response Handling
// ─────────────────────────────────────────

// This is what real API data looks like
const apiResponse = {
  status: 200,
  data: {
    user: {
      id: 1,
      name: "Lazik",
      email: "lazik@gmail.com",
      subscription: {
        plan: "pro",
        expiresAt: "2025-12-31"
      }
    }
  }
};

// Safely extracting nested data
const { data: { user: { name: uName, email, subscription: { plan } } } } = apiResponse;
console.log(uName);  // Lazik
console.log(email);  // lazik@gmail.com
console.log(plan);   // pro
