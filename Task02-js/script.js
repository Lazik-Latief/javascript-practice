// Creating an object oj1 with different properties
let oj1 = {
  name: "Lazik",          // string value
  age: 22,               // number value

  // nested object (object inside object)
  address: {
    city: "srinagar",
    village: "watlab",
  },

  Number: 9797685148,     // phone number
  working: true,         // boolean value
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
