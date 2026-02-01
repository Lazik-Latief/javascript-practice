// -------------------------------
// Object Literal Example
// -------------------------------

// `user` is a simple object created using object literal syntax
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    // Method inside an object
    getUserDetails: function () {
        // `this` refers to the current object (user)
        console.log(this);
    }
};

// Accessing object properties
// console.log(user.username);

// Calling object method
// user.getUserDetails();

// Outside any object, `this` refers to global context
// console.log(this);


// -------------------------------
// Constructor Function Example
// -------------------------------

// Constructor function to create multiple user objects
function User(username, loginCount, isLoggedIn) {
    // `this` refers to the new object being created
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // Method added to each user object
    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    };

    // `return this` is implicit when using `new`
}

// Creating new objects using `new` keyword
const userOne = new User("hitesh", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);

// Accessing method
userOne.greeting();
userTwo.greeting();

// `constructor` tells which function created the object
console.log(userOne.constructor);


// -------------------------------
// Additional Examples
// -------------------------------

// Example 1: Without `new` keyword (NOT recommended)
function Person(name) {
    this.name = name;
}

const person1 = new Person("Alex");
console.log(person1.name); // Alex

// Example 2: Checking instance using instanceof
console.log(userOne instanceof User); // true
console.log(user instanceof User);    // false

// Example 3: Adding property later
userOne.role = "Student";
console.log(userOne);
