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
