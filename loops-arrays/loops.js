// ====================== forEach example ======================

// Array of programming languages
// const coding = ["js", "ruby", "java", "python", "cpp"]

// forEach runs a function on each element
// IMPORTANT: forEach does NOT return anything
// const values = coding.forEach((item) => {
//     console.log(item);   // prints each language
//     return item;         // this return is ignored by forEach
// })

// values will be undefined
// console.log(values);

// ====================== filter example ======================

// Array of numbers
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter returns a NEW array based on condition
// const newNums = myNums.filter((num) => {
//     return num > 4        // keeps numbers greater than 4
// })

// Same thing using forEach manually
// const newNums = []
// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num) // pushing matching values
//     }
// })

// console.log(newNums);

// ====================== filter with objects ======================

// Array of book objects
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// Filtering books with genre "History"
let userBooks = books.filter((bk) => bk.genre === "History");

// Filtering books published after 1995 AND genre History
userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History";
});

console.log(userBooks);

// ====================== map chaining ======================

// Array of numbers
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map creates a NEW array by transforming values
// const newNums = myNumers.map((num) => num + 10)

// Chaining multiple array methods
const newNums = myNumers
  .map((num) => num * 10) // multiply each number by 10
  .map((num) => num + 1) // add 1 to each result
  .filter((num) => num >= 40); // keep values >= 40

console.log(newNums);

// ====================== reduce example ======================

// Array for summing values
const myNumss = [1, 2, 3];

// reduce accumulates values into a single result
// acc = accumulator (stores total)
// curr = current value
// const myTotal = myNums.reduce(function (acc, currval) {
//   console.log(`acc: ${acc} and currval: ${currval}`);
//   return acc + currval
// }, 0)

// Arrow function version of reduce
const myTotal = myNumss.reduce((acc, curr) => acc + curr, 0);

console.log(myTotal);

// ====================== reduce with objects ======================

// Shopping cart with prices
const shoppingCart = [
  { itemName: "js course", price: 2999 },
  { itemName: "py course", price: 999 },
  { itemName: "mobile dev course", price: 5999 },
  { itemName: "data science course", price: 12999 },
];

// Adding all prices using reduce
const priceToPay = shoppingCart.reduce(
  (acc, item) => acc + item.price, // add each price
  0 // initial value
);

console.log(priceToPay);
